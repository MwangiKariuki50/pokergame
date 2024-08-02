//  let firstCard = 10;
//  let secondCard = 11;
//  let sum = firstCard + secondCard;
//  let hasBlackJack = false
//  let isAlive = true 

//  let message = "" 


//  //=======else if========

//  if (sum < 21){
//      message = "Do you want to draw a new card?"
//  }else if(sum === 21){
//      message = "HURAYY! YOU HAVE BLACK JACK"
//      hasBlackJack = true
//  }else {
//      message = "you're out of the game!!"
//      isAlive = false
//  }

//  console.log(message)

//=======clubs=======
// let age = 21;

//  if (age >= 21){
//      console.log("WELCOME!")
//  }else{
//      console.log("You can not enter the club!")
// }

//=======eliible for a birthday card=======
// let age = 100;


//  if (age === 100){
//     console.log("Here is a birthday card from the King!")
//  }else if (age > 100){
//     console.log("Not eligible!. You already got a birthday card")
//  }else{
//     console.log("Not eligible")
//  }

//==========================ARRAYS=========================
// let featuredPosts =  [
//     "check out my NetFlix clone",
//     " Here is the code for my project",
//     "i've just launched my portfolio"
// ]

//   let skills = [
//       "EXPERIENCE",
//       "education",
//       "skills"
//   ]
// console.log(featuredPosts.length)
//================force arrays =================
// let cards = [ 7 , 4]
 
// cards.push(6)
// console.log(cards)

// let messages = [
//   "hey how's it going?",
//   "i'm great, thank you! How about you?",
//   "All good. Been working on my portfolio lately."
// ];

// let newMessage = "Same here!"

// messages.push("Same here!")
// console.log(messages);
// messages.pop(messages);
// console.log(messages);


//===============COUNTING USING FOR LOOPS=========================
// for(let count = 10; count < 21; count+=1){
//     console.log(count)
// }

// for (let count = 10; count < 101; count += 10) {
//     console.log(count)
// }

// let cards =  [ 7,3,9]
// for (let i = 0; i < cards.length; i++) {
//     console.log(cards[i]);
// }



//===============COUNTING USING FOR LOOPS AND ARRAYS =========================

// let messages = [
// "hey how's it going?",
// "i'm great, thank you! How about you?",
// "All good. Been working on my portfolio lately.",
//  "Same here!", 
// "Great to hear you",
// ":)"
// ];


// for(let i = 0; i < messages.length; i++) {
// console.log(messages[i]);
// }

// let cards = [7,3, 9]

// for(let i = 0 ; i < cards.length; i++) {
//     console.log(cards[i]);
// }

// let sentence = ["Hello", "my", "name","is","james"]
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.length; i++){
//     greetingEl.textContent += sentence[i] +" "
//     console.log(sentence[i]);
// }


//=================== RETURNING VALUES IN FUNCTIONS =================

// let player1Time = 102
// let player2Time = 107

// function getFastestTime(){
//     if (player1Time <  player2Time) {
//         return player1Time
//     }else if (player2Time < player1Time) {
//         return player2Time
//     }else{
//         return player1Time
//     }
// }
// let fastestRace = getFastestTime()

// console.log(fastestRace)
// function getTotalRaceTime(){
//     return player1Time + player2Time
// }

// let totalTime = getTotalRaceTime()

// console.log(totalTime)

//======================= GENERATING RANDOM NUMBERS WITH MATH.RANDOM =======================

// let randomNumber = Math.random() * 6
// function rollDice(){
//     let randomNumber = Math.floor(Math.random() * 5)+1 
//     return randomNumber 
// }

// console.log(rollDice())

//================LOGICAL OPERATORS =============================

// let hasCompletedCourse = true;
// let givesCertificate = true;

// if (hasCompletedCourse===true && givesCertificate===true){
//         generateCertificate();
// }

// function generateCertificate(){
//     console.log("generating certificate ----")
// }


// let hasSolvedChallenge = false;
// let hasHintsLeft = false;

// if(hasSolvedChallenge===false || hasHintsLeft === false){
//     showSolution();
// }

// function showSolution(){
//     console.log("Showing the Solution......");
// }

// let likesDocumentaries = false;
// let likesStartups = true;

// if(likesDocumentaries === false || likesStartups === false){
//     recommendMovies();
// }

// function recommendMovies(){
// console.log("Hey, chek out this new film we think yu will like it......"); 
// }


//===================INTRODUCTION TO OBJECTS  ===========================

// let course = {
//     title: " Learn css grid for free!",
//     lessons:16,
//     creator: "kennedy mwangi",
//     length: 51,
//     level: 3,
//     isFree: true,
//     tags: ["html", "css"]
// }

// console.log(course.tags)

// let castle = {
//     price: 192,
//     name: "Riverine",
//     isFree: false,
//     tags:["comfortavel", "spacoius"]
// }

// console.log(castle.name)

// let person = {
//     name: "Kennedy",
//     age: 24,
//     country:" Kenya"
// }

// function logData(){
//     console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
// }
// logData()

//=========================IF ELSE==========================

// let age = 55


// function priceDiscount(){
// if(age <= 5 ){
//     return "free"
// }else if(age >=6 && age <=17){
//     return "child discount"
// }else if(age >=18 && age <=26){
//     return "student discount"
// }else if(age >=27 && age <=66){
//     return"full Price"
// }else if(age >= 67){
//     return"Senior Citizens discount"
// }

// }

// console.log(priceDiscount())


// ==========================FOR LOOP =========================

// let largeCountries = ["china", "india", "USA", "indonasia", "pakistan"]

// for(let i = 0; i < largeCountries.length; i++) {
//     console.log(largeCountries[i])
// }

//=================PUSH POP SHIFT =================


// let largeCountries = ["tuvalu", "india", "USA", "indonesia", "monaco"]
// console.log(largeCountries)

// largeCountries.pop(largeCountries)
// console.log(largeCountries)

// let country = "Pakistan"
// largeCountries.push(country)
// console.log(largeCountries)

// largeCountries.shift(largeCountries)
// console.log(largeCountries)

// let countryb= "china"
// largeCountries.unshift(countryb)
// console.log(largeCountries)

//========= LOGICAL OPERATORS =================================================

// let dayOfMonth = 13
// let weekend = "Friday"

// function getWeekend(){
// if(dayOfMonth ===13 && weekend === "Friday"){
//     return ":("
// }
// }

// console.log(getWeekend())

// if(dayOfMonth ===13 && weekend === "Friday"){
//     console.log( ":(")
// }

//====================ROCK, PAPER, SCISCORS=============================

let hands = ["rock", "paper", "scissor"]

function getHand(){
    let randomIndex = Math.floor(Math.random() * 3)
    return hands[randomIndex]
}

console.log(getHand())