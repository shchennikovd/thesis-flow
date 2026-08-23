import { AppError } from "./AppError";

export class ApiError extends AppError {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    
    this.status = status;
  }

  
}