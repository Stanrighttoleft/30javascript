const bodyEl=document.querySelector('.omg');

bodyEl.addEventListener('mousemove',(event)=>{
    const xpos=event.offsetX;
    const ypos=event.offsetY;
    const spanEl=document.createElement("span");

    const size=Math.random()*50;
    spanEl.style.width=size+"px";
    spanEl.style.height=size+"px";

    spanEl.style.left=xpos+"px";
    spanEl.style.top=ypos+"px";

    spanEl.classList.add("bubble");
    bodyEl.appendChild(spanEl);

    setTimeout(()=>{
        spanEl.remove();
    },2000);
})