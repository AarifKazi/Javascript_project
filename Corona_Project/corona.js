// show-corona-details
async function corona(){
    let corona_data=await fetch(`https://disease.sh/v3/covid-19/all`)
    let res=await corona_data.json()
    display_data(res)
}

corona()
function display_data(corona){
  let total_case=document.querySelector('.total')
  total_case.innerHTML=corona.cases

  let recovered=document.querySelector('.recovered')
  recovered.innerHTML=corona.recovered

  let death=document.querySelector('.death')
  death.innerHTML=corona.deaths

  let tests=document.querySelector('.tests')
  tests.innerHTML=corona.tests
}
// end


// city-corona-api-data
let btn=document.querySelector('#btn')
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    let corona_city_data=document.querySelector('#city_data').value
    corona_city(corona_city_data)
})
async function corona_city(city){
    let fetch_city=await fetch(`https://disease.sh/v3/covid-19/countries/${city}`)
    let res_convert=await fetch_city.json()
    
    console.log(res_convert);
    display_city_data(res_convert)
}

function display_city_data(city_data){
    let h1=document.querySelector('#country')
    h1.innerHTML=city_data.country

    let img=document.querySelector('#flag_img')
    img.src=city_data.countryInfo.flag

    let test=document.querySelector('#citytest')
    test.innerHTML=city_data.cases

    let recover=document.querySelector('#cityrecovered')
    recover.innerHTML=city_data.recovered

    let death=document.querySelector('#citydeaths')
    death.innerHTML=city_data.deaths

    let totaltest=document.querySelector('#citytotaltest')
    totaltest.innerHTML=city_data.tests
}

// end