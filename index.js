let hasBlackJack = false;
let isAlive = false;
let msg = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("cards-el");

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function getRandomCard() {
    let card = Math.floor(Math.random() * 13) + 1;
    if (card >= 10) {
        return 10;
    } else if (card === 1) {
        return 11;
    } else {
        return card;
    }
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }
    if (sum <= 20) {
        msg = "Do you want to draw a new card?"
    } else if (sum === 21) {
        hasBlackJack = true
        msg = "Woohoo! You've got Blackjack!"
    } else {
        isAlive = false
        msg = "You're out of the game!"
    }
    messageEl.textContent = msg;
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let newCard = getRandomCard();
        cards.push(newCard);
        sum += newCard;
        renderGame();
    }
}
