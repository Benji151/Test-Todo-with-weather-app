import { describe, expect, test } from "vitest";
import { validateTitle } from "../utils/taskUtils.js";

describe("validateTitle", () => {
  test("Tom titel ska renunerar felmedelande ", () => {
    const title = "";
    const result = validateTitle(title);
    expect(result).toBe("Skriv en uppgift innan du fortsätter.");
  });
});

test("Titel med mindre än 2 tecken ska renunerar felmedelande", () => {
  const title = "a";
  const result = validateTitle(title);
  expect(result).toBe("Uppgiften måste innehålla minst två tecken.");
});

test("Rätt titel ska inte renunerar felmedelande", () => {
  const title = "Göra klart uppgiften";
  const result = validateTitle(title);
  expect(result).toBe("");
});

