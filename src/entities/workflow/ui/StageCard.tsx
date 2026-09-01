import { IWorkflowStage } from "../model/types";
import { StatusBadge } from "./StatusBadge";
import { ReactNode } from "react";

interface StageCardProps {
  stage: IWorkflowStage;
  actionButton?: ReactNode; 
}

export function StageCard({ stage, actionButton }: StageCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold text-gray-800">
          {stage.order}. {stage.title}
        </h3>
        <StatusBadge status={stage.status} />
      </div>
      
      {stage.description && (
        <p className="text-gray-600 text-sm mb-4">{stage.description}</p>
      )}

      {actionButton && (
        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
          {actionButton}
        </div>
      )}
    </div>
  );
}