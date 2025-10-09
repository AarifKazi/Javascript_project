//Question 5 : get amount of tv from user and take quantity for each qunatity to add 18% gst and generate final bill..

let amount=Number(prompt('Enter amount of your TV'));

let quantity=Number(prompt('plz Enter quantity of tv'));

let gst = amount * 0.18;

let final_bill = amount * quantity + gst;

console.log(`Amount of TV is ${amount}`);
console.log(`Quntity of TV is ${quantity}`);
console.log(`Total GST is ${gst}`);
console.log(`Your final bill is ${final_bill}`);