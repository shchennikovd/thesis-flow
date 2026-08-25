import { apiClient, endpoints } from "@/shared/api";
import { IWorkflow } from "@/entities/workflow/model/types";
import { ID } from "@/shared/types/common";

export const workflowService = {
  getById: (id: ID) => {
    return apiClient.get<IWorkflow>(`${endpoints.workflows}/${id}`);
  },
};