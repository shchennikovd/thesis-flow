import { DocumentVersionStatus } from "./statuses";
import { IDocumentVersion } from "./types";

export function getLatestVersion(versions: IDocumentVersion[]): IDocumentVersion | null {
  if (versions.length === 0) {
    return null;
  }

  return versions.reduce((latest, current) => {
    return current.version > latest.version ? current : latest;
  })
}

export function canSubmitVersion(status: DocumentVersionStatus): boolean {
  return status === "draft";
}

export function canApproveVersion(status: DocumentVersionStatus): boolean{
  return status === "submitted";
}