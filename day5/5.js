const photos=document.querySelectorAll('.panel');

photos.forEach(photo=>photo.addEventListener('click',()=>{
    photos.forEach(photo=>photo.classList.remove('open', 'active'))
    photo.classList.add('open')}))
photos.forEach(photo=>photo.addEventListener('transitionend',(e)=>{
    if (e.propertyName.includes('flex') && photo.classList.contains('open')){
        photo.classList.add('active')

    }
    
    console.log(e.propertyName)
}))