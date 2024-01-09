var randomNumber=Math.floor(Math.random()*100)+1;
var attemps=0;

document.getElementById("guessBtn").addEventListener("click",function(){
    var guess =parseInt( document.getElementById("guessInput").value);
    attemps++;
    if(guess==randomNumber){
        displaymsg("Congratulation! You guessed the number in "+attemps+" attempts.")
        document.getElementById("guessBtn").disabled=true;
    }
    else if(guess<randomNumber){
        displaymsg("Too Low Try Another Number")
    }
    else{
        displaymsg("Too High try another Number");
    }
});

function displaymsg(msg){
    document.getElementById("msg").textContent=msg;
}
