function matrix (r, c, r0, c0) {
    let arrRow = [0, 1, 0, -1],
        arrColumn = [1, 0, -1, 0],
        arrRez = [];

    arrRez.push([r0, c0]);

    if (r === 1 && c === 1) return arrRez;

    for (let k = 1; k < 2 * (r + c); k += 2) {
        for (let i = 0; i < 4; i++) {
            let step = Math.floor(k + i / 2);
            for (let j = 0; j < step; j++) {
                r0 += arrRow[i];
                c0 += arrColumn[i];
                if (r0 >= 0 && r0 < r && c0 >= 0 && c0 < c) {
                    arrRez.push([r0, c0]);
                    if (arrRez.length === r * c) return arrRez
                }
            }
        }
    }
}
console.log(matrix(5, 6, 1, 4));

// let arrMatrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
//
// function test(){
//     let resultArr = [];
//     for(let i = 0; i < arrMatrix.length; i++) {
//         for(let j = 0; j < arrMatrix.length; j++) {
//             arrMatrix[i][j] = "[" + i + "," + j + "]";
//             resultArr.push(arrMatrix[i][j]);
//             console.log(arrMatrix[i][j])
//         }
//     }
//     console.log(resultArr);
// }
// test();