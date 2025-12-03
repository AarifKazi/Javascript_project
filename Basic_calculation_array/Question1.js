let arr = [1,2,2,3,3,4,4,5]

let uniquevalue=arr.filter((value,index)=>{
    return arr.indexOf(value) === index;
})

console.log(uniquevalue);