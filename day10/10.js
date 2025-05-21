let lastchecked;
const checkboxes=document.querySelectorAll('.item input[type="checkbox"]');

function handle(e){
    let inbetween=false;
    if(e.shiftKey && this.checked){
        checkboxes.forEach(box=>{
            console.log(box);
            if(box===this || box===lastchecked){
                inbetween=!inbetween;
                console.log('start from here')
            }
            if(inbetween){
                box.checked=true;
            }
        })
    }
    lastchecked=this;

}

checkboxes.forEach(box=>box.addEventListener('click', handle))