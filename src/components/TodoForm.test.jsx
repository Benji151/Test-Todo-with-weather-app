import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import TodoForm from "./TodoForm.jsx";

describe("TodoForm", () => {
  test("visar formuläret för ny uppgift", () => {
    render(<TodoForm isSaving={false} buttonVariant="B" />);

    const input = screen.getByRole("textbox", { name: "Ny uppgift" });
    const button = screen.getByRole("button", { name: "Skapa uppgift" });

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("");
    expect(button).toBeInTheDocument();
  });
});
