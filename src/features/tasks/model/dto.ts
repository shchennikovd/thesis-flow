import { z } from "zod";

export const createTaskSchema = z.object({
  thesisId: z.string().uuid("Неверный формат ID дипломной работы"),
  title: z.string().min(3, "Название должно содержать минимум 3 символа"),
  description: z.string().optional(),
  assignedTo: z.string().uuid("Неверный формат ID пользователя"),
  deadline: z.string().nullable().optional(),
  stageId: z.string().uuid("Неверный формат ID этапа").optional()
})

export type CreateTaskDto = z.infer<typeof createTaskSchema>;

export const updateTaskSchema = z.object({
  title: z.string().min(3, "Название должно содержать минимум 3 символа").optional(),
  description: z.string().optional(),
  deadline: z.string().nullable().optional(),
})

export type UpdateTaskDto = z.infer<typeof updateTaskSchema>;