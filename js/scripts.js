// biz logic
var turnTotal = 0;
var rollTotal = 0;


// user logic
$(document).ready(function(){
  $(".roll").click(function(event){
    event.preventDefault();
    rollTotal = Math.floor(Math.random() * 6) + 1;
    if (rollTotal > 1) {
      turnTotal += rollTotal;
    } else {
      turnTotal = 0;
    }
    console.log(turnTotal)
  });
});
