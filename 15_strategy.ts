class Vehicle {
    timeTaken: number = 0;
    travelTime(): number {
        return this.timeTaken;
    }
}

class Bicycle extends Vehicle {
    timeTaken: number = 10;
}

class Bus extends Vehicle {
    timeTaken: number = 5;
}

class Taxi extends Vehicle {
    timeTaken: number = 3;
}

class Commute {
    travel(transport: Vehicle): number {
        return transport.travelTime();
    }
}

const commute = new Commute();

console.log(commute.travel(new Bicycle())); //10
console.log(commute.travel(new Bus())); //5
console.log(commute.travel(new Taxi())); //3