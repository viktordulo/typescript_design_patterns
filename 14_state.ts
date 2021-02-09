type LightType = 'red' | 'yellow' | 'green';

class Light {
    light: LightType;

    constructor(light: LightType) {
        this.light = light;
    }
}

class RedLight extends Light {
    constructor() {
        super('red');
    }
}

class YellowLight extends Light {
    constructor() {
        super('yellow');
    }
}

class GreenLight extends Light {
    constructor() {
        super('green');
    }
}

class TrafficLight {
    private states: Light[] = [
        new RedLight(),
        new YellowLight(),
        new GreenLight()
    ]

    private current: Light = this.states[0];

    currentSign(): string {
        return this.current.light.toUpperCase();
    }   

    changeLight(): void {
        const index = this.states.findIndex(light => light === this.current);
        if (index + 1 < this.states.length) {
            this.current = this.states[index + 1];
        }
        else this.current = this.states[0];
    }
}

const traffic = new TrafficLight();

console.log(traffic.currentSign()); // RED
traffic.changeLight();
console.log(traffic.currentSign()); // YELLOW
traffic.changeLight();
console.log(traffic.currentSign()); // GREEN
traffic.changeLight();
console.log(traffic.currentSign()); // RED