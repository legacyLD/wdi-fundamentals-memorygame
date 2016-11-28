console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "king";
var cardThree = "king";
var cardFour = "queen";
/*if (cardOne==cardFour) {
  alert("You found a match!")
}
else {
  alert("Sorry, try again.")
}*/
var gameBoard = document.getElementById('game-board');
var now;
var createCards = function(now){
  for (var x = 0; x < 4; x += 1){
    var newCard = document.createElement('div');
    newCard.className = 'card';
    document.getElementById('game-board').appendChild(newCard);
    console.log("woo");
  }
}
