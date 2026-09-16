import { getWeatherIcon,getClothingAdvice } from './weatherUtils';
import { describe, expect, test } from "vitest";

describe("getWeatherIcon", () => {
    test ("visar rätt ikon för soligt väder", () => {
        const weatherCode = 0;
        const result = getWeatherIcon(weatherCode);
        expect(result).toBe("☀️");
    });
});

describe("getClothingAdvice", () => {
    test("ger rätt klädråd för soligt väder", () => {
        const weatherCode = 0;
        const temperature = 3;
        const result = getClothingAdvice(weatherCode, temperature);
        expect(result).toBe("Ta på dig en varm jacka, mössa och handskar.");
    });
});