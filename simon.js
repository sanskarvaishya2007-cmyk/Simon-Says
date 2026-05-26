let gameseq=[];
let userseq=[];
let started = false;
let level=0;
let highestscore=0;
let hs = document.querySelector(".hs");
let h2 = document.querySelector("h2");
let color=["red","yellow","green","blue"];
document.addEventListener("keydown",function(){
    if(started==false){
        console.log("start");
        levelup();
        started=true;
    }
});

function flash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },125);
};

function levelup(){
    level++;
    userseq=[];
    h2.innerText=`level ${level}`;
    let randidx= Math.floor(Math.random()*3);
    let randcolor= color[randidx];
    gameseq.push(randcolor);
    console.log(gameseq);
    let rbtn=document.querySelector(`.${randcolor}`);
    flash(rbtn);
};

function check(index){
    if(userseq[index] === gameseq[index]) {
        if(userseq.length == gameseq.length)
            {
                setTimeout(levelup,250) 
            }  
    }
    else {
    if(level>highestscore){
        hs.innerText=`Highest Score:${level}`;
        highestscore=level;
    }
    h2.innerText=`Game Over!Your score was ${level} Press any to restart`;  
    reset();  
    }
};


function btnpress(btn){
    console.log(this);
    flash(this);
    let btncolor=this.getAttribute("id");
    userseq.push(btncolor);
    console.log(userseq);
    check(userseq.length-1);
};

function reset(){
    started=false;
    level=0;
    gameseq=[];
    userseq=[];
}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnpress);
};