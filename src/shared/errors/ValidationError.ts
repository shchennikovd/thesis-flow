import { AppError } from "./AppError";

export class ValidationError extends AppError {
  constructor(message: string = "Validation error", public errors: Record<string, string[]> = {}) {
    super(message);
  }
}