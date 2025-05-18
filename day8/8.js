
const canvas=document.querySelector('#draw');
const ctx=canvas.getContext('2d');

ctx.trokeStyle='#BADA55';
ctx.width=window.innerWidth;
ctx.height=window.innerHeight;
ctx.lineWidth=100;;
ctx.lineJoin= 'round';
ctx.lineCap= 'round';
//ctx.globalCompositeOperation='multiply'

let lastx=0;
let lasty=0;
let hue=0;
let isDrawing=false;
let direction=true;

function draw(e){
    if(!isDrawing) return;
    console.log(e);
    ctx.strokeStyle=`hsl(${hue},100%,50%)`;
    ctx.beginPath();
    ctx.moveTo(lastx, lasty);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    [lastx,lasty]=[e.offsetX, e.offsetY]

    hue++;
    if(hue>=360){
        hue=0
    };
    if(ctx.lineWidth>=100|| ctx.lineWidth<=1){
        direction=!direction;

    }
    if(direction){
        ctx.lineWidth++;
    }else{
        ctx.lineWidth--;
    }
}

canvas.addEventListener('mousedown',(e)=>{
    isDrawing=true;
    [lastx,lasty]=[e.offsetX, e.offsetY]
})
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseout',()=>isDrawing=false)
canvas.addEventListener('mouseup',()=>isDrawing=false)