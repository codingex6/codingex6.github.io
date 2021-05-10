var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",a)
}
function a() {
var a=this.innerHTML
switch (a) {
  case "a":
        var audio = new Audio("tom-1.mp3");
        audio.play();
   break;
   case "a":
         var audio = new Audio("tom-2.mp3");
         audio.play();
    break;
    case "o":
          var audio = new Audio("tom-3.mp3");
          audio.play();
     break;
     case "b":
           var audio = new Audio("tom-4.mp3");
           audio.play();
      break;
      case "j":
            var audio = new Audio("snare.mp3");
            audio.play();
       break;
       case "a":
             var audio = new Audio("crash.mp3");
             audio.play();
        break;
        case "o":
              var audio = new Audio("kick-bass.mp3");
              audio.play();
         break;
  default:

}
}
