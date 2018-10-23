// biz logic

// var score1 = 0;
// var score2 = 0;
// var turn = 0;
// var turnTotal1 = 0;
// var rollTotal1 = 0;
// var turnTotal2 = 0;
// var rollTotal2 = 0;

// var rollTurn = function(roll) {
//roll = Math.floor(Math.random() * 6) + 1;
//   if (roll > 1) {
//     turn += roll;
//   } else {
//     turn = 0;
//   };
//   alert(roll);
//   return turn;
// };

function Players(roll, turn, score) {
  this.roll = roll;
  this.turn = turn;
  this.score = score;
}

Players.prototype.rollDice = function() {
  this.roll = Math.floor(Math.random() * 6) + 1;
}

Players.prototype.turnScore = function() {
  if (this.roll > 1) {
    this.turn += this.roll;
  } else {
    this.turn = 0;
  };
  alert(this.roll);
  return this.turn;
};

Players.prototype.hold = function() {
  this.score += this.turn;
  return this.score;
};

// var computerTurn = function() {
//   for (var i = 0; i < 3; i++) {
//     roll = Math.floor(Math.random() * 6) + 1;
//     turn += roll;
//     return turn;
//     console.log(turn);
//   };
// };

// user logic
// Player 1 Rolling
$(document).ready(function() {

  var player1 = new Players (0,0,0);

  $(".roll1").click(function(event) {
    event.preventDefault();
    player1.rollDice();
    player1.turnScore();
    console.log(player1.turn);
    // turnTotal1 = rollTurn(rollTotal1);
    $("#turnScore1").text(player1.turn);
  });

  $(".hold1").click(function(event) {
    event.preventDefault();
    player1.hold();
    player1.turn = 0;
    $("#turnScore1").text(player1.turn);
    $("#scoreOne").text(player1.score);
    // turn = 0;
    // score1 += turnTotal1
    // $("#scoreOne").text(score1);
    // rollTotal1 = 0;
    // turnTotal1 = 0;
    // $("#turnScore1").text(turnTotal1);
  });

  // //Player 2 Rolling (Computer)
  // $(".roll2").click(function(event) {
  //   for (var i = 0; i < 3; i++) {
  //     roll = Math.floor(Math.random() * 6) + 1;
  //     turn += roll;
  //     return turn;
  //     console.log(turn);
  //   };
  //   // return computerTurn();
    // console.log(rollTotal2);
  // });
});
