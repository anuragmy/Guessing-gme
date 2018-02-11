var play=false,score,timeremaining,action;
var tell=true;

document.getElementById("startreset").onclick = 
    function() {
    if(play==true) {
        location.reload();
        
    }
    else {
        play =  true;
        score=0;
        
        document.getElementById("scorevalue").innerHTML = score;
        document.getElementById("startreset").innerHTML = "Reset";
document.getElementById("timer").style.display = "block";
        timeremaining=60;
        document.getElementById("timeleft").innerHTML = timeremaining;
        startcountdown();
        
        }
        
    }


function startcountdown() {
    
   
    action=setInterval(f,1000);
    if(tell==true)
     generateqa();
    function f() {
    timeremaining -=1;
     document.getElementById("timeleft").innerHTML = timeremaining;
        if(timeremaining == 0) {
            clearInterval(action);
            document.getElementById("gameover").style.display = "block";
            document.getElementById("displayscore").innerHTML = score;
            document.getElementById("timer").style.display="none" ;
            document.getElementById("startreset").innerHTML="Start" ;
            score=0;
            tell=false;
            
            
        }
    }
    
    
    
}
var correctans;
function generateqa() {
    var x=Math.round(Math.random()*30)+1;
    var y=Math.round(Math.random()*30)+1;
    document.getElementById("question").innerHTML = x +" x "+y;
     correctans = x*y;
    
    var i=Math.round(Math.random()*3)+1;
    console.log(i);
    document.getElementById("ans"+i).innerHTML = correctans;
    for(var j=1;j<5;j++) {
        if(j!=i) {
            var ran1=Math.round(Math.random()*30);
            var ran2=Math.round(Math.random()*30);
            var wrongans=ran1*ran2;
            
                
            console.log(wrongans);
            console.log(correctans);
            if(wrongans == correctans){
                j-=1;
                continue;
            }
                
            document.getElementById("ans"+j).innerHTML= wrongans;
        }
            
           
        }
}



document.getElementById("ans1").onclick = 
    function () {
    if(play==true) {
    if(this.innerHTML==correctans) {
        score++;
        document.getElementById("scorevalue").innerHTML=score;
        document.getElementById("correct").style.display="block";
        setInterval(function(){document.getElementById("correct").style.display="none";},1000);
        
        
    }
    else {
         document.getElementById("tryagain").style.display="block";
        setInterval(function(){document.getElementById("tryagain").style.display="none";},1000);
        
    }
       generateqa(); 
    
}
}

document.getElementById("ans2").onclick = 
    function () { if(play==true) {
    if(this.innerHTML==correctans) {
        score++;
        document.getElementById("scorevalue").innerHTML=score;
        document.getElementById("correct").style.display="block";
        setInterval(function(){document.getElementById("correct").style.display="none";},1000);
       
    }
    else {
         document.getElementById("tryagain").style.display="block";
        setInterval(function(){document.getElementById("tryagain").style.display="none";},1000);
       
    }
        
    generateqa();
}
}
document.getElementById("ans3").onclick = 
    function () {
    if(play==true) {
    if(this.innerHTML==correctans) {
        score++;
        document.getElementById("scorevalue").innerHTML=score;
        document.getElementById("correct").style.display="block";
        setInterval(function(){document.getElementById("correct").style.display="none";},1000);
       
    }
    else {
         document.getElementById("tryagain").style.display="block";
        setInterval(function(){document.getElementById("tryagain").style.display="none";},1000);
        
    }
        generateqa();
    
}
}

document.getElementById("ans4").onclick = 
    function () { 
    if(play==true) {
    if(this.innerHTML==correctans) {
        score++;
        document.getElementById("scorevalue").innerHTML=score;
        document.getElementById("correct").style.display="block";
        setInterval(function(){document.getElementById("correct").style.display="none";},1000);
       
    }
    else {
         document.getElementById("tryagain").style.display="block";
        setInterval(function(){document.getElementById("tryagain").style.display="none";},1000);
       
    }
       generateqa(); 
    
}
}
   
   
      



