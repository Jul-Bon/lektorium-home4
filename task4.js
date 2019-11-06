let arrMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for(let i = 0; i < arrMatrix.length; i++) {
    for(let j = 0; j < arrMatrix.length; j++) {
        arrMatrix[i][j] = "[" + i + "," + j + "]";
        console.log(arrMatrix[i][j]);
    }
}