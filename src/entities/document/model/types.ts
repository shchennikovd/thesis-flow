import { ID, ISODateString } from "@/shared/types/common";
import { DocumentVersionStatus } from "./statuses";

export interface IDocument {
  id: ID;
  thesisId: ID;
  stageId: ID;
  title: string;
  createdAt: ISODateString;
  updatedAt: ISODateString;
}

export interface IDocumentVersion {
  id: ID;
  documentId: ID;
  version: number;
  fileName: string;
  fileUrl: string;
  fileSize: number;
  mimeType: string;
  status: DocumentVersionStatus;
  uploadedBy: ID;
  createdAt: ISODateString;
}