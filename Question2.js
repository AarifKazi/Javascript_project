//Question 2: take number of days to convert a year and month and reaminig days...


let totalDays=Number(prompt("Enter days"))//take a days from user

        let years = parseInt(totalDays/365);

        let remainingDays=totalDays-(years*365);

        let months = parseInt(remainingDays/30);

        let days = remainingDays-(months*30);

        console.log( `${years} Years  ${months} Months  ${days} Days`);