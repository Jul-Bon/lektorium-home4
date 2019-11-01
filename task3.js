let arr = [1, 5, 3, 2, 4];

Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i])
    }
};

let printItem  = function(elem) {
    console.log(elem);
};

arr.myForEach(printItem);

Array.prototype.mySort = function() {
    for (let i = 0 ; i < this.length; i++) {
        for(let j = i + 1; j < this.length; j++){
            if(this[i] > this[j]) {
                let swap = this[i];
                this[i] = this[j];
                this[j] = swap;
            }
        }
    }
    return this;
};
let arrSort = arr.mySort();
console.log(arrSort);

Array.prototype.myMap = function(callback) {
    let results = [];
    for (let i = 0; i < this.length; i++) {
        results.push(callback((this[i])));
    }
    return results;
};

let plusTen = function(el) {
    return el + 10;
};

let pows = arr.myMap(plusTen);
console.log(pows);


