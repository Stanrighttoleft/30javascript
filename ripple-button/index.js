const btnEl=document.querySelector(".btn");

btnEl.addEventListener("mouseover",(event)=>{
    const y=(event.pageY-btnEl.offsetTop);
    const x=(event.pageX-btnEl.offsetLeft);

    btnEl.style.setProperty("--xPos", x + "px");
    btnEl.style.setProperty("--yPos", y + "px");
})