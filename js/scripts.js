var add = function (num1, num2, num3, num4) {
  return num1 + num2 + num3 + num4;
};


$(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var userInput = add(questions1, questions2, questions3);
    var questions1 = parseInt($("input:radio[name=questions1]:checked").val());
    var questions2 = parseInt($("input:radio[name=questions2]:checked").val());
    var questions2 = parseInt($("input:radio[name=questions2]:checked").val());

    if (userInput <= 5) {
      $(".answer").hide();
      $("#css").show();
    }
    else if (userInput === 7 || userInput <= 11) {
      $(".answer").hide();
      $("#csharp").show();

    }
    else if (userInput === 3 || userInput <= 9) {
      $(".answer").hide();
      $("#php").show();

    }
    else {
      $(".answer").hide();
      $("#java").show();

    }
  });
});
// var questions1 = $("input:radio[name=questions1]:checked").val();
// var questions2 = $("input:radio[name=questions2]:checked").val();
// var questions2 = $("input:radio[name=questions2]:checked").val();
//
// if (questions1 === "filler1" && questions2 === "filler1") {
//   $(".answer").hide();
//   $("#css").show();
// }
// else if (questions1 === "filler1" && questions2 === "filler2") {
//   $(".answer").hide();
//   $("#csharp").show();
// }
// else if (questions1 === "filler1" && questions2 === "filler3") {
//   $(".answer").hide();
//   $("#php").show();
// }
// else if (questions1 === "filler1" && questions2 === "filler4") {
//   $(".answer").hide();
//   $("#java").show();
