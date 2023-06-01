export abstract class Settlement {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

export class Village extends Settlement {
    public numberOfHouses: number;
    public residentsPerHouse: number;
    public villageArea: number;

    constructor(
        name: string,
        numberOfHouses: number,
        residentsPerHouse: number,
        villageArea: number
    ) {
        super(name);
        this.numberOfHouses = numberOfHouses;
        this.residentsPerHouse = residentsPerHouse;
        this.villageArea = villageArea;
    }

    public calculatePopulationDensity(): number {
        return this.numberOfHouses > 0
            ? (this.numberOfHouses * this.residentsPerHouse) / this.villageArea
            : 0;
    }
}

export class City extends Settlement {
    public population: number;
    public cityArea: number;

    constructor(name: string, population: number, cityArea: number) {
        super(name);
        this.population = population;
        this.cityArea = cityArea;
    }

    public calculatePopulationDensity(): number {
        return this.cityArea > 0 ? this.population / this.cityArea : 0;
    }
}
