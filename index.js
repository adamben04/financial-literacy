let button = document.querySelector("button");
button.addEventListener("click", playAudio);

function playAudio(event){
    var audio = new Audio("audio/mixkit-coins-sound-2003.mp3");
    console.log(audio);
    audio.play();
};