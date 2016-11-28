console.log("JS file is connected to HTML! Woo!")
/*var cardOne = "queen";
var cardTwo = "king";
var cardThree = "king";
var cardFour = "queen";*/
var gameBoard = document.getElementById('game-board');
var now;
var createCards = function(now){
  for (var x = 0; x < cards.length; x += 1){
    var newCard = document.createElement('div');
    newCard.className = 'card';
    document.getElementById('game-board').appendChild(newCard);
    gameBoard.setAttribute('data-card', cards[i]);
    }
    console.log("woo!");
  }
var cards = ['queen', 'king', 'queen', 'king'];
var cardsInPlay = [];
for (var i = 0; i < cards.length; i++) {
    gameBoard.addEventListener('click', isTwoCards);
    gameBoard.addEventListener('click', showImg)
}
function showImg() {
  gameBoard.innerHTML = '<img src="king.jpg" alt="King of Spades" />';
}
function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];

  }
}
var isMatch = function(){
  if (cardsInPlay[0]==cardsInPlay[1]) {
    alert("You found a match!")
  }
  else {
    alert("Sorry, try again.")
  }
}
