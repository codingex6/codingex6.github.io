var randomnumber=Math.floor(Math.random()*4)+1;

var n = document.querySelectorAll(".drum").length;
for (var i = 0; i < n; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttoninnerHTML = this.innerHTML
    makesound(buttoninnerHTML);
    animation(buttoninnerHTML);
  });
}



//for keyboard
document.addEventListener("keypress", function(event) {
  makesound(event.key);
  animation(event.key);
});




function makesound(key) {
  switch (key) {
    case "a":
      var audio = new Audio("tom-1.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("tom-2.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("tom-3.mp3");
      audio.play();
      break;
    case "f":
      var audio = new Audio("tom-4.mp3");
      audio.play();
      break;
    case "g":
      var audio = new Audio("snare.mp3");
      audio.play();
      break;
    case "h":
      var audio = new Audio("crash.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("kick-bass.mp3");
      audio.play();
      break;
    default:
  }


}
function animation(keypress)
{
var asd=document.querySelectorAll("." + keypress);
asd.classList.add("pressed");


}
