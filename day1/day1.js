window.addEventListener('keydown', (e)=>{
    console.log(e.key)
    let audio=document.querySelector(`audio[data-id="${e.key}"]`)
    let key=document.querySelector(`.key[data-id="${e.key}"]`)
    if(!audio)return;
    audio.currentTime=0;
    audio.play()
     // Force a reflow before applying class
    key.classList.remove('playing'); // Reset in case already applied
    void key.offsetWidth; // Force reflow
    key.classList.add('playing')

})

const keys=document.querySelectorAll('.key');
keys.forEach(key=>key.addEventListener('transitionend',(e)=>{
    console.log('transition ended:', e.propertyName);
    if(e.propertyName !=='transform') return;
    e.target.classList.remove('playing')
}));