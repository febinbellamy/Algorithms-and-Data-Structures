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
}

let hashT = new HashTable(10);
hashT.set("username1444", "Passworld4");
hashT.set("username3544", "Passmorning4");
hashT.set("username4000", "Passnight12");
hashT.set("username5993", "Passbrush33");
hashT.get("username3544");
hashT.get("username4000");
