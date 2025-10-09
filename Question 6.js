//Question 6: 7 subject marks to find out pr

let English=Number(prompt('Enter Marks of English'));
let Gujarati=Number(prompt('Enter Marks of Gujarati'));
let Maths=Number(prompt('Enter Marks of Maths'));
let Science=Number(prompt('Enter Marks of Science'));
let Sanskrit=Number(prompt('Enter Marks of Sanskrit'));
let Economic=Number(prompt('Enter Marks of Economic'));
let Account=Number(prompt('Enter Marks of Account'));

let totalmarks=English+Gujarati+Maths+Science+Sanskrit+Economic+Account;

let totalmax= 7*100;

let percentage = (totalmarks/totalmax) * 100;

console.log(`Your Total Marks is ${totalmarks}`);
console.log(`Your percentage is ${percentage}`);