
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);}
function handleClick(){
  var play=this.innerHTML;
  sound(play);
  btnanim(play);
}

document.addEventListener("keydown",function(event)
{sound(event.key);
btnanim(event.key);});


function btnanim(play) {
  var action=document.querySelector("."+play);
  action.classList.add("pressed");
  setTimeout(function() {
    action.classList.remove("pressed");

  },100);
}





function sound(play){
    switch (play) {
    case "w":
      var audio1=new Audio("sounds/tom-1.mp3");
      audio1.play();
      break;
      case 'a':
        var audio2=new Audio("sounds/tom-2.mp3");
        audio2.play();
        break;
      case 's':
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
        case 'd':
          var audio=new Audio("sounds/tom-4.mp3");
          audio.play();
          break;
          case 'j':
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
            case 'k':
              var audio=new Audio("sounds/kick-bass.mp3");
              audio.play();
              break;
              case 'l':
                var audio=new Audio("sounds/snare.mp3");
                audio.play();
                break;

    default:
      console.log();

  }
}
