import { IThesis } from "@/entities/thesis/model/types";
import { apiClient, endpoints } from "@/shared/api";
import { ID } from "@/shared/types/common";


export const thesisService = {
  getById: (id: ID) => {
    return apiClient.get<IThesis>(`${endpoints.thesis}/${id}`);
  },

  getStudentThesis: (studentId: ID) => {
    return apiClient.get<IThesis[]>(`${endpoints.thesis}?studentId=${studentId}`);
  },

  getSupervisorTheses: (supervisorId: ID) => {
    return apiClient.get<IThesis[]>(`${endpoints.thesis}?supervisorId=${supervisorId}`);
  }

};