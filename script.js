let countriesList=document.querySelector(".countries")
let filter=document.querySelector(".select-bar-select")
let search=document.querySelector(".search-bar-input")
let allCountriesData
fetch("https://restcountries.com/v3.1/all")
 .then((res)=>res.json())
 .then((data)=>{
    renderCountries(data)
    allCountriesData=data
 })
 filter.addEventListener('change',(e)=>{
    fetch(`https://restcountries.com/v3.1/region/${filter.value}`).then((res)=>res.json()).then(renderCountries)
 })
function renderCountries(data){
     countriesList.innerHTML='';
        data.forEach((country)=> {
        console.log(country);        
        const card=document.createElement('a')
        card.innerHTML=`<div class="nation">
            <img class="flag" src="${country.flags.svg}" alt="">
            <div class="data">
            <h2>${country.name.common}</h2>
            <p><b>Population:</b> ${country.population.toLocaleString('en-IN')}</p>
            <p><b>Region:</b> ${country.name.common}</p>
            <p><b>Capital:</b> ${country.capital?.[0]}</p>
            </div>
        </div>`
        countriesList.append(card)
        card.href=`/country.html?name=${country.name.common}`
        card.style.textDecoration="none"
        card.style.color="black"
    })
}
search.addEventListener('input',(e)=>{
const filterCountries=allCountriesData.filter((country)=>country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
)
renderCountries(filterCountries)
})
let moon=document.querySelector(".fa-moon")
moon.addEventListener('click',()=>{
    document.body.classList.toggle("dark")

})