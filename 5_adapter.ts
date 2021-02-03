class OldCalculator {

    operation(a: number, b: number, operation: 'plus' | 'minus'): number {
        switch (operation) {
            case 'plus':
                return a+b;
            case 'minus':
                return a-b;
            default:
                return NaN;
        }
    }

}

class NewCalculator {

    plus(a: number, b: number): number {
        return a+b;
    }
    minus(a: number, b: number): number {
        return a-b;
    }

}

class Adapter {

    private _calculator: NewCalculator;

    constructor() {
        this._calculator = new NewCalculator();
    }

    operation(a: number, b: number, operation: 'plus' | 'minus'): number {
        switch (operation) {
            case 'plus':
                return this._calculator.plus(a, b);
            case 'minus':
                return this._calculator.minus(a, b);
            default:
                return NaN;
        }
    }

}

const oldCalc = new OldCalculator();

console.log(oldCalc.operation(3, 5, 'plus'));

const newCalc = new NewCalculator();

console.log(newCalc.plus(3, 5));

const adapter = new Adapter();

console.log(adapter.operation(3, 5, 'plus'));