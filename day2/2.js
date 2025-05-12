const secondhand=document.querySelector('.second-hand')
const minhand=document.querySelector('.min-hand')
const hourhand=document.querySelector('.hour-hand')

function setDate(){
    const now= new Date();
    const second=now.getSeconds();
    const secondDegree=((second/60)*360)+90;
    secondhand.style.transform=`rotate(${secondDegree}deg)`;

    const min=now.getMinutes();
    const minDegree=((min/60)*360)+90;
    minhand.style.transform=`rotate(${minDegree}deg)`;

    const hour=now.getHours();
    const hourDegree=((hour/12)*360)+90;
    hourhand.style.transform=`rotate(${hourDegree}deg)`;

}


setInterval(setDate,1000);