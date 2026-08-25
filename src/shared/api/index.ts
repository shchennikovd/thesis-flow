import { ApiClient } from "./ApiClient";
import { endpoints } from "./endpoints";

// Пока заглушка URL (потом  вынести это в .env)
export const apiClient = new ApiClient("http://localhost:3000/api");

// Экспортируем клиента и эндпоинты, чтобы сервисам было удобно их импортировать из одной точки
export { endpoints };