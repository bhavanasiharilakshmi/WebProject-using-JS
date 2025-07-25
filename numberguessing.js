let randomNumber=Math.floor(Math.random()*100)+1;
console.log("Random Number is:",randomNumber);
let tries=0;
function guess()
{
    let userguess=Number(document.getElementById("guessInput").value);
    tries++;
    if(userguess<1||userguess>100||!userguess){
        document.getElementById("result").innerHTML="please enter a number between 1 and 100";
        return;
    }
    if(userguess===randomNumber)
    {
        document.getElementById("result").innerHTML="## Wooahoo... Your Guessing Is Correct..!!!";
    }
    else if(userguess<randomNumber)
    {
        document.getElementById("result").innerHTML="Your Guessing Number is Too Low....";
        alert("please..Try Again..");
    }
    else
    {
        document.getElementById("result").innerHTML="Your Guessing Number is Too High..."
        alert("please..Try Again");
    } 
    document.getElementById("attempts").innerHTML=`Attempts:${tries}`;
}