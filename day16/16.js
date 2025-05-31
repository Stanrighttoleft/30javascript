const hero=document.querySelector('.hero');
const text=hero.querySelector('h1');
const walk=100;


function shadow(e){
   // const width=hero.offsetWidth;
   // const height=hero.offsetHeight;
    const {offsetHeight:height, offsetWidth:width}=hero;
 
    let {offsetX:x , offsetY:y}=e;
   
    if(this!== e.target){
        x=x+e.target.offsetLeft;
        y=y+e.target.offsetTop;
    }
    const xwalk=Math.round((x/width*walk)-(walk/2))
    const ywalk=Math.round((x/height*walk)-(walk/2))
    console.log(xwalk,ywalk)
    text.style.textShadow=`
    ${-xwalk}px ${-ywalk}px 0 red,
    ${-xwalk}px ${ywalk}px 0 green,
    ${ywalk}px ${xwalk}px 0 yellow,
    ${ywalk}px ${-xwalk}px 0 blue
    `

}

hero.addEventListener('mousemove', shadow)
