const hero=document.querySelector('.hero');
const text=hero.querySelector('h1');

function shadow(e){
    const width=hero.offsetWidth;
    const height=hero.offsetHeight;
    const {offsetHeight:height, offsetWidth:width}=hero
    console.log(e);

}

hero.addEventListener('mousemove', shadow)
