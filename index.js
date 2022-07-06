var drumSounds = document.querySelectorAll(".drum");


//detecting button press
for (i = 0; i < drumSounds.length; i++) {
  drumSounds[i].addEventListener("click", function() {
    var letter = this.innerHTML;
    readKey(letter);
    buttonAnimation(letter);
  });
}

//detecting keyboard input
document.addEventListener("keydown", function(event) {
  readKey(event.key);
  buttonAnimation(event.key);
});

//Playing audio
function readKey(input) {
  switch (input) {
    case "w":
      var letterTom1 = new Audio('sounds/tom-1.mp3');
      letterTom1.play();
      break;

    case "a":
      var letterTom2 = new Audio('sounds/tom-2.mp3');
      letterTom2.play();
      break;

    case "s":
      var letterTom3 = new Audio('sounds/tom-3.mp3');
      letterTom3.play();
      break;

    case "d":
      var letterTom4 = new Audio('sounds/tom-4.mp3');
      letterTom4.play();
      break;

    case "j":
      var letterSnare = new Audio('sounds/snare.mp3');
      letterSnare.play();
      break;

    case "k":
      var letterCrash = new Audio('sounds/crash.mp3');
      letterCrash.play();
      break;

    case "l":
      var letterKickBass = new Audio('sounds/kick-bass.mp3');
      letterKickBass.play();
      break;
  }
}

function buttonAnimation(buttonClick) {
  var button = document.querySelector("." + buttonClick);
  button.classList.add("pressed");

  setTimeout(function(){
    button.classList.remove("pressed");
  }, 100);
}

//ALTERNATIVE SOLUTION
// if(i === 0){
//   drumSounds[i].addEventListener("click", function (){
//     //Play this audio
//     var tom1 = new Audio('sounds/tom-1.mp3');
//     tom1.play();
//
//     //change the color of the text using getElementsByClassName
//     // var wColor = document.getElementsByClassName("w");
//     // wColor[0].style.color = "white";
//
//
//     //change the color of the text using this
//     //this.style.color = "white";
//   });
// }
//
// else if(i === 1){
//   drumSounds[i].addEventListener("click", function (){
//     var tom1 = new Audio('sounds/tom-2.mp3');
//     tom1.play();
//   });
//
//
// }
//
// else if(i === 2){
//   drumSounds[i].addEventListener("click", function (){
//     var tom1 = new Audio('sounds/tom-3.mp3');
//     tom1.play();
//   });
// }
//
// else if(i === 3){
//   drumSounds[i].addEventListener("click", function (){
//     var tom1 = new Audio('sounds/tom-4.mp3');
//     tom1.play();
//   });
// }
//
// else if(i === 4){
//   drumSounds[i].addEventListener("click", function (){
//     var tom1 = new Audio('sounds/snare.mp3');
//     tom1.play();
//   });
// }
//
// else if(i === 5){
//   drumSounds[i].addEventListener("click", function (){
//     var tom1 = new Audio('sounds/crash.mp3');
//     tom1.play();
//   });
// }
//
// else if(i === 6){
//   drumSounds[i].addEventListener("click", function (){
//     var tom1 = new Audio('sounds/kick-bass.mp3');
//     tom1.play();
//   });
// }
