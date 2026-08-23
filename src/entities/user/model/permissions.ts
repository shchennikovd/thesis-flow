import { UserRole } from "./roles";

export type Permission =
  | "thesis:view-own"
  | "thesis:view-students"
  | "thesis:create"
  | "thesis:update"
  | "workflow:create"
  | "workflow:update"
  | "stage:submit"
  | "stage:approve"
  | "stage:request-revision"
  | "document:upload"
  | "document:approve"
  | "task:create"
  | "task:update";

const rolePermissions: Record<UserRole, Permission[]> = {
  student: [
    "thesis:view-own",
    "stage:submit",
    "document:upload",
    "task:update",
  ],

  supervisor: [
    "thesis:view-students",
    "thesis:update",
    "workflow:create",
    "workflow:update",
    "stage:approve",
    "stage:request-revision",
    "document:approve",
    "task:create",
    "task:update",
  ]
};

export function hasPermission(role: UserRole, permission: Permission): boolean {
  return rolePermissions[role].includes(permission);
}