interface ActionType {
    type: 'INCREMENT' | 'DECREMENT' | 'ADD';
    payload?: number;
}

class Subject {
    private observers: Observer[] = [];

    subscribe(observer: Observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer: Observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    fire(action: ActionType) {
        this.observers.forEach(obs => obs.update(action));
    }
}

class Observer {
    state: number;
    private initialState: number;

    constructor(state: number = 0) {
        this.state = state;
        this.initialState = state;
    }

    update(action: ActionType) {
        switch (action.type) {
            case 'INCREMENT':
                this.state++;
                break;
            case 'DECREMENT':
                this.state--;
                break;
            case 'ADD':
                if (action.payload) this.state += action.payload;
                break;
            default:
                this.state = this.initialState;
                break;
        }
    }
}

const subject = new Subject();

const obs1 = new Observer();
const obs2 = new Observer(8);

subject.subscribe(obs1);
subject.subscribe(obs2);

console.log(obs1.state); // 0
console.log(obs2.state); // 8

subject.fire({type: 'INCREMENT'});

console.log(obs1.state); // 1
console.log(obs2.state); // 9

subject.unsubscribe(obs1);
subject.fire({type: 'ADD', payload: 10});

console.log(obs1.state); // 1
console.log(obs2.state); // 19