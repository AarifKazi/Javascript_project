let apikey='ee1143b023b769119ff30b015c0ede31'

    let btn=document.querySelector('#btn')
    btn.addEventListener("click",(e)=>{
        e.preventDefault()
        let weather_data=document.querySelector('#get_data').value
        data(weather_data)
    })

    async function data(d){
        let get_weather=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${d}&appid=${apikey}&units=metric`)
        let res=await get_weather.json()
        console.log(res);
        if(res.cod === '404'){
            alert('city not found')
            return
          }
        display_data(res)

        
    }
    
    function display_data(arr){
        let h1 = document.querySelector('#temprature')
        let city = document.querySelector('#city')
        let humidity = document.querySelector('#humidity')
        let wind = document.querySelector('#wind')
        let cloud = document.querySelector('#cloud')
    
        h1.innerHTML = arr.main.temp + " °C"
        city.innerHTML = arr.name
        humidity.innerHTML = arr.main.humidity + " %"
        wind.innerHTML = arr.wind.speed + " km/h"
        cloud.innerHTML = arr.clouds.all + " %"

    }

    
    