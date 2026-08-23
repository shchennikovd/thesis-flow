import { TaskStatus } from "./statuses"

export function canStartTask(status: TaskStatus): boolean {
  return status === "pending";
}

export function canCompleteTask(status: TaskStatus): boolean {
  return status === "in_progress"
}