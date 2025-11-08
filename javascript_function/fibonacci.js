const value = Number(prompt('Enter Number'));

function fibonacci(value){
    if(value <= 1){
       return 1;
    }
    else{
        return fibonacci(value-1) + fibonacci(value - 2)
    }
}

for(let i = 0; i <= value;i++){
    console.log(fibonacci(i));
}