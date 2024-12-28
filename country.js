const countryName=new URLSearchParams(location.search).get('name')
fetch("data.json").then((res)=>res.json()).then((data)=>{
    data.forEach(e => {
        if(e.name==countryName){
            // console.log(countryName);
            let head=document.createElement('h1')
            let info=document.createElement('div')
            let image=document.querySelector('.left')
            let right=document.querySelector('main')
            let flag=document.createElement('img')
            flag.src=`${e.flags.svg}`
            flag.style.height="400px"
            flag.style.margin="10px"
            // flag.style.margin="10px"
            image.append(flag)
            info.innerHTML=`
            <div class="info">
            <ul>
            <li><h1>${countryName}</h1></li>
            <li><b>Native Names:</b> ${e.name}</li>
                <li><b>Capital:</b> ${e.capital}</li>
                <li><b>Population:</b> ${e.population.toLocaleString('en-IN')}</li>
                
                <li><b>Region:</b> ${e.region}</li>
                
               <li><b> Sub Region:</b> ${e.subregion}</li>
                
                <li><b>Top Level Domain:</b> ${e.topLevelDomain}</li>
                <li><b>Currencies:</b> ${e.currencies[0].name}</li>
                <li><b>Languages:</b> ${e.languages[0].name}</li>
                </ul>
        </div>`
        info.style.lineHeight="30px"
        info.style.wordSpacing="2px"
            if(e.borders){
                let boldd=document.createElement('b')
                boldd.innerText="Border Countries:"
                boldd.classList.add('left-margin')
                // boldd.style.margin.left="100px"
                // boldd.style.margin.inline="40px"
                info.append(boldd)
                e.borders.forEach(border => {
                    const tag=document.createElement('a')
                    tag.innerText=border 
                    tag.classList.add('label')
                    info.append(tag) })
            }
            info.style.margin="30px"
            right.append(info)
    }})})