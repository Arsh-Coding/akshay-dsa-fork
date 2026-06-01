// let i, j;
// let size = 10;
// for (i = 1; i <= size; i++) {
//     let row = ''
//     for (j = 1; j <= size; j++) {
//         if (i == 1 || i == size || j == 1 || j == size) {
//             row += "*";
//         }
//         else {
//             row += ' '
//         }
//         if (i == j) {
//             row += '*'
//         }
//         if (i + j == size + 1) {
//             row += '*'
//         }
//     }
//     console.log(row);
// }

// making a hollow diagonal square 
let size = 10;
for (let i = 1; i <= size; i++) {
    let row = "";
    for (let j = 1; j <= size; j++) {

        if (i === 1 || i === size || j === 1 || j === size) {
            row += "*";
        } else {
            row += " ";
        }
        if (i == j || i + j === size + 1) {
            row += "*"
        }
    }
    console.log(row);
}