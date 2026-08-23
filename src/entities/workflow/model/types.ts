import { ID, ISODateString } from "@/shared/types/common"
import { WorkflowStageStatus } from "./statuses";

export interface IWorkflow {
  id: ID;
  thesisId: ID;
  title: string;
  currentStageId: ID | null;
  createdAt: ISODateString;
  updatedAt: ISODateString;
}

export interface IWorkflowStage {
  id: ID;
  workflowId: ID;
  title: string;
  description?: string;
  order: number;
  deadline: ISODateString | null;
  status: WorkflowStageStatus;
  createdAt: ISODateString;
  updatedAt: ISODateString;
}