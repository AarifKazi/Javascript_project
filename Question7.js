//Question 7: Swap Number with 3rd variable and without 3rd variable..

//without 3rd variable
        console.log('Without 3rd variable');
        let a=10;
        let b=20;
        
        a = a+b;
        b = a-b; 
        a=a-b
        console.log(`a is ${a}`);
        console.log(`b is ${b}`);


//With 3rd variable
        console.log('With 3rd variable');
        let x= 40;
        let y = 10;
        console.log(`after swaping`);
        console.log(`x is ${x}`);
        console.log(`y is ${y}`);
        let z;
        z=x;
        x=y;
        y=z;
        console.log(`before swapping`);
        console.log(`x is ${x}`);
        console.log(`y is ${y}`);
        console.log(`z is ${z}`);

