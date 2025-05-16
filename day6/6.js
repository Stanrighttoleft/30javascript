
    const endpoint='https://gist.githubusercontent.com/Stanrighttoleft/1325f4752841e0de35df0adeabf26bd6/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
    console.log(endpoint)
    const cities=[];

    fetch(endpoint)

        .then(bloc =>bloc.json())
        .then(data=>cities.push(...data))
       

    console.log(cities)

    const searchinput=document.querySelector('.search');
    const suggestions=document.querySelector('.suggestions');

    searchinput.addEventListener('change',displayMatches);
    searchinput.addEventListener('keyup',displayMatches);

    function findMatches(keyword,cities){
        return cities.filter(place=>{
            //figure out if the city or state matches waht was typed
            const regex=new RegExp(keyword,'gi');
            return place.city.match(regex) || place.state.match(regex)
        })
    }

    function commas(e){
        return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');

    }

    function displayMatches(){
        const matcharray=findMatches(this.value, cities);
        const content=matcharray.map(place=>{
            const regex= new RegExp(this.value,'gi')
            const cityName=place.city.replace(regex,`<span class='hl'>${this.value}</span>`);
            const stateName=place.state.replace(regex,`<span class='hl'>${this.value}</span>`);
            return`
            <li>
                <span class='name'>${cityName}, ${stateName}</span>
                <span class='population'>${commas(place.population)}</span>


            </li>
            
            `
        }).join('');
        suggestions.innerHTML=content;
    }
