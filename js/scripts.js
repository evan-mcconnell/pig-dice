// biz logic
var score1 = 0;
var score2 = 0;
var turn = 0;
var turnTotal1 = 0;
var rollTotal1 = 0;
var turnTotal2 = 0;
var rollTotal2 = 0;

var rollTurn = function (roll) {
  roll = Math.floor(Math.random() * 6) + 1;
  if (roll > 1) {
    turn += roll;
  } else {
    turn = 0;
  };
  return turn;
};

// user logic
$(document).ready(function(){
  $(".roll1").click(function(event){
    event.preventDefault();
    turnTotal1 = rollTurn(rollTotal1);
    $("#turnScore1").text(turnTotal1);
  });

  $(".hold1").click( function(event) {
    event.preventDefault();
    score1 =+ turnTotal1
    $("#scoreOne").text(score1);
    rollTotal1 = 0;
    rollTotal2 = 0;
    turnTotal1 = 0;
    turnTotal2 = 0;
  })
});
