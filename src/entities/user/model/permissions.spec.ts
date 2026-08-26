import { describe, it, expect } from "vitest";
import { hasPermission } from "./permissions";

describe("User Permissions", () => {
  
  it("должен разрешать студенту отправлять этап (stage:submit)", () => {
    expect(hasPermission("student", "stage:submit")).toBe(true);
  });

  it("НЕ должен разрешать студенту утверждать этап (stage:approve)", () => {
    expect(hasPermission("student", "stage:approve")).toBe(false);
  });

  it("должен разрешать руководителю утверждать этап (stage:approve)", () => {
    expect(hasPermission("supervisor", "stage:approve")).toBe(true);
  });

  it("НЕ должен разрешать руководителю загружать документы (document:upload)", () => {
    expect(hasPermission("supervisor", "document:upload")).toBe(false);
  });
});