let player = {
    player1Name: "You: $",
    player1Chips: 100
}
let playerCards = []
let playerSum = 0
let dealerSum = 0
let dealerFirstCard = 0
let dealerSecondCard = 0
let gameStarted = false
let hasBlackJack = false
let playerIsAlive = false
let dealerIsAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let dealerCardsEl = document.getElementById("dealerCards-el")
let playerCardsEl = document.getElementById("playerCards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.player1Name + player.player1Chips


function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    console.log(gameStarted)
    if (gameStarted != true && player.player1Chips > 0) {
        gameStarted = true
        console.log(gameStarted)
        hasBlackJack = false
        playerIsAlive = true
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        dealerFirstCard = getRandomCard()
        dealerCardsEl.textContent = "Dealer Cards: " + dealerFirstCard
        playerCards = [firstCard, secondCard]
       playerSum = firstCard + secondCard
        renderGame()
    } else {
        messageEl.textContent = "You're out of chips!"
    }
    
}

function renderGame() {
    playerCardsEl.textContent = "Your Cards: "
    for (let i = 0; i < playerCards.length; i++) {
        playerCardsEl.textContent += playerCards[i] + " "
    }
    sumEl.textContent = "Your Sum: " + playerSum
    if (playerSum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (playerSum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true, gameStarted = false
        console.log(gameStarted)
        player.player1Chips += 50
    } else {
        message = "You're out of the game!"
        player.player1Chips -= 50
        playerIsAlive = false
        gameStarted = false
        console.log(gameStarted)
    }
    messageEl.textContent = message
    playerEl.textContent = player.player1Name + player.player1Chips
   
   
}


function newCard() {
    if (playerIsAlive === true && hasBlackJack === false && gameStarted === true) {
        let card = getRandomCard()
        playerSum += card
        playerCards.push(card)
        renderGame()      
    }
    
}

function stand() {
    console.log(gameStarted)
    if(gameStarted === true) {
        
       dealerSecondCard = getRandomCard()
        dealerCardsEl.textContent += " " + dealerSecondCard
        dealerSum = dealerFirstCard + dealerSecondCard
        console.log("delear sum" +dealerSum)
        if(playerSum >= dealerSum) {
            console.log("player sum" + playerSum)
            player.player1Chips += 50
            message = "You won!"
            gameStarted = false
        } else {
            player.player1Chips -= 50
            message = "You lost!"
            gameStarted = false
        } 
    } else {
        return
    }
        
    messageEl.textContent = message
    playerEl.textContent = player.player1Name + player.player1Chips
        
        
}


