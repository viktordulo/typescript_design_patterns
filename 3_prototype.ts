const car = {
    wheels: 4,

    init() {
        console.log(`Count of wheels: ${this.wheels}`);
    }
}

car.init(); // output with wheels only

const carWithOwner = Object.create(car, {
    owner: {
        value: 'Victor'
    },
    init: {
        value: () => {console.log(`Count of wheels: ${carWithOwner.wheels}. The owner: ${carWithOwner.owner}`)}
    }
})

carWithOwner.init(); // output with owner

console.log(carWithOwner.__proto__ === car); // true