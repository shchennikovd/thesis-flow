import { z } from "zod";

export const createThesisSchema = z.object({
  title: z.string().min(5, "Название должно содержать минимум 5 символов"),
  description: z.string().optional(),
  studentId: z.string().uuid("Неверный формат ID студента"), // Предполагаем, что ID - это UUID
  supervisorId: z.string().uuid("Неверный формат ID руководителя"),
});

export type CreateThesisDto = z.infer<typeof createThesisSchema>;

export const updateThesisSchema = z.object({
  title: z.string().min(5, "Название должно содержать минимум 5 символов").optional(),
  description: z.string().optional(),
  supervisorId: z.string().uuid("Неверный формат ID руководителя").optional(),
})

export type UpdateThesisDto = z.infer<typeof updateThesisSchema>;