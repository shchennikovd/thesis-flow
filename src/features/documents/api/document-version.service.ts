import { apiClient, endpoints } from "@/shared/api";
import { IDocumentVersion } from "@/entities/document/model/types";
import { ID } from "@/shared/types/common";

export const documentVersionService = {
  // Метод для загрузки физического файла
  uploadVersion: (documentId: ID, file: File) => {
    const formData = new FormData();
    formData.append("file", file); // Упаковываем файл в форму
    
    return apiClient.postFormData<IDocumentVersion>(
      `${endpoints.versions}/${documentId}/upload`, 
      formData
    );
  }
};