const array = ['Diego', 'Gerson', 'Arlet'];
console.log(array);

array.push('Ana');
console.log(array);

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
    return this.data;
  }
}

const myArray = new MyArray();
console.log(myArray);
myArray.push('Yesid');
console.log(myArray);
