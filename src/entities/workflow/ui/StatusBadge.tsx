import { WorkflowStageStatus } from "../model/statuses";

export function StatusBadge({ status }: { status: WorkflowStageStatus }) {
  const config: Record<WorkflowStageStatus, { text: string; colors: string }> = {
    pending: { text: "Ожидает", colors: "bg-gray-100 text-gray-600" },
    in_progress: { text: "В работе", colors: "bg-blue-100 text-blue-700" },
    submitted: { text: "На проверке", colors: "bg-yellow-100 text-yellow-700" },
    revision: { text: "Доработка", colors: "bg-red-100 text-red-700" },
    approved: { text: "Утверждено", colors: "bg-green-100 text-green-700" },
  };

  const { text, colors } = config[status];

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${colors}`}>
      {text}
    </span>
  );
}