"use strict";

// const hamburger = 5;
// const fries = null;
//
// if(hamburger && fries) {
//     console.log('Im cool');
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 0;
//
// console.log(hamburger === 3 && cola  && fries);
// console.log(1 && 0);
// console.log(1 && 5);
// console.log( null && 5);
// console.log(0 && 'dsfdfdfdfdf');
//
// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('All cool');
// } else {
//     console.log('We leave');
// }

// const hamburger = 0;
// const fries = null;
// const cola = 0;
//
// if (hamburger || cola || fries) {
//     console.log('All cool');
// } else {
//     console.log('We leave');
// }
//
// console.log(hamburger || cola || fries);
//
// let johnReport, alexReport, samReport, mariaReport = 'done';
//
// console.log(johnReport || alexReport ||samReport || mariaReport );

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets =2 ;
//
// if (hamburger ===3  && cola === 2 || fries === 3 && nuggets) {
//     console.log('All cool');
// } else {
//     console.log('We leave');
// }
//
// console.log(hamburger ===3  && cola === 2 || fries === 3 && nuggets);
//
// let johnReport, alexReport, samReport, mariaReport = 'done';
//
// console.log(johnReport || alexReport ||samReport || mariaReport );



console.log(!0);

console.log( NaN || 2 || undefined );
console.log( NaN && 2 && undefined );
console.log( 1 && 2 && 3 );
console.log( !1 && 2 || !3 );
console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
    console.log('Done!')
}

