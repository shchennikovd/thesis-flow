import { describe, it, expect } from "vitest";
import { isThesisOwner } from "./thesis.rules";
import { IThesis } from "./types";

describe("Thesis Rules (Ownership)", () => {
  
  // Создаем фальшивую дипломную работу для тестов
  const mockThesis = {
    id: "thesis-1",
    studentId: "student-123",
    supervisorId: "supervisor-456",
  } as IThesis;

  it("должен возвращать true, если userId совпадает со studentId", () => {
    expect(isThesisOwner(mockThesis, "student-123")).toBe(true);
  });

  it("должен возвращать false, если userId НЕ совпадает со studentId", () => {
    expect(isThesisOwner(mockThesis, "hacker-999")).toBe(false);
  });
});