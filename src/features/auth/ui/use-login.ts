import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { authService } from "../api/auth.service";
import { LoginDto } from "../model/dto";
import { ApiError } from "@/shared/errors/ApiError";
import { IUser } from "@/entities/user/model/types";

export function useLogin() {
  const navigate = useNavigate();

  return useMutation<IUser, ApiError, LoginDto>({
    mutationFn: async (data) => {
      return await authService.login(data);
    },
    onSuccess: (user) => {
      navigate("/");
    },
  });
}