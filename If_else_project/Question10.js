//Question 10: Electricity Bill Generate...

let id=Number(prompt('Enter your ID'));
let name=prompt('Enter your Name')
let Unit=Number(prompt('Enter your Consumer Unit'));

console.log(`Your Id is ${id},`);
console.log('Your name is ',name);
console.log(`Unit is ${Unit}`);


if(Unit < 200){
     charge = Unit*1.20;
}
else if(Unit >= 200 && Unit < 400){
    charge = Unit*1.50;
}
else if(Unit >= 400 && Unit < 600){
    charge = Unit*1.80;
}
else{
    charge = Unit*2.00
}

if(charge > 400){
      surcharge = charge*0.15;
      console.log(`your bill without surcharge is ${charge}`);
      console.log(`your surcharge is ${surcharge}`);
}
else{
    surcharge = 0;
}

let totalbill = surcharge + charge;

if(totalbill < 100){
    totalbill=100;
}

console.log(`Your totalbill is ${totalbill}`);


