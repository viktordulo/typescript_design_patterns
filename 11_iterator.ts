interface MyIterator<T> {

    // Returns the current element.
    current(): T;

    // Returns the current element and goes to the next one.
    next(): T;

    // Returns the key of the current element.
    key(): number;

    // Checks if the current position is correct.
    valid(): boolean;

    // Rewind iterator to the first element.
    rewind(): void;
}

interface Aggregator<T> {
    getIterator(): MyIterator<T>
}

class StringIterator implements MyIterator<string> {
    private collection: WordsCollection;

    private position: number;

    private reverse: boolean;

    constructor(collection: WordsCollection, reverse: boolean = false) {
        this.collection = collection;
        this.reverse = reverse;

        this.position = reverse ? collection.getCount() - 1 : 0;
    }
    current(): string {
        return this.collection.getItems()[this.position];
    }

    next(): string {
        const item = this.collection.getItems()[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    }

    key(): number {
        return this.position;
    }

    valid(): boolean {
        if (this.reverse) return this.position >= 0;
        return this.position < this.collection.getCount();
    }

    rewind(): void {
        this.position = this.reverse ? this.collection.getCount() - 1 : 0;
    }
}

class WordsCollection implements Aggregator<string> {
    private items: string[] = [];

    getItems(): string[] {
        return this.items;
    }

    getCount(): number {
        return this.items.length;
    }

    addItem(item: string): void {
        this.items.push(item);
    }

    getIterator(): MyIterator<string> {
        return new StringIterator(this);
    }

    getReversedIterator(): MyIterator<string> {
        return new StringIterator(this, true);
    }
}

const words = new WordsCollection();
words.addItem('Don');
words.addItem('Diablo');
words.addItem('Top');

const iterator = words.getIterator();
const reversedIterator = words.getReversedIterator();

console.log('Straight words iteration');
while(iterator.valid()) {
    console.log(iterator.next());
}

console.log('');


console.log('Reversed words iteration');
while(reversedIterator.valid()) {
    console.log(reversedIterator.next());
}

words.addItem('Dj');

console.log(iterator.next()); // Dj
console.log(iterator.next()); // undefined

iterator.rewind();
console.log(iterator.current()); // Don

