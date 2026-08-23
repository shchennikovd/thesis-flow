import { WorkflowStageStatus } from "./statuses"

const ALLOWED_TRANSITIONS: Record<WorkflowStageStatus, WorkflowStageStatus[]> = {
  pending: ["in_progress"],
  in_progress: ["submitted"],
  submitted: ["approved", "revision"],
  revision: ["in_progress"],
  approved: [],
}

export function getAllowedTransitions(status: WorkflowStageStatus): WorkflowStageStatus[] {
  return ALLOWED_TRANSITIONS[status] || [];
}

export function canTransition(from: WorkflowStageStatus, to: WorkflowStageStatus): boolean {
  const allowedTransitions = getAllowedTransitions(from);
  return allowedTransitions.includes(to);
}
