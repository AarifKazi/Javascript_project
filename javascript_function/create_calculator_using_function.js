function addition(){
    let a = Number(prompt('Enter a first Number for addition'));
    let b = Number(prompt('Enter a second Number for addition'));
    let c = a+b;
    console.log(`addition of two Number is ${c}`);
}

function subtraction(){
    let a = Number(prompt('Enter a first Number for subtraction'));
    let b = Number(prompt('Enter a second Number for subtraction'));
    let c = a-b;
    console.log(`Subtraction of two Number is ${c}`);
}

function multification(){
    let a = Number(prompt('Enter a first Number for multification'));
    let b = Number(prompt('Enter a second Number for multification'));
    let c = a*b;
    console.log(`Multification of two Number is ${c}`);
}

function divide(){
    let a = Number(prompt('Enter a first Number for divide'));
    let b = Number(prompt('Enter a second Number for divide'));
    let c = a/b;
    console.log(`Divide of two Number is ${c}`);
}

function Module(){
    let a = Number(prompt('Enter a first Number for divide'));
    let b = Number(prompt('Enter a second Number for divide'));
    let c = a%b;
    console.log(`Module of two Number is ${c}`);
}

let choice = Number(prompt('press 1 for addition \npress 2 for subtraction \npress 3 for multification\npress 4 for divide\npress 5 for Module'));

switch(choice){
    case 1:
        addition();
        break;
    case 2:
        subtraction();
        break;
    case 3:
        multification();
        break;
    case 4:
        divide();
        break;
    case 5:
        Module();
        break;
    default:
        console.log('plz enter a valid choice');
}