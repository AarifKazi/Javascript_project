//Question 11: Grade description...

let grade =prompt('Enter your grade');

if(grade == 'A' || grade == 'a'){
    console.log('Average');
}
else if(grade == 'E' || grade == 'e'){
    console.log('Excellent');
}
else if(grade == 'F' || grade == 'f'){
    console.log('fail');
}
else if(grade == 'V' || grade == 'v'){
    console.log('Very Good');
}
else if(grade == 'G' || grade == 'g'){
    console.log('Good');
}
else{
    console.log('Plz Enter valid grade');
}