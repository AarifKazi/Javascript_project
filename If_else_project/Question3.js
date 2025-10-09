//Question3: Find out a Positive and Negetive Number

let a = Number(prompt('Enter Number'));

if(a != 0){
if(0 < a){
    console.log(`${a} is Positive Number`);
}
else{
    console.log(`${a} is Negetive Number`);
}
}else{
    console.log(`${a} is Neutral Number. Plz Enter valid Number`);
}