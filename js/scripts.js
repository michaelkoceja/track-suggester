var add = function (questionInput1, questionInput2, questionInput3) {
  return questionInput1 + questionInput2 + questionInput3;
};


$(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var questionInput1 = parseInt($("input:radio[name=question1]:checked").val());
    var questionInput2 = parseInt($("input:radio[name=question2]:checked").val());
    var questionInput3 = parseInt($("input:radio[name=question3]:checked").val());
    var userInput = add(questionInput1, questionInput2, questionInput3);

    if (userInput <= 5) {
      $(".answer").hide();
      $("#css").show();
    } else if (userInput >= 6 && userInput <= 8) {
      $(".answer").hide();
      $("#csharp").show();
    } else if (userInput = 4 && userInput >=9) {
      $(".answer").hide();
      $("#php").show();
    } else if (userInput >= 10) {
      $(".answer").hide();
      $("#java").show();
    }
  });
});
// var question1 = $("input:radio[name=question1]:checked").val();
// var question2 = $("input:radio[name=question2]:checked").val();
// var question3 = $("input:radio[name=question3]:checked").val();
//
// if (question1 === "filler1" && question2 === "filler1") {
//   $(".answer").hide();
//   $("#css").show();
// }
// else if (question1 === "filler1" && question2 === "filler2") {
//   $(".answer").hide();
//   $("#csharp").show();
// }
// else if (question1 === "filler1" && question2 === "filler3") {
//   $(".answer").hide();
//   $("#php").show();
// }
// else if (question1 === "filler1" && question2 === "filler4") {
//   $(".answer").hide();
//   $("#java").show();
