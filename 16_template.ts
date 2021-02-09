class Business {
    companyName: string;
    workersCount: number;

    constructor(name: string, count: number) {
        this.companyName = name;
        this.workersCount = count;
    }

    makeProduct(): string {return ''}

    startWorking() {
        console.log(`Every worker of \'${this.companyName}\' produces ${this.makeProduct()}s (${this.workersCount} copies daily).`)
    }
}

class Bakery extends Business {

    private products: string[] = ['bread', 'cake', 'roll', 'baton'];

    constructor (name: string, count: number) {
        super(name, count);
    }

    makeProduct(): string {
        const index = Math.floor(Math.random() * this.products.length);
        return this.products[index];
    }
}

class Confectionary extends Business {

    private products: string[] = ['sweet', 'cake', 'chocolate', 'caramel'];

    constructor (name: string, count: number) {
        super(name, count);
    }

    makeProduct(): string {
        const index = Math.floor(Math.random() * this.products.length);
        return this.products[index];
    }
}

const bakery = new Bakery('Tiny Bun', 10);

const sweetShop = new Confectionary('Chocolate Paradise', 50);

bakery.startWorking();
sweetShop.startWorking();