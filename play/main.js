$(document).ready(function(){
  $("#show").on("click", function(){
    $("#textBox").show(500);
  });

  $("#hide").on("click", function(){
    $("#textBox").hide(500);
  });
});