var clutter=" ";
function bubbleSet(){

    for(var i=1;i<=85;i++){

        var rn=Math.floor(Math.random()*10);
    
        clutter += `<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector('#pbtm').innerHTML=clutter;
}


//timer function
var timer = 30;

function runTimer(){

   var timeint=setInterval(function() {

    if(timer>0){
        timer--;
        document.querySelector('#timerval').textContent=timer;
    }
    else{
      clearInterval(timeint);
      document.querySelector('#pbtm').innerHTML=`<h1>Game Over Score:${score}</h1>`;
    }
},1000);
}

//hit function

var hitrn=0;
function hitSet(){

    hitrn=Math.floor(Math.random()*10);

    document.querySelector('#hitval').textContent=hitrn;

}
//score function

var score=0;

function scoreSet(){

score += 10;

document.querySelector('#scoreval').textContent=score;
}


//function to check hit element and selcetd element

document.querySelector('#pbtm').addEventListener("click" , function(details){
   var selectedNum= Number(details.target.textContent);//to get the which number exactly clicked use target
    
    if(selectedNum === hitrn){
        scoreSet();
        hitSet();
        bubbleSet();
    }
})


hitSet();
runTimer();
bubbleSet();

 