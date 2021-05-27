/**
 * THE ODIN PROJECT
 * Foundations
 * PROJECT : ROCK PAPER SCISSORS
 * 
 * Soluation steps
 * 
 * list of the selection
 * Winning Game Options
 * 
 * Get player selection input
 *      if input is not empty
 *          change it to capital
 *          if it is matching on of the options
 *              print the palyer selection
 *          else
 *              print your selection shall be on of the options
 *      else
 *          print no input was given
 * 
 * Get Computer selection
 *      Random from the selections
 *      
 * Get the Winner
 * 
 * 
 */

 let selections = ["ROCK","SCISSORS","PAPER"];

 let Winingoptions = [
     {select : "ROCK", beat: "SCISSORS"}, 
     {select : "PAPER", beat: "ROCK"},
     {select : "SCISSORS", beat: "PAPER"}
 ];
 
 
 function getPlayerSelection(){
     var playerSelection = prompt("Please enter your selection (ROCK , PAPER , SCISSORS)");
     if (playerSelection != null){
         playerSelection.toUpperCase();
         console.log(playerSelection);
         if (selections.includes(playerSelection)){
             console.log("Your Selection is " + playerSelection);
             dataPlayerSelection = Winingoptions.find(option => option.select == playerSelection);
             //console.log("Your Selection is " + JSON.stringify(dataPlayerSelection));
             return dataPlayerSelection;
         }
         else {
             console.log("Your Selection should be one of " + selections);
            return getPlayerSelection();
         }   
     }
     else {
         console.log("Your should type your selection " + selections );
         return getPlayerSelection();
     }
 }
 
 function getComputerSelection(){
     computerSelection = selections[Math.floor(Math.random()* selections.length)];
     console.log("Computer Selection is " + computerSelection);
     dataComputerSelection = Winingoptions.find(option => option.select == computerSelection);
     //console.log("Computer Selection is" + JSON.stringify(dataComputerSelection));
     return dataComputerSelection ;
 }
 
 function getTheWinner(player1 , player2){
     if (player1.beat === player2.select){
         playerCount++;
         console.log("you win your selection is  "+ player1.select
         +" beats computer selection "
         + player2.select);
         //return "player1"
     }
     else if (player2.beat === player1.select){
         computerCount++;
         console.log("you losse the computer selection is  "+ player2.select
         +" beats your selection "
         + player1.select);
         //return "player2"
     }
     else{console.log("It's Tie your selection is "+ player1.select +" and computer selection is "+player2.select)}
 
 }
 
 function game(){
 
     while ((playerCount < 5) && (computerCount < 5 )){
         playerSelection = getPlayerSelection();
         computerSelection = getComputerSelection();
         getTheWinner(playerSelection,computerSelection);
         console.log("your scoure is " + playerCount +" and Computer scoure is " + computerCount);
     }
     console.log("Thank you!")
 }
 
 let playerCount = 0;
 let computerCount = 0; 
 game();