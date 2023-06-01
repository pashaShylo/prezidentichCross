import log from "./log";
import recursion from "./recursion";
import tabX from "./tabX";
import series from "./series";
import tabY from "./tabY";

describe("log", () => {
    test("should log each element in the array", () => {
        const spy = jest.spyOn(console, "log");
        const arr = [1, 2, 3];
        log(arr);
        expect(spy).toHaveBeenCalledTimes(3);
        expect(spy).toHaveBeenNthCalledWith(1, 1);
        expect(spy).toHaveBeenNthCalledWith(2, 2);
        expect(spy).toHaveBeenNthCalledWith(3, 3);
        spy.mockRestore();
    });
});

describe("recursion", () => {
    test("should return the correct result for each input", () => {
        const arrX = [1, 2, 3];
        const expected = [0.54, -0.42, -0.99];
        const result = recursion(arrX);
        expect(result).toEqual(expected);
    });
});

describe("tabX", () => {
    test("should return the correct result for the specified range and step", () => {
        const min = 1;
        const max = 5;
        const step = 2;
        const expected = [1.0, 3.0, 5.0];
        const result = tabX(min, max, step);
        expect(result).toEqual(expected);
    });
});

describe("series", () => {
    test("should return the correct result for each input", () => {
        const arrX = [1, 2, 3];
        const expected = [0.54, -0.42, -0.99];
        const result = series(arrX);
        expect(result).toEqual(expected);
    });
});

describe("tabY", () => {
    test("should return the correct result for each input", () => {
        const arrX = [1, 2, 3];
        const expected = [0.54, -0.42, -0.99];
        const result = tabY(arrX);
        expect(result).toEqual(expected);
    });
});
