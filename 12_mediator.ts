interface ChatUsers {
    [key: string]: User;
}

class User {
    name: string;
    room!: ChatRoom;

    constructor(name: string) {
        this.name = name
    }

    send(message: string, to?: User) {
        this.room.send(message, this, to);
    }

    receive(message: string, from: User) {
        console.log(`${from.name} => ${this.name}: (${message})`);
    }
}

class ChatRoom {
    users: ChatUsers = {};

    register(user: User) {
        this.users[user.name] = user;
        user.room = this;
    }

    send(message: string, from: User, to?: User) {
        if (to) {
            to.receive(message, from);
        } else {
            Object.keys(this.users).forEach(key => {
                if (this.users[key] !== from) this.users[key].receive(message, from);
            })
        }
    }

}

const victor = new User('Victor');
const elena = new User('Elena');
const kate = new User('Kate');

const room = new ChatRoom();

room.register(victor);
room.register(elena);
room.register(kate);

victor.send('Hello', elena); // Victor => Elena: (Hello)
elena.send('Hi', victor);
victor.send('Kiss you, sweetie', kate);
victor.send('Hey, what\'s up?');
