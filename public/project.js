
var points=0;
function show()
{alert("Thanks,welcome to QuizoMania")}

function letusplay()
{

var ans=document.getElementById("abc");
if(ans.value=="7")
{alert("Correct Answer");
points+=4;
}
else{alert("Wrong");
points=-1;}
}
function frends()
{
    var as=document.getElementById("question2");
    var as1;
    
    if(document.getElementById ("r1").checked)
  {as1=document.getElementById ("r1").value;
  document.getElementById("cir").style.fill="red";
  points-=1;

     }
 else if(document.getElementById ("r2").checked)
    {as1=document.getElementById ("r2").value;
    document.getElementById("cir").style.fill="red";
    points-=1;
    }
    else if(document.getElementById ("r3").checked)
    {as1=document.getElementById("r3").value;
    document.getElementById("cir").style.fill="green";
    points+=4;}
else{as1=document.getElementById ("r4").value;
points-=1;
document.getElementById("cir").style.fill="red";}
    alert(as1);
    }
function question3()
    
   {var za;
    if(document.getElementById ("z1").checked)
    {za=document.getElementById ("z1").value;
    points+=4;}
    else if(document.getElementById ("z2").checked)
    {za=document.getElementById ("z2").value;
    points-=1 ;}
     else {
        za=document.getElementById ("z3").value;
    points-=1;}
    alert(za);
    
    
}
function question4()
{
var jpp=document.getElementById("Emma");
if(jpp.value=="Emma"||jpp.value=="emma")
{
alert("Correct");
points+=4;}
else{
alert("Incorrect");
points-=1;
}

}
function question5()
{
    if(document.getElementById("n1").checked)
    {alert("Incorrect");
    points-=1;}
else if(document.getElementById("n2").checked)
{alert("Correct");
points+=4;
}
else if(document.getElementById("n3").checked)
{alert("Incorrect");
points-=1;
}
else
{alert("Incorrect")
points-=1;
}

}
function timeshow()
{

var d=new Date();
var hours=d.getHours();
var minutes=d.getMinutes();
var seconds=d.getSeconds();
document.getElementById("a1").innerHTML=hours+":"+minutes+":"+seconds;
}
setInterval(timeshow,1000);
function question6()
{
    var d2=document.getElementById("roommate");
    if(d2.value=="eddie"||d2.value=="Eddie")
{
    alert("Correct")
    points+=4;
}
else{
    alert("incorrect")
    points-=1;
}
}
function question7()
{
    var gg;
    
    if(document.getElementById ("f1").checked)
  {gg=document.getElementById ("f1").value;
  points-=1;
     }
 else if(document.getElementById ("f2").checked)
    {gg=document.getElementById ("f2").value;
    points-=1;
    }
    else if(document.getElementById ("f3").checked)
    {gg=document.getElementById("f3").value;
    points+=4;
    }
else{gg=document.getElementById ("f4").value;
points-=1;}
alert(gg);
}

function question8()
{
    if(document.getElementById("Muriel").value=="muriel"||document.getElementById("Muriel").value=="Muriel")
    {
        alert("You are damn right");
        points+=4;
    }
else{
    alert("Not a great fan you are,my friend!");
    points-=1;
}
}
function question9()
{
    var ab;
    
    if(document.getElementById ("u1").checked)
  {ab=document.getElementById ("u1").value;
  points-=1;
     }
 else if(document.getElementById ("u2").checked)
    {ab=document.getElementById ("u2").value;
    points-=1;
    }
    else if(document.getElementById ("u3").checked)
    {ab=document.getElementById("u3").value
    points-=1;
    }
else{ab=document.getElementById ("u4").value;
points+=4;}
alert(ab);
}
function question10()
{
    if(document.getElementById("ralph").value=="RalphLauren"||document.getElementById("ralph").value=="RALPHLAUREN"||document.getElementById("ralph").value=="Ralphlauren"||document.getElementById("ralph".value=="ralphlauren"))
 {   alert("CORRECT");
 points+=4;
   }   else{
    alert("Incorrect");
    points=-1;
   }
}