//Question 9: Profit and loss calculation...

let Tv_amount = 10000;

let amount=Number(prompt('Enter amount for tv'));


if(amount >= Tv_amount){
      let profit=amount-Tv_amount;
      console.log(`Your profit is Rs ${profit}`);
}
else if(amount <= Tv_amount){
    let loss = Tv_amount-amount;
    console.log(`You are in loss Rs ${loss}`);
}
else{
    console.log('no loss and no profit');
}