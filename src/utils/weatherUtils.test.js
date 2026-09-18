import { getWeatherIcon, getClothingAdvice } from "./weatherUtils";
import { describe, expect, test } from "vitest";

describe("getWeatherIcon", () => {
  test("visar rätt ikon för soligt väder", () => {
    // Arrange
    const weatherCode = 0;

    // Act
    const result = getWeatherIcon(weatherCode);

    // Assert
    expect(result).toBe("☀️");
  });
});

describe("getClothingAdvice", () => {
  test("lägger till paraply vid regnig väderkod", () => {
    // Arrange
    const temperature = 10;
    const weatherCode = 62;

    // Act
    const result = getClothingAdvice(temperature, weatherCode);

    // Assert
    expect(result).toContain("paraply");
  });
});
