
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = ""
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function getRandomCard() {
    let ranNum = Math.floor(Math.random() * 12);
    if (ranNum === 0) {
        return ranNum + 1
    } else {
        return ranNum
    }
}

function startGame() {
    renderGame()
}

function renderGame() {
    gameStarted = true;
    if(gameStarted) {
        document.getElementById("startButton").style.visibility = "hidden";
    }
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = ("Do you want to draw a new card?");
    } else if (sum === 21) {
        message = ("BlackJack! You win!");
        hasBlackJack = true;
        setTimeout(() => { reset();}, 1500);
        isAlive = false
        if(isAlive === false) {
            document.getElementById("newCard").style.visibility = "hidden";
        }
    } else {
        message = ("You lose.");
        isAlive = false;
        if(isAlive === false) {
            document.getElementById("newCard").style.visibility = "hidden";
        }
        setTimeout(() => { reset();}, 1500);
    }
    messageEl.textContent = message

}

function newCard() {
    console.log("Drawing a new card.");
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    bet()

}

function reset() {
    location.reload()
}
