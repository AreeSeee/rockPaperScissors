const getUserChoice= userInput=>{
    userInput = userInput.toUpperCase();
    if (userInput === 'ROCK' || userInput === 'PAPER' ||userInput==='SCISSORS' ) {
    return userInput;
  } else {
    console.log('Error!');
  }
  }
  function getComputerChoice(){
    let x=Math.floor(Math.random()*3);
    console.log(x);
    if(x===0){
      return 'ROCK';
    }else if(x===1){
       return 'PAPER';
    }
    else if(x===2){
       return 'SCISSORS';
    }
  }
  function determineWinner(userChoice, computerChoice){
    if(userChoice===computerChoice){
      console.log('game was a tie');
    }
    else if(userChoice==='ROCK'){
      if(computerChoice==='PAPER'){
        console.log("computer won")
      }else {
        console.log("you won");
      }
      
    }else if(userChoice==='PAPER'){
      if(computerChoice==='SCISSORS'){
        console.log("computer won");
      }else{
        console.log('you won');
      }
    } else if(userChoice==='SCISSORS'){
      if(computerChoice==='ROCK'){
        console.log("computer won");
      }else {
        console.log("you won");
      }
    
  }
  }
  
   let userChoice = getUserChoice('rock');
   let computerChoice= getComputerChoice();
   determineWinner(userChoice, computerChoice);
  
  
  
  
  
  
  
  