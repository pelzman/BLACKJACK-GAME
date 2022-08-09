// function logData(){
//     const name = 'Pelzman';
//     const age = 32;
//     const country = 'Nigeria'
//     console.log(`${name} is ${age} years old and lives in ${country} `)
// }
// logData()

// let age = 67

// if (age < 6){
//     console.log('free')

// }
// else if (age < 18){
// console.log('child discount')
// }

// else if (age < 27){
//     console.log('student discount')
//     }
//     else if (age < 67){
//         console.log('full price')
//         }
//         else{
//             console.log('senior citizen discount')
//             }
//             console.log(age)


let cards = [] //array-order list of items
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = "" 
console.log(cards)
//store the messageEl paragraph in a variable called message-el
let messageEl = document.getElementById('message-el');
//store the cards paragraph in a variable called cards-el
let cardsEl = document.getElementById('card-el');
//store the sum paragraph in a variable called sum-el
let sumEl = document.getElementById('sum-el');
  //wrapping inside an object variable 
 let player = {
    name: 'per', 
    chips: 145
  }
  let playerEl = document.getElementById('player-el')
  playerEl.textContent = player.name +': $' + player.chips


function getRandomCard(){    
        let randomNumber = Math.floor(Math.random()*13) + 1
        if(randomNumber >10) {
            return 10
        }
        else if(randomNumber === 1){
            return 11    
        }
        else{
            return randomNumber
        }
   
}



//  function rollDice(){
//     let randomNumber = Math.floor(Math.random()*13) + 1
//     return randomNumber
 
   function startGame(){

    isAlive =true;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum  = firstCard  + secondCard
    renderGame()
}
function renderGame(){
    //Render out  the firstCards and the secondCard ->
    cardsEl.textContent = 'cards:'
    // Render out all the cards we have

    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + ' '
    }
    
    sumEl.textContent = "sum: " + sum

    if (sum <= 20){
        message ="Do you want to draw a new card?"

    }
    else if(sum ===21){
       message = "Wohoo! You\'ve  got Blackjack!"
       hasBlackJack = true
    }
    else{
        message = "You\'re out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    
}

function newCard(){
    console.log("Drawing a new card from deck!")
    let card = getRandomCard()
    if (isAlive === true &&  hasBlackJack !==true){
        console.log(newCard)
    }
    

    sum += card
    cards.push(card)
    console.log(cards)
    
    renderGame()
}

//counting to 10

// we need to specify...
//where should we  START counting?
//when should we FINISH counting
// what's the STEP SIZE  we should use?
//         START      FINISH       STEP SIZE
// let cards = [7, 3, 9];



// for(let i = 0; i < cards.length; i+=1){
//     console.log(cards[i])
// }

// let sentence = ['Hello', 'my', 'name', 'is', 'per' ]

// let greetingEl = document.getElementById('greeting-el')
// console.log(greetingEl)

// for(let i=0; i < sentence.length; i++){


//     greetingEl.textContent += sentence[i] + ' '// }

let castle = {
    title: 'live like a king in my castle',
    charge: 150,
    isFree: false,
    images: ['img1', 'img2']
}

console.log(castle.title)



let person ={
 name: 'pelzman',
 age: 30,
 country: 'Nigeria'
}
const logData = () =>{
    console.log( person.name + ' is ' + person.age + ' years old' + ' and' + ' lives in ' + person.country)
}
logData()


let largeCountries = ['Tuvalu', 'India', 'USA', 'Indonesia', 'Monaco']

for(let i=0; i < largeCountries.length; i++){
    console.log(largeCountries[i])
}
largeCountries.pop();
console.log(largeCountries)
largeCountries.push('Pakistan');
console.log(largeCountries)

largeCountries.shift();
console.log(largeCountries)
largeCountries.unshift('China');
console.log(largeCountries)


let dayOfMonth = 13;
let weekday = 'Friday'
if(dayOfMonth === 13 && weekday ==='Friday'){
    console.log('spooky face')
}let hands= ['rocks', 'paper', 'scissor']
function myHand(){
    let randomIndex = Math.floor(Math.random()*3)

     return(hands[randomIndex])
    
}
 
console.log(myHand())












