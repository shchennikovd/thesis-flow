import { ID, ISODateString } from "@/shared/types/common";

export interface IThesis {
  id: ID;
  title: string;
  description?: string;

  studentId: ID;
  supervisorId: ID;

  workflowId: ID;

  createdAt: ISODateString;
  updatedAt: ISODateString;
}