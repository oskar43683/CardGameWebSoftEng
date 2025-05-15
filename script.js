let points = 1000;
let bet = 0;
let playerHand = [];
let dealerHand = [];
let gameActive = false;

function drawCardValue() {
    return Math.floor(Math.random() * 10) + 1; // card value between 1 and 10
}

function getCardHTML(value) {
    return `
    <div class="card">
      <img src="CardImages/monster${value}.png" alt="Card ${value}">
      <div class="card-number">${value}</div>
    </div>
  `;
}

function updateUI() {
    document.getElementById('points').textContent = points;
    document.getElementById('playerCards').innerHTML = playerHand.map(getCardHTML).join('');
    document.getElementById('dealerCards').innerHTML = dealerHand.map(getCardHTML).join('');
    document.getElementById('playerTotal').textContent = playerHand.reduce((a, b) => a + b, 0);
    document.getElementById('dealerTotal').textContent = dealerHand.reduce((a, b) => a + b, 0);
}

function startRound() {
    bet = parseInt(document.getElementById('betAmount').value);
    if (isNaN(bet) || bet <= 0 || bet > points) {
        alert('Invalid bet amount!');
        return;
    }

    playerHand = [drawCardValue(), drawCardValue()];
    dealerHand = [drawCardValue()];
    gameActive = true;
    document.getElementById('drawBtn').disabled = false;
    document.getElementById('standBtn').disabled = false;
    document.getElementById('message').textContent = '';
    updateUI();
}

function drawCard() {
    if (!gameActive) return;
    playerHand.push(drawCardValue());
    updateUI();
    if (playerHand.reduce((a, b) => a + b, 0) > 21) {
        endGame("You busted!");
    }
}

function stand() {
    if (!gameActive) return;
    while (dealerHand.reduce((a, b) => a + b, 0) < 17) {
        dealerHand.push(drawCardValue());
    }
    updateUI();

    const playerTotal = playerHand.reduce((a, b) => a + b, 0);
    const dealerTotal = dealerHand.reduce((a, b) => a + b, 0);

    if (dealerTotal > 21 || playerTotal > dealerTotal) {
        endGame("You win!", true);
    } else if (playerTotal === dealerTotal) {
        endGame("It's a draw!");
    } else {
        endGame("Dealer wins!");
    }
}

function endGame(message, win = false) {
    gameActive = false;
    if (win) {
        points += bet;
    } else if (message !== "It's a draw!") {
        points -= bet;
    }
    document.getElementById('drawBtn').disabled = true;
    document.getElementById('standBtn').disabled = true;
    document.getElementById('message').textContent = message;
    updateUI();
}
