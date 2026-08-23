import { AppError } from "./AppError";

export class AuthorizationError extends AppError {
  constructor(message: string = "У вас нет прав для выполнения этого действия") {
    super(message);
  }
}