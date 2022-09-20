
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message") 
let sumEl = document.getElementById("sum")
let cardsEl = document.getElementById("cards")
let player = 
{
    name : "Pavan",
    chips : 150
}
let playerEl = document.getElementById("player")
playerEl.textContent = player.name + " : $" + player.chips
   
function startGame()
{
    isAlive = true
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    cards = [firstcard, secondcard]
    sum = firstcard + secondcard
    renderGame()
}

  
function renderGame()
{
    
    cardsEl.textContent = "Cards : "
    for (let i = 0; i < cards.length; i++)
    {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum : " + sum 
    if (sum < 21 )
    {
    message = "Do you want to draw a new card?"
    }
    else if (sum == 21)
    {
        message = "You've got Blackjack!"
        hasBlackjack = true
    }
    else
    {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message

}


 function newCard()
{
    if (isAlive == true)
    {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    else
    {
        message = "You're not in the game!"
        messageEl.textContent = message
    }

}

function getRandomCard()
{ 
    let random_number = Math.floor(Math.random()*13) + 1
    return random_number
}