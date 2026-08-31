import { useQuery } from "@tanstack/react-query";
import { workflowStageService } from "../api/workflow-stage.service";
import { ID } from "@/shared/types/common";

export function useWorkflowStages(workflowId: ID) {
  return useQuery({
    queryKey: ["workflow-stages", workflowId],
    queryFn: async () => {
      return workflowStageService.getByWorkflowId(workflowId);
    }
  })
}