class Single {

    private static instance: Single;

    private _somePrivateValue: string | number = 0;

    
    get somePrivateValue(): string | number {
        return this._somePrivateValue
    }
    
    set somePrivateValue(value: string | number) {
        this._somePrivateValue = value;
    } 
    
    private constructor (public name?: string) {
        this.name = name;
    }

    static createInstance(name?: string): Single {
        if (!this.instance) {
            this.instance = new Single(name);
        }
        return this.instance;
    }

}


const instance1 = Single.createInstance('first');
const instance2 = Single.createInstance('second');

console.log(instance1.name); // first
console.log(instance2.name); // first

console.log(instance1.somePrivateValue); // 0
console.log(instance2.somePrivateValue); // 0

instance1.somePrivateValue = 5;

console.log(instance1.somePrivateValue); // 5 
console.log(instance2.somePrivateValue); // 5