let Gameseq=[]
let userseq=[]

let btns=['yellow','red','purple','green']

let started=false;
let level=0

let h2=document.querySelector('h2')

document.addEventListener('keypress',function(){
    if(started==false){
        console.log("Game is Started")
        started=true
    }


    levelUp()
})

function btnFlash(btn){
  btn.classList.add('Flash')

  setTimeout(function(){
    btn.classList.remove("Flash")
  },1000)
}

function levelUp(){
    level++
    h2.innerText=`Level ${level}`
    
    let randIdx=Math.floor(Math.random()*4)
    let randColor=btns[randIdx]
    let randBtn=document.querySelector(`.${randColor}`)
    btnFlash(randBtn)
}