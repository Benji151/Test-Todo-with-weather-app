import { describe, expect, test } from "vitest";
import { validateTitle,filterTasks,countActiveTasks,countCompletedTasks } from "../utils/taskUtils.js";

describe("validateTitle", () => {
  test("Tom titel ska renunerar felmedelande ", () => {
    // Arrange
    const title = "";

    // Act
    const result = validateTitle(title);

    // Assert
    expect(result).toBe("Skriv en uppgift innan du fortsätter.");
  });
});

describe("filterTasks", () => {
  const tasks=[
    { id: 1, title: "Förbered presentation", completed: false },
    { id: 2, title: "Rätta inlämningar", completed: true },

  ];

  test("Returnerar alla uppgifter", () => {
    // Act
    const result = filterTasks(tasks, "all");

    // Assert
    expect(result).toEqual(tasks);
  });
  test("Returnerar endast aktiva uppgifter", () => {
    // Act
    const result = filterTasks(tasks, "active");

    // Assert
    expect(result).toEqual([tasks[0]]);

  });
  test("Returnerar endast slutförda uppgifter", () => {
    // Act
    const result = filterTasks(tasks, "completed");

    // Assert
    expect(result).toEqual([tasks[1]]);
  });
});

describe("countActiveTasks", () => {
  test("Antal aktiva uppgifter ", () => {
    // Arrange
    const tasks = [
      { id: 1, title: "Förbered presentation", completed: false },
      { id: 2, title: "Rätta inlämningar", completed: true },
    ];
    // Act
    const result = countActiveTasks(tasks);

    // Assert
    expect(result).toBe(1);
  });
});

describe("countCompletedTasks", () => {
  test("Antal slutförda uppgifter ", () => {
    // Arrange
    const tasks = [
      { id: 1, title: "Förbered presentation", completed: false },
      { id: 2, title: "Rätta inlämningar", completed: true },
    ];
    // Act
    const result = countCompletedTasks(tasks);

    // Assert
    expect(result).toBe(1);
  });
});



