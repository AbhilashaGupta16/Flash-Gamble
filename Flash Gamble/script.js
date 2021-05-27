var ls=[],uls=[],ctr,cont=true,f,started=true,turn=0,high=0,once_name=true

document.querySelector("#start-btn").addEventListener("click",start);

function start()
{
    turn=0
    if(started)
    {
        if(once_name)
        {
        var p1=prompt("Please enter your name","Player");
        document.querySelector("#player-name").innerHTML="  "+p1;
        once_name=false;
        }
        document.querySelector("#start-text").innerHTML="The Game Has Started !";
        $("#start-text").removeClass("blink");
        setTimeout(function () {
            play();
          }, 1000);
        started=false
    }
}

function play(){
    var f=1,i,turn=0
    ls=[]
    uls=[]
    while(f<2)
    {
        
        n=Math.floor((Math.random() * 4) + 1);
        ls.push(n)
        if(n==1)
            colour="green";
        else if(n==2)
            colour="red";
        else if(n==3)
            colour="yellow";
        else if(n==4)
            colour="blue";
        makeanimate(n);
        makesound(colour);
        f=f+1;
        ctr=0;
    }
}

$(".box").click(function()
{
    cbtn=$(this).attr("value");
    uls.push(cbtn);
    $("#box-"+cbtn).addClass("pressed");
    setTimeout(function () {
        $("#box-"+cbtn).removeClass("pressed");
      }, 200);

    if(!(ls[ctr++]==cbtn))
    {
        makesound("wrong");
        cont=false
        if(turn>high)
            high=turn
        document.querySelector("#high-score").innerHTML=high;
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);
          document.querySelector("#start-text").innerHTML="You can restart game";
          started=true;
    }
    else if (ctr===ls.length){
        setTimeout(function () {
            again();
          }, 1000);
    }
});

function again(){
    turn=turn+1
    document.querySelector("#level-no").innerHTML=turn;
    uls=[]
    console.log("turn"+f)
        n=Math.floor((Math.random() * 4) + 1);
        ls.push(n)
        if(n==1)
            colour="green";
        else if(n==2)
            colour="red";
        else if(n==3)
            colour="yellow";
        else if(n==4)
            colour="blue";
        makeanimate(n);
        makesound(colour);
        ctr=0;
}

function makeanimate(n){
    $("#box-"+n).fadeIn(100).fadeOut(100).fadeIn(100);
}

function makesound(colour){
    var audio= new Audio("sounds/"+colour+".mp3");
    audio.play();
}