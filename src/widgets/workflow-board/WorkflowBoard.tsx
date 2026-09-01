import { useWorkflowStages } from "@/features/workflow/ui/use-workflow-stages";
import { useSubmitStage } from "@/features/workflow/ui/use-submit-stage";
import { StageCard } from "@/entities/workflow/ui/StageCard";
import { Button } from "@/shared/ui/button/Button";
import { IThesis } from "@/entities/thesis/model/types";
import { IUser } from "@/entities/user/model/types";

interface WorkflowBoardProps {
  thesis: IThesis;
}

export function WorkflowBoard({ thesis }: WorkflowBoardProps) {
  const { data: stages, isLoading } = useWorkflowStages(thesis.workflowId);
  
  const { mutate: submitStage, isPending } = useSubmitStage();

  const currentUser = { id: "student-123", role: "student" } as IUser;

  if (isLoading) return <p className="text-gray-500 animate-pulse">Загрузка доски...</p>;

  const sortedStages = [...(stages || [])].sort((a, b) => a.order - b.order);

  return (
    <div className="flex flex-col gap-4 mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-2">Этапы работы</h2>
      
      {sortedStages.map((stage) => (
        <StageCard
          key={stage.id}
          stage={stage}
          actionButton={
            stage.status === "in_progress" ? (
              <Button
                onClick={() => submitStage({ user: currentUser, thesis, stage })}
                isLoading={isPending}
              >
                Отправить на проверку
              </Button>
            ) : null
          }
        />
      ))}
    </div>
  );
}