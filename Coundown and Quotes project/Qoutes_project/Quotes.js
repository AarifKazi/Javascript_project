const quotes=[
    "The only way to do great work is to love what you do",
    "The greatest glory in living lies not in never falling, but in rising every time we fall",
    "Whether you think you can or you think you can't, you're right." ,
    "It is hard to fail but it is worse never to have tried to succeed",
    "I have not failed. Ive just found 10,000 ways that wont work.",
    "That which does not kill us makes us stronger",
    "Be miserable. Or motivate yourself. Whatever has to be done, its always your choice",
    "The future belongs to those who believe in the beauty of their dreams",
]

let btn=document.querySelector('.btn')
let data=document.querySelector('.data')
btn.addEventListener("click",()=>{
    setInterval(()=>{
       let randomindex=Math.floor(Math.random()*quotes.length)
       data.innerHTML=quotes[randomindex]

    },4000)
})