import { ID, ISODateString } from "@/shared/types/common"
import { TaskStatus } from "./statuses";

export interface ITask {
  id: ID;
  thesisId: ID;
  title: string;
  description?: string;
  createdBy: ID;
  assignedTo: ID;
  deadline: ISODateString | null;
  status: TaskStatus;
  createdAt: ISODateString;
  updatedAt: ISODateString;
  stageId?: ID;
}