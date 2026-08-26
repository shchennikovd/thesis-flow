import { describe, it, expect, vi, beforeEach } from "vitest";
import { submitStageUseCase } from "./use-cases";
import { workflowStageService } from "../api/workflow-stage.service";
import { AuthorizationError } from "@/shared/errors/AuthorizationError";
import { ValidationError } from "@/shared/errors/ValidationError";

vi.mock("../api/workflow-stage.service", () => ({
  workflowStageService: {
    submitStage: vi.fn(), 
    approveStage: vi.fn(),
  }
}));

describe("Workflow Use Cases (submitStage)", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const validStudent = { id: "student-1", role: "student" } as any;
  const validThesis = { id: "thesis-1", studentId: "student-1" } as any;
  const validStage = { id: "stage-1", status: "in_progress" } as any;

  it("должен выбросить AuthorizationError, если у пользователя нет прав", async () => {
    const hackerUser = { id: "hacker-1", role: "supervisor" } as any;

    await expect(() => submitStageUseCase(hackerUser, validThesis, validStage))
      .rejects
      .toThrow(AuthorizationError);
  });

  it("должен выбросить ValidationError, если этап нельзя отправить (например, он уже approved)", async () => {

    const invalidStage = { id: "stage-2", status: "approved" } as any;
    await expect(() => submitStageUseCase(validStudent, validThesis, invalidStage))
    .rejects
    .toThrow(ValidationError);
  });

  it("должен успешно вызвать API сервис, если все данные верны", async () => {
    vi.mocked(workflowStageService.submitStage).mockResolvedValue(validStage);

    const result = await submitStageUseCase(validStudent, validThesis, validStage);

    expect(result).toEqual(validStage);

    expect(workflowStageService.submitStage).toHaveBeenCalledWith("stage-1");
  });
});