let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg1=document.querySelector("#msg")

const userScorePara= document.querySelector("#User")
const CompScorePara= document.querySelector("#computer")

const gencomchoice= () =>{
    const options=["rock","paper","scissors"]
   const randIdx=Math.floor(Math.random() * 3) 
   return options[randIdx]

}
const drawgame=()=>{
    
    msg1.innerText="Game Was Draw"
    msg1.style.backgroundColor="brown"
}

const showWinner=(userWin,userchoice,comchoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText =userScore
        msg1.innerText=`You Win! Your ${userchoice} beats ${comchoice}`
        msg1.style.backgroundColor="green"
    }else{
        compScore++;
        CompScorePara.innerText= compScore
        msg1.innerText=`You Lose ! ${comchoice} beats your ${userchoice}`
         msg1.style.backgroundColor="red"
    }
}

const playgame= (userchoice) =>{
   

    const comchoice = gencomchoice();
    
    if(userchoice===comchoice){
         drawgame()
    }
    else{
        let userWin=true
        if(userchoice==="rock"){
            userWin=comchoice==="paper"? false: true;
        }else if(userchoice==="paper"){
           userWin= comchoice==="scissors"? false :true

        }else{
            userWin=comchoice==="rock" ? false: true;
        }
           showWinner(userWin,userchoice,comchoice)
        }
}



choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userchoice= choice.getAttribute("id")
          playgame(userchoice)
    })
})