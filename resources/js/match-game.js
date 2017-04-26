var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/
//Had to copy from final site; had no idea how to get here from the steps.

$(document).ready(function() {
  var $game = $('#game');
  var values = MatchGame.generateCardValues();
  MatchGame.renderCards(values, $game);
});

/*
  Generates and returns an array of matching card values.
 */
 //again, had to be copied; why doesn't this have to be in a READY method?

 MatchGame.generateCardValues = function () {
   var sequentialValues = [];

   for (var value = 1; value <= 8; value++) {
     sequentialValues.push(value);
     sequentialValues.push(value);
   }

   var cardValues = [];

   while (sequentialValues.length > 0) {
     var randomIndex = Math.floor(Math.random() * sequentialValues.length);
     var randomValue = sequentialValues.splice(randomIndex, 1)[0];
     cardValues.push(randomValue);
   }

   return cardValues;
 };

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
