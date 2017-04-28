$(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var questions1 = $("input:radio[name=questions1]:checked").val();
    var questions2 = $("input:radio[name=questions2]:checked").val();

    if (questions1 === "filler1" && questions2 === "filler1") {
      $(".answer").hide();
      $("#css").show();
    }
    else if (questions1 === "filler1" && questions2 === "filler2") {
      $(".answer").hide();
      $("#csharp").show();
    }
    else if (questions1 === "filler1" && questions2 === "filler3") {
      $(".answer").hide();
      $("#php").show();
    }
    else if (questions1 === "filler1" && questions2 === "filler4") {
      $(".answer").hide();
      $("#java").show();
    }
  });
});
