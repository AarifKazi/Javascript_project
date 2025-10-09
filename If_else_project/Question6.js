//Question 6: largest of three number..

let a = Number(prompt('Enter Number'));
let b = Number(prompt('Enter Number'));
let c = Number(prompt('Enter Number'));

if(a > b){
    if(a > c){
        console.log('a is big');
    }
    else{
        console.log('c is big');
    }
   
}else if(b > c){
    console.log('b is big');
}
else{
    console.log('c is big');
}