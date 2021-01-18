class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  getAllKeys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          keys.push(this.data[i][j][0]);
        }
      }
    }
    return keys;
  }

  delete(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          this.data[address].splice(i, 1);
          return true;
        }
      }
    }
    return false;
  }
}

const myHashTable = new HashTable(50);
console.log(myHashTable);
console.log(myHashTable.set('Gerson0', 1983));
console.log(myHashTable.set('Gerson1', 1984));
console.log(myHashTable.set('Gerson2', 1985));
console.log(myHashTable.set('Gerson3', 1986));

console.log(myHashTable.get('Gerson0'));
console.log(myHashTable.getAllKeys());
console.log(myHashTable.delete('Gerson0'));
console.log(myHashTable.getAllKeys());
