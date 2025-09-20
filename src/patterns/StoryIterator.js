export class StoryIterator {
  constructor(items) {
    this.items = items;
  }

  getRandom() {
    return this.items[Math.floor(Math.random() * this.items.length)];
  }

  getFirst() {
    return this.items[0];
  }

  getLast() {
    return this.items[this.items.length - 1];
  }

  getAtIndex(index) {
    return this.items[index];
  }
}