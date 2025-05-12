    const secondhand=document.querySelector('.second-hand')
    const minhand=document.querySelector('.min-hand')
    const hourhand=document.querySelector('.hour-hand')

    function setDate(){
        const now= new Date();
        let second=now.getSeconds();
        let secondDegree=((second/60)*360)+90;
      
        if(second===0){
                        
            secondhand.style.transition='none';
        }else{
            secondhand.style.transition=`all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)`;
            

        }
       
        secondhand.style.transform=`rotate(${secondDegree}deg)`;
        

        let min=now.getMinutes();
        let minDegree=((min/60)*360)+90;
        minhand.style.transform=`rotate(${minDegree}deg)`;

        let hour=now.getHours();
        let hourDegree=((hour/12)*360)+90;
        hourhand.style.transform=`rotate(${hourDegree}deg)`;

    }


    setInterval(setDate,1000);