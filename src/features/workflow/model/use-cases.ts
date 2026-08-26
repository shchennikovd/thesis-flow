import { IUser } from "@/entities/user/model/types";
import { IThesis } from "@/entities/thesis/model/types";
import { IWorkflowStage } from "@/entities/workflow/model/types";

import { hasPermission } from "@/entities/user/model/permissions";
import { isThesisOwner, isThesisSupervisor } from "@/entities/thesis/model/thesis.rules";
import { canTransition } from "@/entities/workflow/model/stage-transition";

import { AuthorizationError } from "@/shared/errors/AuthorizationError";
import { ValidationError } from "@/shared/errors/ValidationError";

import { workflowStageService } from "../api/workflow-stage.service";

/**
 * Use Case: Студент отправляет этап на проверку
 * Мы передаем сюда пользователя (кто нажал), диплом (чтобы проверить владельца) и сам этап.
 */
export async function submitStageUseCase(user: IUser, thesis: IThesis, stage: IWorkflowStage): Promise<IWorkflowStage> {
  
  // 1. Проверяем базовое право (Permission)
  if(!hasPermission(user.role, "stage:submit")) {
    throw new AuthorizationError("У вас нет прав отправлять этапы на проверку");
  }
  
  // 2. Проверяем владение (Ownership)
  if(!isThesisOwner(thesis, user.id)) {
    throw new AuthorizationError("Это не ваша дипломная работа");
  }

  // 3. Проверяем стейт-машину
  if(!canTransition(stage.status, "submitted")) {
    throw new ValidationError("Этот этап нельзя отправить на проверку в данный момент");
  }

  // 4. Если все проверки пройдены, отправляем запрос на сервер
  const updatedStage = await workflowStageService.submitStage(stage.id);

  return updatedStage;
}

export async function approveStageUseCase(user: IUser, thesis: IThesis, stage: IWorkflowStage): Promise<IWorkflowStage> {
  if(!hasPermission(user.role, "stage:approve")) {
    throw new AuthorizationError("У вас нет прав утверждать этапы");
  }

  if(!isThesisSupervisor(thesis, user.id)) {
    throw new AuthorizationError("Вы не являетесь научным руководителем этой дипломной работы");
  }

  if(!canTransition(stage.status, "approved")) {
    throw new ValidationError("Этот этап нельзя утвердить в данный момент");
  }

  const approvedStage = await workflowStageService.approveStage(stage.id);

  return approvedStage;
}