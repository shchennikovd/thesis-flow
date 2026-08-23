import { AppError } from "./AppError";

export class NotFoundError extends AppError {
  constructor(message: string = "Запрашиваемый ресурс не найден") {
    super(message);
  }
}