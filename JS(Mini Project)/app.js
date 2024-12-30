let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let btns=["yellow","red","purple","green"];


let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;


        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);

}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);

}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    //random btn choose
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);
}

function checkAns(idx){
    // console.log("curr level: ",level);

    
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerText=`Game Over! Your score was ${level}. Press any key to start`;
        document.querySelector("body").style.backgroundColor="pink";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"

        },150);
        
        

        reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];

    level=0;

}