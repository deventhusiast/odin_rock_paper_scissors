let btns = [...document.querySelectorAll('li')]
let round = 0
let playerScores= document.querySelector('#client_scores')
let scores_computer = document.querySelector('#computer_scores')
let overlay = document.querySelector('#overlay')
let player = Number(playerScores.innerHTML)
let computer = Number(scores_computer.innerHTML)

const getComputerChoice = () =>{
    let result = Math.floor(Math.random() * btns.length)
    return btns[result].id

}
const showPlayerChoice =(choice='') =>{
  let player_choice = document.querySelector('#player_choice')
  player_choice.innerHTML = `Your choice is: ${choice}`
}
const showComputerChoice = (choice='') =>{
  let computer_choice = document.querySelector('#computer_choice')
  computer_choice.innerHTML = `Computer choice is: ${choice}`
}
const showPopup = (front,value='') =>{
  let popup_text = document.querySelector('#pop_text')
  popup_text.innerHTML = `${front}${value}`
  let popup = document.querySelector('.pop')
  let close = document.querySelector('.close')
  overlay.style.opacity = 1
  popup.classList.add('active')
  close.addEventListener('click',()=>{
    overlay.style.opacity = 0
    popup.classList.remove('active')
  })
}
const reset = () =>{
  playerScores.innerHTML = "0"
  scores_computer.innerHTML = "0"
  showPlayerChoice()
  showComputerChoice()
  round = 0
  player =0
  computer =0
}
let restart = document.querySelector('#reset').addEventListener('click',reset)
const checkResult = (player,computer)=>{
  if (player > computer){
    showPopup(`You are the winer and your scores are:  `,player.toString())
  }
  else if(computer> player){
    showPopup(`Computer is the winer and the scores are: `,computer.toString())
  }
  else if((player === computer) &&(player>0 && computer>0)){
    showPopup(`The result is tie!`)
  }
  reset()

}
const game= (e)=>{
  let playerSelection
  let computerSelection
  round++
  if(e !== undefined){
    playerSelection = e.currentTarget.id
    showPlayerChoice(playerSelection)
    computerSelection = getComputerChoice()
    showComputerChoice(computerSelection)
    playRound(playerSelection,computerSelection)
    }
  };
  items = [...document.querySelectorAll('li')].forEach((item) => {
    item.addEventListener('click',game)
  });


const playRound =(playerSelection,computerSelection)=>{
  console.log(round);
  if(round===6){
    checkResult(player,computer)
  }
else if(round<6){
  if(playerSelection === 'rock'){
    switch(computerSelection){
      case "rock":
        player+=0
        computer+=0
        playerScores.innerHTML = player.toString()
        scores_computer.innerHTML=computer.toString()
        break;
      case "paper":
        player+=0
        computer+=1
        playerScores.innerHTML = player.toString()
        scores_computer.innerHTML=computer.toString()
        break;
      case "scissors":
        player+=1
        computer+=0;
        playerScores.innerHTML = player.toString()
        scores_computer.innerHTML=computer.toString()
        break;
      }
  }
  else if(playerSelection === "paper"){
    switch(computerSelection){
      case "paper":
        player+=0
        computer+=0
        playerScores.innerHTML = player.toString()
        scores_computer.innerHTML=computer.toString()
        break;
      case "scissors":
        player+=0
        computer+=1
        playerScores.innerHTML = player.toString()
        scores_computer.innerHTML=computer.toString()
        break;
      case "rock":
        player+=1
        computer+=0
        playerScores.innerHTML = player.toString()
        scores_computer.innerHTML=computer.toString()
        break;
    }
  }
  else if(playerSelection === 'scissors'){
    switch(computerSelection){
      case "scissors":
        player+=0
        computer+=0
        playerScores.innerHTML = player.toString()
        scores_computer.innerHTML=computer.toString()
        break;
      case 'rock':
        player+=0
        computer+=1
        playerScores.innerHTML = player.toString()
        scores_computer.innerHTML=computer.toString()
        break;
      case "paper":
        player+=1
        computer+=0
        playerScores.innerHTML = player.toString()
        scores_computer.innerHTML=computer.toString()
        break;
    }
  }
}
}
