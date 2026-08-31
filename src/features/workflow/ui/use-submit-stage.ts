import { useMutation, useQueryClient } from "@tanstack/react-query";
import { submitStageUseCase } from "../model/use-cases";
import { IUser } from "@/entities/user/model/types";
import { IThesis } from "@/entities/thesis/model/types";
import { IWorkflowStage } from "@/entities/workflow/model/types";
import { AppError } from "@/shared/errors/AppError";

interface SubmitStageParams {
  user: IUser;
  thesis: IThesis;
  stage: IWorkflowStage;
}

export function useSubmitStage() {
  const queryClient = useQueryClient();

  return useMutation<IWorkflowStage, AppError, SubmitStageParams>({
    
    mutationFn: async (params) => {
      const { user, thesis, stage } = params;
      const updatedStage = await submitStageUseCase(user, thesis, stage);
      return updatedStage;
    },

    onSuccess: (updatedStage) => {
      queryClient.invalidateQueries({ queryKey: ["workflow-stages", updatedStage.workflowId] });
    },
  });
}