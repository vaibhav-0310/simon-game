let gameSeq=[];
let userSeq=[];
let h2=document.querySelector("h2");
let started=false;
let level=0;
let btns=["yellow", "green", "blue", "red"];
let re=document.querySelectorAll(".re");

document.addEventListener("keypress", function() {
     if(started == false){
        console.log("started");
        started=true;
        levelUp();
     }
});
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText= `Level ${level}`;
    console.log(gameSeq);
    let randIdx= Math.floor(Math.random()*4);
    console.log(randIdx);
    let randColor=btns[randIdx];
    let randbtn= document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randbtn);
}

const btnFlash=(btn)=>{
    btn.classList.add("flash");
    audio();
    setTimeout(function(){
        btn.classList.remove("flash");
        audiop();
    }, 250);
}


const userFlash=(btn)=>{
    btn.classList.add("user");
    audio();
    setTimeout(function(){
        btn.classList.remove("user");
        audiop();
    }, 100);
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1); 
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click" , btnPress);
}

function checkAns(idx){
   if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp, 1000);
        }
   }
   else{
    h2.innerHTML=`Game over! Your score was <b>${level}</b> <br> press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="cornsilk";
    } , 150);
    reset();
   }
}

function audio(){
    let g=gameSeq.length-1;
    let f=gameSeq[g];
    if(f=="yellow"){
        re[0].play();
    }
    else  if(f=="green"){
        re[1].play();
    }
    else  if(f=="blue"){
        re[2].play();
    }
    else  if(f=="red"){
        re[3].play();
    }
}

function audiop(){
    let g=gameSeq.length-1;
    let f=gameSeq[g];
    if(f=="yellow"){
        re[0].pause();
    }
    else  if(f=="green"){
        re[1].pause();
    }
    else  if(f=="blue"){
        re[2].pause();
    }
    else  if(f=="red"){
        re[3].pause();
    }
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq;
    level=0;
}