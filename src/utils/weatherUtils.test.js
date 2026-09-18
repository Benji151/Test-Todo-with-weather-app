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
        const tempreture = 0;
        const weatherCode = 0;
        const result = getClothingAdvice(tempreture, weatherCode);
        expect(result).toBe("Ta på dig en varm jacka, mössa och handskar.");
    });
});