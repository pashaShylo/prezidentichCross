import { Village, City } from "../../classes/lab4-5/index";

describe("Village", () => {
    test("should create a village instance", () => {
        const village = new Village("Village 1", 50, 5, 100);
        expect(village.name).toBe("Village 1");
        expect(village.numberOfHouses).toBe(50);
        expect(village.residentsPerHouse).toBe(5);
        expect(village.villageArea).toBe(100);
    });

    test("should calculate population density correctly", () => {
        const village = new Village("Village 1", 50, 5, 100);
        expect(village.calculatePopulationDensity()).toBe(2.5);
    });

    test("should return 0 population density if there are no houses", () => {
        const village = new Village("Village 1", 0, 5, 100);
        expect(village.calculatePopulationDensity()).toBe(0);
    });
});

describe("City", () => {
    test("should create a city instance", () => {
        const city = new City("City 1", 100000, 5000);
        expect(city.name).toBe("City 1");
        expect(city.population).toBe(100000);
        expect(city.cityArea).toBe(5000);
    });

    test("should calculate population density correctly", () => {
        const city = new City("City 1", 100000, 5000);
        expect(city.calculatePopulationDensity()).toBe(20);
    });

    test("should return 0 population density if city area is 0", () => {
        const city = new City("City 1", 100000, 0);
        expect(city.calculatePopulationDensity()).toBe(0);
    });
});
