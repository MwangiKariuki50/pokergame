let player = {
    name: "ken",
    chips: 146
}

let cards = []
let sum = 0;
let hasBlackJack = false
let isAlive = false
let message = " " 
let messageEl = document.getElementById("message-el");
// let cardEl = document.querySelector("#card-el")
let cardEl = document.getElementById("card-el") 
let sumEl = document.getElementById("sum-el");



let playerEl = document.getElementById("player-el") 
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard() {

    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        return 11;
    }else if (randomNumber > 10){
        return 10;
    }else {
        return randomNumber
    }
}




function startGame(){ 
    isAlive = true;
    
let firstCard = getRandomCard();
let secondCard = getRandomCard();
cards = [firstCard, secondCard]
sum = firstCard + secondCard

    renderGame()
}

//=======else if========
 function renderGame() {
    
    cardEl.textContent = "Cards: " //+cards[0] + " " + " , " + cards[1]

    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent =  "Sum: " + sum
    

     if (sum < 21){
         message = "Do you want to draw a new card?"
     }else if(sum === 21){
         message = "HURAYY! YOU HAVE BLACK JACK!!"
         hasBlackJack = true
     }else {
         message = "you're out of the game!!"
         isAlive = false
     }
 messageEl.textContent = message
 }
 
 function  newCard(){
    if(isAlive === true){
        if(hasBlackJack === false) {
            getRandomCard();
        }
    let card = getRandomCard();
    sum += card
    cards.push(card)
    console.log(card)
    renderGame()

 }
}



