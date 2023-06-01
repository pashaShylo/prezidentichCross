interface Workable {
    doWork(): string;
}

interface Employable {
    hire(): string;
    fire(): string;
}

abstract class Employee {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract introduce(): string;
}

export class Worker extends Employee implements Workable {
    constructor(name: string) {
        super(name);
    }

    introduce(): string {
        return `I am a worker named ${this.name}`;
    }

    doWork(): string {
        return `${this.name} is doing work.`;
    }
}

export class Staff extends Employee implements Workable, Employable {
    constructor(name: string) {
        super(name);
    }

    introduce(): string {
        return `I am a staff member named ${this.name}`;
    }

    doWork(): string {
        return `${this.name} is doing work.`;
    }

    hire(): string {
        return `${this.name} is hired.`;
    }

    fire(): string {
        return `${this.name} is fired.`;
    }
}

export class Engineer extends Employee implements Workable {
    constructor(name: string) {
        super(name);
    }

    introduce(): string {
        return `I am an engineer named ${this.name}`;
    }

    doWork(): string {
        return `${this.name} is doing work.`;
    }
}

export class Administration extends Employee implements Employable {
    constructor(name: string) {
        super(name);
    }

    introduce(): string {
        return `I am a member of administration named ${this.name}`;
    }

    hire(): string {
        return `${this.name} is hired.`;
    }

    fire(): string {
        return `${this.name} is fired.`;
    }
}
