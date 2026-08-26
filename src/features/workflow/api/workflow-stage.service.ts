import { apiClient, endpoints } from "@/shared/api";
import { IWorkflowStage } from "@/entities/workflow/model/types";
import { ID } from "@/shared/types/common";

export const workflowStageService = {
  submitStage: (id: ID) => {
    return apiClient.post<IWorkflowStage>(`${endpoints.stages}/${id}/submit`);
  },
  approveStage: (id: ID) => {
    return apiClient.post<IWorkflowStage>(`${endpoints.stages}/${id}/approve`);
  }
};