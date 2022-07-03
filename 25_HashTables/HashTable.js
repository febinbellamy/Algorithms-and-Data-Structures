class HashTable {
  constructor(size = 4) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let primeNum = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * primeNum + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let position = this._hash(key);
    if (!this.keyMap[position]) {
      this.keyMap[position] = [];
    }
    this.keyMap[position].push([key, value]);
  }

  get(key) {
    let position = this._hash(key);
    if (this.keyMap[position]) {
      for (let i = 0; i < this.keyMap[position].length; i++) {
        if (this.keyMap[position][i][0] === key) {
          return this.keyMap[position][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    let keysArray = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArray.includes(this.keyMap[i][j][0])) {
            keysArray.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArray;
  }
}

let hashT = new HashTable(10);
hashT.set("username1444", "Passworld4");
hashT.set("username3544", "Passmorning4");
hashT.set("username4000", "Passnight12");
hashT.set("username5993", "Passbrush33");
hashT.get("username3544");
hashT.get("username4000");
hashT.keys();
