let coutdown;
const timerDisplay=document.querySelector('.display__time-left');
const endTime=document.querySelector('.display__end-time')

function timer(seconds){
    const now=Date.now();
    const then=now+seconds *1000;
    displaytimeLeft(seconds);
    displayEndTime(then);
    

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
function displayEndTime(timestamp){
    const end=new Date(timestamp);
    const hours=end.getHours();
    const mins=end.getMinutes();
    endTime.textContent=`Be back at ${hours}:${mins}`;

}