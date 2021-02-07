class Car {
    constructor (public model: string, public price: number) {
        this.model = model;
        this.price = price;
    }
}

class CarFactory {
    cars: Car[] = [];

    constructor() {}

    create(model: string, price: number): Car {
        const candidate = this.getCar(model);
        if (candidate) {
            return candidate
        }

        const newCar = new Car(model, price);
        this.cars.push(newCar);
        return newCar;
    }

    getCar(model: string) {
        return this.cars.find(car => car.model === model);
    }
}

const carFactory = new CarFactory();

const teslaS = carFactory.create('modelS', 80000);
const teslaX = carFactory.create('modelX', 100000);
const tesla = carFactory.create('modelX', 300000);

console.log(teslaS); // modelS, 80000
console.log(teslaX); // modelX, 100000
console.log(tesla); // modelX, 100000