import { useMutation } from "@tanstack/react-query";
import { authService } from "../api/auth.service";
import { LoginDto } from "../model/dto";
import { ApiError } from "@/shared/errors/ApiError";
import { IUser } from "@/entities/user/model/types";

export function useLogin() {
  return useMutation<IUser, ApiError, LoginDto>({
    mutationFn: async (data) => {
      return authService.login(data);
    },
    onSuccess: (user) => {
      alert(`Успешный вход! Привет, ${user.name}`);

    },
  });
}