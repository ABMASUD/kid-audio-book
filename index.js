
$("h1").click(function(){
$("h1").css("color", "#FF3F00");
}
);

$("body").keypress(function(event){
  $("h1").text(event.key);
});
//
// var pressedkey = $("body").addEventlistener("keypress",function(){
//   console.log(this);
// });
// if (h1 === a) {
//   var letter1 = new Audio("audio/a.mp3");
//   letter1.play();
// }
// else {
//   alert("try another");
// }
