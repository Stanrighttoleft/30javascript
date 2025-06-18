let countdown;
const timerDisplay=document.querySelector('.display__time-left');
const endTime=document.querySelector('.display__end-time')
const buttons=document.querySelectorAll('[data-time]')

function timer(seconds){
    //clear any existing timer when we start the timer
    clearInterval(countdown);
    const now=Date.now();
    const then=now+seconds *1000;
    displaytimeLeft(seconds);
    displayEndTime(then);
    

   countdown=setInterval(()=>{
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
    endTime.textContent=`Be back at ${hours>12 ? hours-12 :hours}:${mins<10 ?"0" :''}${mins}`;

}

function startTimer(){
    seconds=parseInt(this.dataset.time);
    timer(seconds);
    
}



buttons.forEach(button=>button.addEventListener('click',startTimer))
document.customForm.addEventListener('submit',function(e){
    e.preventDefault();
    const mins=this.minutes.value;
    console.log(mins);
    timer(mins*60);
    this.reset();
})