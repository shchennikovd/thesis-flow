import { IDocument } from "@/entities/document/model/types"
import { apiClient, endpoints } from "@/shared/api"
import { ID } from "@/shared/types/common";

export const documentService = {
  getById: (id: ID) => {
    return apiClient.get<IDocument>(`${endpoints.documents}/${id}`);
  }
}