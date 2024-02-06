const deck = [
  "♠",
  "❤",
  "♦",
  "☘",

  "♠",
  "❤",
  "♦",
  "☘",

  "♠",
  "❤",
  "♦",
  "☘",

  "♠",
  "❤",
  "♦",
  "☘",
];

//Fisher-Yates Algorithm
function shuffleDeck() {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], (deck[j] = deck[j]), deck[i]];
  }
}

function dealCards(numCard) {
  const dealCards = deck.splice(0, numCard);
  return dealCards;
}

shuffleDeck();

const player1hand = dealCards(3);
const player2hand = dealCards(3);
const player3hand = dealCards(3);

console.log("Player 1 hand: ", player1hand);
console.log("Player 2 hand: ", player2hand);
console.log("Player 3 hand: ", player3hand);
