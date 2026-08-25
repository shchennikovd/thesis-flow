import { z } from "zod";

export const createWorkflowStageSchema = z.object({
  workflowId: z.string().uuid("Неверный формат ID рабочего процесса"),
  title: z.string().min(3, "Название должно содержать минимум 3 символа"),
  description: z.string().optional(),
  order: z.number().int().nonnegative("Порядок должен быть неотрицательным числом"),
  deadline: z.string().nullable().optional()
})

export type CreateWorkflowStageDto = z.infer<typeof createWorkflowStageSchema>;

export const updateWorkflowStageSchema = z.object({
  title: z.string().min(3, "Название должно содержать минимум 3 символа").optional(),
  description: z.string().optional(),
  order: z.number().int().nonnegative("Порядок должен быть неотрицательным числом").optional(),
  deadline: z.string().nullable().optional()
})

export type UpdateWorkflowStageDto = z.infer<typeof updateWorkflowStageSchema>;