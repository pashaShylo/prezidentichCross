import { Worker, Staff, Engineer, Administration } from "../../classes/lab6";

describe("Worker", () => {
    test("should introduce correctly", () => {
        const worker = new Worker("John");
        expect(worker.introduce()).toBe("I am a worker named John");
    });

    test("should do work correctly", () => {
        const worker = new Worker("John");
        expect(worker.doWork()).toBe("John is doing work.");
    });
});

describe("Staff", () => {
    test("should introduce correctly", () => {
        const staff = new Staff("Jane");
        expect(staff.introduce()).toBe("I am a staff member named Jane");
    });

    test("should do work correctly", () => {
        const staff = new Staff("Jane");
        expect(staff.doWork()).toBe("Jane is doing work.");
    });

    test("should hire correctly", () => {
        const staff = new Staff("Jane");
        expect(staff.hire()).toBe("Jane is hired.");
    });

    test("should fire correctly", () => {
        const staff = new Staff("Jane");
        expect(staff.fire()).toBe("Jane is fired.");
    });
});

describe("Engineer", () => {
    test("should introduce correctly", () => {
        const engineer = new Engineer("Bob");
        expect(engineer.introduce()).toBe("I am an engineer named Bob");
    });

    test("should do work correctly", () => {
        const engineer = new Engineer("Bob");
        expect(engineer.doWork()).toBe("Bob is doing work.");
    });
});

describe("Administration", () => {
    test("should introduce correctly", () => {
        const admin = new Administration("Alice");
        expect(admin.introduce()).toBe(
            "I am a member of administration named Alice"
        );
    });

    test("should hire correctly", () => {
        const admin = new Administration("Alice");
        expect(admin.hire()).toBe("Alice is hired.");
    });

    test("should fire correctly", () => {
        const admin = new Administration("Alice");
        expect(admin.fire()).toBe("Alice is fired.");
    });
});
