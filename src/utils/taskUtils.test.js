import { describe, expect, test } from "vitest";
import { validateTitle,filterTasks,countActiveTasks,countCompletedTasks } from "../utils/taskUtils.js";

describe("validateTitle", () => {
  test("Tom titel ska renunerar felmedelande ", () => {
    const title = "";
    const result = validateTitle(title);
    expect(result).toBe("Skriv en uppgift innan du fortsätter.");
  });
});

describe("filterTasks", () => {
  test("Filtrerar uppgifter", () => {
  const tasks=[
    { id: 1, title: "Förbered presentation", completed: false },
    { id: 2, title: "Rätta inlämningar", completed: true },

  ];
  const result = filterTasks(tasks, "Filter på alla uppgifter");
  expect(result).toEqual(tasks);

});
});

describe("countActiveTasks", () => {
  test("Antal aktiva uppgifter ", () => {
    const tasks = [
      { id: "1", title: "Förbered presentation", completed: false },
      { id: "2", title: "Rätta inlämningar", completed: true },
    ];
    const result = countActiveTasks(tasks);
    expect(result).toBe(1);
  });
});

describe("countCompletedTasks", () => {
  test("Antal slutförda uppgifter ", () => {
    const tasks = [
      { id: "1", title: "Förbered presentation", completed: false },
      { id: "2", title: "Rätta inlämningar", completed: true },
    ];
    const result = countCompletedTasks(tasks);
    expect(result).toBe(1);
  });
});


