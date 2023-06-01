export interface listOfTeachers {
    id: number;
    value: string;
}

export interface Kafedra {
    name: string;
    amount: number;
    initials: string;
    address: string;
    listOfTeachers: Array<listOfTeachers>;
}

export interface ValidationResult {
    isValid: boolean;
    message?: string;
}

export function nameValidator(kafedra: Kafedra): ValidationResult {
    if (!kafedra.name || kafedra.name.length < 3 || kafedra.name.length > 50) {
        return {
            isValid: false,
            message: "Назва кафедри має містити від 3 до 50 символів",
        };
    }
    return { isValid: true };
}

export function amountValidator(kafedra: Kafedra): ValidationResult {
    if (isNaN(Number(kafedra.amount))) {
        return {
            isValid: false,
            message: "Довжина вулиці має бути числом",
        };
    }
    if (!kafedra.amount || kafedra.amount < 1 || kafedra.amount > 100) {
        return {
            isValid: false,
            message: "Кількість викладачів має бути від 1 до 100",
        };
    }

    return { isValid: true };
}

export function addressValidator(kafedra: Kafedra): ValidationResult {
    if (
        !kafedra.address ||
        kafedra.address.length < 5 ||
        kafedra.address.length > 500
    ) {
        return {
            isValid: false,
            message: "Aдреса має містити від 5 до 500 символів",
        };
    }
    return { isValid: true };
}

export function initialsValidator(kafedra: Kafedra): ValidationResult {
    if (
        !kafedra.initials ||
        kafedra.initials.length < 3 ||
        kafedra.initials.length > 30
    ) {
        return {
            isValid: false,
            message: "ПІБ завідувача кафедри має містити від 3 до 30 символів",
        };
    }
    return { isValid: true };
}
export function listOfTeachersValidator(kafedra: Kafedra): ValidationResult {
    let valid = true;
    kafedra.listOfTeachers.forEach((element: listOfTeachers) => {
        if (
            !element.value ||
            element.value.length < 5 ||
            element.value.length > 50
        ) {
            valid = false;
            return;
        }
    });
    if (valid) {
        return { isValid: true };
    }
    return {
        isValid: false,
        message: "ПІБ викладача кафедри має містити від 5 до 50 символів",
    };
}
