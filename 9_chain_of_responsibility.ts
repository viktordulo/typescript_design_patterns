class MySum {
    sum: number;
    constructor(initialSum: number = 0) {
        this.sum = initialSum;
    }

    add(value: number): MySum {
        this.sum += value;
        return this;
    }
}

const sum1 = new MySum(10);
sum1.add(5).add(6).add(9);
console.log(sum1.sum); // 30

const sum2 = new MySum();
console.log(sum2.add(5)); // MySum { sum: 5 }
