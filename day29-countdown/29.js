let coutdown;
const timerDisplay=document.querySelector('.display__time-left');

function timer(seconds){
    const now=Date.now();
    const then=now+seconds *1000;
    displaytimeLeft(seconds);
    

    let countdown=setInterval(()=>{
        const secondsLeft=Math.round((then-Date.now())/1000);
        
        if(secondsLeft<0){
            clearInterval(countdown);
        }else{
            displaytimeLeft(secondsLeft)    
        }
    },1000);
}

function displaytimeLeft(seconds){
    const mins=Math.floor(seconds/60);
    const second=seconds%60;
    const display=`${mins}:${second<10 ? '0': ' '}${second}`
    timerDisplay.textContent=display;
    console.log({mins,second});
}