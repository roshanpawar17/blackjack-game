
// console.log(name)
let cards = []
let sum = 0
let price = 0
let hasBlackJack = false
let isLive = true
let meassage = ""
let player = {
    name: '',
    price: ''
}
let pname 
let promptVal = true

let message = document.getElementById('message')
let cardsEl = document.getElementById('cards')
let sumEl = document.getElementById('sum')
let playerName = document.getElementById('player-name')
let priceEl= document.getElementById('price')
let refreshBtn= document.getElementById('refresh-btn')

function getRandomCard() {
    // if 1 --> return 11 -- for Ace card
    // if 11-13 --> return 10 -- for Jack , king and queen cards

    let randomNum = Math.floor(Math.random() * 13) + 1
    if (randomNum === 1) {
        return 11
    } else if (randomNum > 10) {
        return 10
    } else {
        return randomNum
    }

}

function startGame() {
    // if(promptVal){
    //     pname = prompt("Enter name")
        
    //         if(pname === null){
    //             // while(pname === null){
    //             // alert("please enter name")
    //             // }
    //         }else{
    //             player.name = pname            
    //             promptVal = false
    //         }

        
    // }

        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        refreshBtn.style.display = "block"
        renderGame()
   

}

function renderGame() {
    // console.log(sum)
    hasBlackJack = false
    isLive = true
    sumEl.textContent = `Sum: ${sum}`
    cardsEl.textContent = `Cards: `
    // playerName.textContent = `Player : ${player.name}`
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    if (sum < 21) {
        message.textContent = "Do you want to draw a new card?"
        message.style.color = "orange"
    } else if (sum === 21) {
        message.textContent = "You are got Blackjack!"
        message.style.color = "green"
        price+=200
        priceEl.textContent = `You won ${price} 🎉`
        hasBlackJack = true
    } else {
        message.textContent = "You are out of the game!"
        message.style.color = "red"
        isLive = false
    }
}

function newCards() {
    if (isLive === true && hasBlackJack === false) {
        let card = getRandomCard()
        cards.push(card)
        sum = sum + card
        renderGame()
    }
}

function refresh(){
    window.location.reload()
    promptVal = true
}