// "use strict";

// let num = 5;
//
//  while (num <= 10) {
//     console.log(num);
//      num++;
//  }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
// let i = 2;
// while (i < 16) {
//     i++;
//     if (i % 2 ===0) {
//         continue;
//     } else {
//     console.log(i)
//         }
//}
// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55)

// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }

// for (let i = 20; i > 10; i--) {
//     if (i === 13) {
//         break;
//     }
//     console.log(i);
//
// }

// function firstTask() {
//     let num <= 5;
//     while (num <= 10) {
//       console.log( num);
//       num++;
//     }
//
// }
// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         continue;
//     }
//     console.log(i);
//
// }

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

function fifthTask() {
    const arrayOfNumbers = [];
    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }
    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}
