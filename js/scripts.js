$(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();

    if (question1 === "filler1" && question2 === "filler1") {
      $(".funky").hide();
      $("#answer1").show();
    }
  });
});
