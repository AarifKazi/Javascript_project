//Question 8: take a prn from user and find out interest..

let p = Number(prompt('Enter Amount'));
let r = Number(prompt('Enter rate of amount'));
let n = Number(prompt('Enter time perioud of amount'));

let interest = (p*r*n) / 100;

console.log(`Amount is ${p}`);
console.log(`Rate is ${r}`);
console.log(`Time perioud of amount is ${n}`);
console.log(`Interest is ${interest}`);