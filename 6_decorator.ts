function classDecorator<T extends {new (...args: any[]): BaseServer}>(originalConstructor: T) {
    return class extends originalConstructor {
        constructor(...args: any[]) {
            super(...args);
        }
        newProperty = 'new property';
        https = `https://${this.ip}:${this.port}`;
        http = this.getUrl();
    }
}

interface BaseServer {
    ip: string;
    port: number;
    getUrl(): void;
}

@classDecorator
class SomeServer implements BaseServer {
    constructor(public ip: string, public port: number) {
        this.ip = ip;
        this.port = port;
    }

    getUrl(): string {
        return `https://${this.ip}:${this.port}`;
    }

}


const s1: any = new SomeServer('11.22.33.44', 25005);
console.log(s1); //newProperty exists and https/http generates.
console.log(s1.http); // https://11.22.33.44:25005

