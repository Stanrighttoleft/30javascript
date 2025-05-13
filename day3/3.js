const inputs=document.querySelectorAll('.control input')

function update(){
    const unit=this.dataset.size || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + unit)
    console.log(this.value)
    console.log(this.name)
    console.log(unit)
}

inputs.forEach(input=>input.addEventListener('change', update))
inputs.forEach(input=>input.addEventListener('mousemove',update))