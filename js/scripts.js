$(document).ready(function(){
  $("#faveThings").submit(function(event){
    var blanks = ["color", "food", "pet", "place", "car"];
    var result = [];

    blanks.forEach(function(blank){
    var userInput = $("input#" + blank).val();
    result.push(userInput);
    });
    $("#output").append(result);

    var blanks2 = ["color", "food", "pet", "place", "car"];
    var result2 = [];

    blanks2.forEach(function(blank2){
    var userInput2 = $("input#" + blank2).val();
    result2.push(userInput2);
    });

  $("#output2").append(result2[1]);
  $("#output2").append(result2[0]);
  $("#output2").append(result2[2]);

  $("#li1").text(result2[1]);
  $("#li2").text(result2[0]);
  $("#li3").text(result2[2]);

  event.preventDefault();
  });
});
