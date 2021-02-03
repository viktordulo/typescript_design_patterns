class Server {
    constructor (public name: string, public ip:string) {
        this.name = name;
        this.ip = ip;
    }

    connect() {
        console.log(`Connected to the server: ${this.name.toUpperCase()} with th ip: ${this.ip}:20005`);
    }
}

const server = new Server('local', '24.56.42.17');

console.log(server.connect());