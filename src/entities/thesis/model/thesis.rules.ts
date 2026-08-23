import { ID } from "@/shared/types/common";
import { IThesis } from "./types";

export function isThesisOwner(thesis: IThesis, userId: ID): boolean {
  return thesis.studentId === userId;
}

export function isThesisSupervisor(thesis: IThesis, userId: ID): boolean {
  return thesis.supervisorId === userId;
}