window.addEventListener('keydown',(e)=>{
    let key=document.querySelector(`.key[data-key='${e.key}']`)
    let audio=document.querySelector(`audio[data-key='${e.key}']`) 
    if(!audio)return;
    audio.currentTime=0;
    audio.play();
    key.classList.remove('playing');
    void key.offsetWidth;
    key.classList.add('playing')

})

const keys=document.querySelectorAll('.key');
keys.forEach(key=>key.addEventListener('transitionend',(e)=>{
    if(e.propertyName!=='transform')return
    e.target.classList.remove('playing')
}))