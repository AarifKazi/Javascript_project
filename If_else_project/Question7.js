//Question7: Admission_Eligibility....

let Maths=Number(prompt('Enter marks of Maths'));
let physicies=Number(prompt('Enter marks of Maths'));
let Chemisitry=Number(prompt('Enter marks of Maths'));

let alltotal = Maths+physicies+Chemisitry;
let total=Maths+physicies;

if(Maths >= 65 && physicies >= 55 && Chemisitry >= 50){
    if(alltotal >= 190 && total >= 140){
        console.log('You are Eligible for Admission');
    }
    else{
        console.log('You are not Eligible for Admission');
    }
}
else{
    console.log('Sorry your marks is low Bette Luck');
}