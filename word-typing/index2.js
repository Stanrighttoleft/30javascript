const containerEl=document.querySelector('.container');

let careerIndex=0;
let characterIndex=0;
let career=['Youtuber', 'Instructor', 'Teacher', 'Student']

updatecontent();

function updatecontent(){
    characterIndex++;
    containerEl.innerHTML=`
    <h1>I am ${career[careerIndex].slice(0,1)==="I"?"an":"a"} ${career[careerIndex].slice(0,characterIndex)} <h1>

    `
    if(characterIndex===career[careerIndex].length){
        careerIndex++;
        characterIndex=0;
    }
    if(careerIndex===career.length){
        careerIndex=0;
        characterIndex=0;
    }

    setTimeout(updatecontent,400);
}
