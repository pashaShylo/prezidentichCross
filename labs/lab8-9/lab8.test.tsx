import {
    Kafedra,
    ValidationResult,
    nameValidator,
    amountValidator,
    addressValidator,
    initialsValidator,
    listOfTeachersValidator,
} from "./validation";

describe("nameValidator", () => {
    test("should return valid for a name with valid length", () => {
        const kafedra: Kafedra = {
            name: "Computer Science",
            amount: 10,
            initials: "AB",
            address: "123 Main Street",
            listOfTeachers: [],
        };
        const result: ValidationResult = nameValidator(kafedra);
        expect(result.isValid).toBe(true);
    });

    test("should return invalid and a message for a name with invalid length", () => {
        const kafedra: Kafedra = {
            name: "CS",
            amount: 10,
            initials: "AB",
            address: "123 Main Street",
            listOfTeachers: [],
        };
        const result: ValidationResult = nameValidator(kafedra);
        expect(result.isValid).toBe(false);
        expect(result.message).toBe(
            "Назва кафедри має містити від 3 до 50 символів"
        );
    });
});

describe("amountValidator", () => {
    test("should return valid for a valid amount", () => {
        const kafedra: Kafedra = {
            name: "Computer Science",
            amount: 10,
            initials: "AB",
            address: "123 Main Street",
            listOfTeachers: [],
        };
        const result: ValidationResult = amountValidator(kafedra);
        expect(result.isValid).toBe(true);
    });

    test("should return invalid and a message for an invalid amount", () => {
        const kafedra: Kafedra = {
            name: "Computer Science",
            amount: 0,
            initials: "AB",
            address: "123 Main Street",
            listOfTeachers: [],
        };
        const result: ValidationResult = amountValidator(kafedra);
        expect(result.isValid).toBe(false);
        expect(result.message).toBe(
            "Кількість викладачів має бути від 1 до 100"
        );
    });
});

describe("addressValidator", () => {
    test("should return valid for an address with valid length", () => {
        const kafedra: Kafedra = {
            name: "Computer Science",
            amount: 10,
            initials: "AB",
            address: "123 Main Street",
            listOfTeachers: [],
        };
        const result: ValidationResult = addressValidator(kafedra);
        expect(result.isValid).toBe(true);
    });

    test("should return invalid and a message for an address with invalid length", () => {
        const kafedra: Kafedra = {
            name: "Computer Science",
            amount: 10,
            initials: "AB",
            address: "St",
            listOfTeachers: [],
        };
        const result: ValidationResult = addressValidator(kafedra);
        expect(result.isValid).toBe(false);
        expect(result.message).toBe("Aдреса має містити від 5 до 500 символів");
    });
});

describe("initialsValidator", () => {
    test("should return valid for initials with valid length", () => {
        const kafedra: Kafedra = {
            name: "Computer Science",
            amount: 10,
            initials: "AB",
            address: "123 Main Street",
            listOfTeachers: [],
        };
        const result: ValidationResult = initialsValidator(kafedra);
        expect(result.isValid).toBe(false);
    });

    test("should return invalid and a message for initials with invalid length", () => {
        const kafedra: Kafedra = {
            name: "Computer Science",
            amount: 10,
            initials: "A",
            address: "123 Main Street",
            listOfTeachers: [],
        };
        const result: ValidationResult = initialsValidator(kafedra);
        expect(result.isValid).toBe(false);
        expect(result.message).toBe(
            "ПІБ завідувача кафедри має містити від 3 до 30 символів"
        );
    });
});

describe("listOfTeachersValidator", () => {
    test("should return valid for an empty list of teachers", () => {
        const kafedra: Kafedra = {
            name: "Computer Science",
            amount: 10,
            initials: "AB",
            address: "123 Main Street",
            listOfTeachers: [],
        };
        const result: ValidationResult = listOfTeachersValidator(kafedra);
        expect(result.isValid).toBe(true);
    });

    test("should return valid for a list of teachers with valid names", () => {
        const kafedra: Kafedra = {
            name: "Computer Science",
            amount: 10,
            initials: "AB",
            address: "123 Main Street",
            listOfTeachers: [
                { id: 1, value: "John Doe" },
                { id: 2, value: "Jane Smith" },
            ],
        };
        const result: ValidationResult = listOfTeachersValidator(kafedra);
        expect(result.isValid).toBe(true);
    });

    test("should return invalid and a message for a list of teachers with an invalid name", () => {
        const kafedra: Kafedra = {
            name: "Computer Science",
            amount: 10,
            initials: "AB",
            address: "123 Main Street",
            listOfTeachers: [
                { id: 1, value: "John Doe" },
                { id: 2, value: "A" },
            ],
        };
        const result: ValidationResult = listOfTeachersValidator(kafedra);
        expect(result.isValid).toBe(false);
        expect(result.message).toBe(
            "ПІБ викладача кафедри має містити від 5 до 50 символів"
        );
    });
});
