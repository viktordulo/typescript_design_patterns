class SimpleAccount {
    public price: number;

    constructor (public username:string, public periodDays: number) {
        this.username = username;
        this.periodDays = periodDays;
        this.price = 50;
    }
}

class StandardAccount {
    public price: number;

    constructor (public username:string, public periodDays: number) {
        this.username = username;
        this.periodDays = periodDays;
        this.price = 100;
    }
}

class PremiumAccount {
    public price: number;

    constructor (public username:string, public periodDays: number) {
        this.username = username;
        this.periodDays = periodDays;
        this.price = 120;
    }
}

class AccountFactory {

    static list = {
        simple: SimpleAccount,
        standard: StandardAccount,
        premium: PremiumAccount
    }

    create(username: string, periodDays: number, type: 'simple' | 'standard' | 'premium') {
        const Membership = AccountFactory.list[type];
        const member = new Membership(username, periodDays);

        return member;
    }
}

const factory = new AccountFactory();

const accounts = [
    factory.create('Victor', 60, 'premium'),
    factory.create('Elena', 30, 'standard')
]

console.log(accounts);
