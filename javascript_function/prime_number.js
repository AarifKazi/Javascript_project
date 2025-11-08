const n = Number(prompt('Enter Number'));

function prime(n){
     if(n%2 === 0){
        console.log(`${n} is Not Prime Number`);
     }
     else{
        console.log(`${n} is Prime NUmber`);
     }
}

prime(n)