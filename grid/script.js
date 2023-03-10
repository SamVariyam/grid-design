let body = document.body;

const audio = new Audio("idukki.mp3")
const buttons = document.querySelectorAll ("button");

buttons.forEach(button => 
    button.addEventListener("click", () => ){
        audio.play();
    });
