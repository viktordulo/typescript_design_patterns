interface Command {
    execute(): void;
}

class SimpleCommand implements Command {
    private someText: string

    constructor (textValue: string) {
        this.someText = textValue;
    }

    execute(): void {
        console.log(`Simple command output the text (${this.someText})`);
    }
}

class ComplexCommand implements Command {
    private receiver: Receiver;
    a: string;
    b: string
    constructor(receiver: Receiver, a: string, b:string) {
        this.receiver = receiver;
        this.a = a;
        this.b = b;
    }

    execute(): void {
        console.log('Complex command working: \n');
        this.receiver.doSomething(this.a);
        this.receiver.doSomethingElse(this.b);
    }
}

class Receiver {
    doSomething(value1: string): void {
        console.log(`Receiver logs ${value1}`);
    }

    doSomethingElse(value2: string): void {
        console.log(`Receiver logs ${value2}`);
    }
}

class Invoker {
    private onStart?: Command;

    private onFinish?: Command;

    setOnStart(command: Command): void {
        this.onStart = command;
    }

    setOnFinish(command: Command): void {
        this.onFinish = command;
    }

    doSomethingImportant(): void {
        console.log('Before begin');
        if (this.onStart?.execute !== undefined)
        this.onStart.execute();

        console.log('After finish');
        if (this.onFinish?.execute !== undefined)
        this.onFinish.execute();
    }
}

const invoker = new Invoker();
invoker.setOnStart(new SimpleCommand('Hello'));
const receiver = new Receiver();
invoker.setOnFinish(new ComplexCommand(receiver, 'Hi', 'Hey there'));

invoker.doSomethingImportant();