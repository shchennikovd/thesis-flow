import { describe, it, expect } from "vitest";
import { getLatestVersion } from "./document.rules";
import { IDocumentVersion } from "./types";

describe("Document Rules (getLatestVersion)", () => {
  
  it("должен возвращать null, если массив версий пустой", () => {
    expect(getLatestVersion([])).toBeNull();
  });

  it("должен возвращать единственную версию, если в массиве только один элемент", () => {
    const mockVersions = [
      { id: "v1", version: 1 }
    ] as IDocumentVersion[];

    expect(getLatestVersion(mockVersions)).toEqual(mockVersions[0]);
  });

  it("должен находить максимальную версию, даже если элементы идут не по порядку", () => {
    const mockVersions = [
      { id: "v2", version: 2 },
      { id: "v5", version: 5 }, // <-- победитель
      { id: "v1", version: 1 },
      { id: "v4", version: 4 },
    ] as IDocumentVersion[];

    const latest = getLatestVersion(mockVersions);

    expect(latest?.id).toBe("v5");
    expect(latest?.version).toBe(5);
  });
});