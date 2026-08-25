import { IThesis } from "@/entities/thesis/model/types";
import { apiClient, endpoints } from "@/shared/api";
import { ID } from "@/shared/types/common";
import { CreateThesisDto, UpdateThesisDto } from "../model/dto";


export const thesisService = {
  getById: (id: ID) => {
    return apiClient.get<IThesis>(`${endpoints.thesis}/${id}`);
  },

  getStudentThesis: (studentId: ID) => {
    return apiClient.get<IThesis[]>(`${endpoints.thesis}?studentId=${studentId}`);
  },

  getSupervisorTheses: (supervisorId: ID) => {
    return apiClient.get<IThesis[]>(`${endpoints.thesis}?supervisorId=${supervisorId}`);
  },

  create: (data: CreateThesisDto) => {
    return apiClient.post<IThesis>(endpoints.thesis, data);
  },

  update: (id: ID, data: UpdateThesisDto) => {
    return apiClient.patch<IThesis>(`${endpoints.thesis}/${id}`, data)
  }
};