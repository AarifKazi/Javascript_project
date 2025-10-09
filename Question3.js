//Question3: area of square ,triagle, rectangle, and circle..
 
//find out a square 
let square = Number(prompt('Enter value of square'));

let square_value=square * square;
console.log(`square is ${square_value}`);


//find out a triagle
let base_value=Number(prompt('Enter base value for triagle'));
let height=Number(prompt('Enter height for triagle'));

let triagle = (base_value * height) / 2;

console.log(`Triagle is ${triagle}`);


//find out a Rectangle
let length = Number(prompt('Enter length for rectangle'));
let width = Number(prompt('Enter width for rectangle'));

let rectangle = length * width;
console.log(`Rectangle is ${rectangle}`);


//find out a circle
let PI = 22.7;
let r = Number(prompt('Enter radius value for circle'));

circle = PI * r * r;
console.log(`circle is ${circle}`);
