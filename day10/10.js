let lastchecked;

const checkboxes=document.querySelectorAll('.inbox input[type="checkbox"]')

function handlecheck(e){
    let inbetween=false;
    
    
    
    if(e.shiftKey && this.checked){
        
        
        checkboxes.forEach(box=>{
            console.log(box);
            if(box===this || box===lastchecked){
                inbetween=!inbetween;
                console.log('starthere')


            }
            if(inbetween){
                box.checked=true;
            }
            
        })
    }
    lastchecked=this;
    
    

}

checkboxes.forEach(box=>box.addEventListener('click',handlecheck))