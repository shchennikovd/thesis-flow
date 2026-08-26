import { IDocumentVersion } from "@/entities/document/model/types";
import { isThesisOwner } from "@/entities/thesis/model/thesis.rules";
import { IThesis } from "@/entities/thesis/model/types";
import { hasPermission } from "@/entities/user/model/permissions";
import { IUser } from "@/entities/user/model/types";
import { AuthorizationError } from "@/shared/errors/AuthorizationError";
import { ID } from "@/shared/types/common";
import { documentVersionService } from "../document-version.service";


export async function uploadDocumentVersionUseCase(user: IUser, thesis: IThesis, documentId: ID, file: File): Promise<IDocumentVersion> {
  if(!hasPermission(user.role, "document:upload")) {
    throw new AuthorizationError("У вас нет прав загружать версии документов");
  }

  if(!isThesisOwner(thesis, user.id)) {
    throw new AuthorizationError("Вы не являетесь владельцем этой дипломной работы");
  }

  const uploadedDocumentStage = await documentVersionService.uploadVersion(documentId, file);

  return uploadedDocumentStage;
}