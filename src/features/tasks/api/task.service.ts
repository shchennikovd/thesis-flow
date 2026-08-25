import { ITask } from "@/entities/task/model/types";
import { apiClient, endpoints } from "@/shared/api";
import { ID } from "@/shared/types/common";

export const taskService = {
  getById: (id: ID) => {
    return apiClient.get<ITask>(`${endpoints.tasks}/${id}`);
  }
}