var startButton = document.querySelector("#startBtn");
var correctChoice = document.querySelector(".yes");
var incorrectChoice = document.querySelectorAll(".no");
var questions = document.querySelectorAll(".question");
var questionText = document.querySelector(".qText");

startButton.addEventListener("click", function(){
    document.querySelector("#begin").classList.add("hide");
    document.querySelector("#questionOne").classList.remove("hide");
});

correctChoice.addEventListener("click", function(){
    correctChoice.style.background="green";
    questionText.innerHTML="Correct!";
    setTimeout(function(){
        document.querySelector("#questionOne").classList.add("hide");
        document.querySelector("#questionTwo").classList.remove("hide");
    }, 2000);
    return;
});

