class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const deleteItem = this.data[index];
    this.shiftItems(index);
    return deleteItem;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push(4);
newArray.push(5);
newArray.push(6);
newArray.push(7);
newArray.push(8);
newArray.push(9);
newArray.push(10);
newArray.push(11);
newArray.push(12);

newArray.pop();

newArray.delete(0);
newArray.delete(3);

console.log(newArray);
