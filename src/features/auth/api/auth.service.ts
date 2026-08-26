import { apiClient, endpoints } from "@/shared/api";
import { IUser } from "@/entities/user/model/types";
import { LoginDto } from "../model/dto";

// Допустим, бэкенд возвращает нам такой ответ при успешном логине
interface AuthResponse {
  user: IUser;
  token: string;
}

export const authService = {
  login: async (data: LoginDto) => {
    // 1. Отправляем запрос
    const response = await apiClient.post<AuthResponse>(`${endpoints.auth}/login`, data);
    
    // 2. Сохраняем токен в ApiClient
    apiClient.setToken(response.token);
    
    // 3. Возвращаем самого пользователя (чтобы сохранить его в будущем React-сторе)
    return response.user;
  },

  logout: () => {
    // Удаляем токен из клиента
    apiClient.setToken(null);
  }
};