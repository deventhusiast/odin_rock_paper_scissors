let btns = [...document.querySelectorAll('li')]
let playerScores= document.querySelector('#client_scores')
let scores_computer = document.querySelector('#computer_scores')
let overlay = document.querySelector('#overlay')
let player = Number(playerScores.innerText)
let computer = Number(scores_computer.innerText)
let popup = document.querySelector('.pop')


const getComputerChoice = () =>{
    let result = Math.floor(Math.random() * btns.length)
    return btns[result].id

}
const showPlayerChoice =(choice='') =>{
  let player_choice = document.querySelector('#player_choice')
  player_choice.innerText = `Your choice is: ${choice}`
}
const showComputerChoice = (choice='') =>{
  let computer_choice = document.querySelector('#computer_choice')
  computer_choice.innerText = `Computer choice is: ${choice}`
}
const closeButton = () =>{
  overlay.style.opacity = 0
  popup.classList.remove('active')
}

const showPopup = (front,emoji=null) =>{
  let popup_text = document.querySelector('#pop_text')
  popup_text.innerText = `${front} ${emoji}`
  let close = document.querySelector('.close')
  overlay.style.opacity = 1
  popup.classList.add('active')
  close.addEventListener('click',closeButton)
}
const reset = () =>{
  playerScores.innerText = "0"
  scores_computer.innerText = "0"
  showPlayerChoice()
  showComputerChoice()
  player =0
  computer =0
}
let restart = document.querySelector('#reset').addEventListener('click',reset)
const checkResult = (player,computer)=>{
  if (player > computer){
    showPopup(`Congratulations you are the winer `,String.fromCodePoint(0x1f60a))
  }
  else if(computer> player){
    showPopup(`Better luck next time `,String.fromCodePoint(0x1f61e))
  }
  else if((player === computer) &&(player>0 && computer>0)){
    showPopup(`The result is tie!`)
  }
  reset()

}
const game= (e)=>{
  let playerSelection
  let computerSelection
  if(e !== undefined){
    playerSelection = e.currentTarget.id
    showPlayerChoice(playerSelection)
    computerSelection = getComputerChoice()
    showComputerChoice(computerSelection)
    playRound(playerSelection,computerSelection)
    }
  };
  let items = [...document.querySelectorAll('li')].forEach((item) => {
    item.addEventListener('click',game)
  });


const playRound =(playerSelection,computerSelection)=>{
  if(player === 5 || computer === 5){
    checkResult(player,computer)
  }
  if(playerSelection === computerSelection){
    player+=0
    computer+=0
  }
  if(playerSelection === 'rock'){
      switch(computerSelection){
        case "paper":
          player+=0
          computer+=1
          break;
        case "scissors":
          player+=1
          computer+=0;
          break;
        }
    }
    if(playerSelection === "paper"){
      switch(computerSelection){
        case "scissors":
          player+=0
          computer+=1
          break;
        case "rock":
          player+=1
          computer+=0
          break;
      }
    }
    if(playerSelection === 'scissors'){
      switch(computerSelection){
        case 'rock':
          player+=0
          computer+=1
          break;
        case "paper":
          player+=1
          computer+=0
          break;
      }
    }
    playerScores.innerText = player.toString()
    scores_computer.innerText=computer.toString()
}
