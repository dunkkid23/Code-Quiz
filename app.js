var startButton = document.querySelector("#startBtn");
var questions = document.querySelectorAll(".question");
var questionText = document.querySelector(".qText");
var correctChoice = document.querySelectorAll(".yes");
var wrongChoice = document.querySelectorAll(".no");

var qNumbers = ["questionOne", "questionTwo", "questionThree", "questionFour", "questionFive"];

startButton.addEventListener("click", function(){
    document.querySelector("#begin").classList.add("hide");
    document.querySelector("#questionOne").classList.remove("hide");
});



var scoreCorrect = 0;
var scoreIncorrect = 0;

questions.forEach(function(questions){
    questions.addEventListener("click", function(){
        if(this.classList.contains("no")) {
            this.style.background = "red";
            questionText.innerHTML = "Incorrect!";
        } else if(this.classList.contains("yes")){
            this.style.background = "green";
            questionText.innerHTML = "Correct!";
        }
    })
})




document.getElementById("correct1").addEventListener("click", function(){
    setTimeout(function(){
    document.getElementById("questionOne").classList.add("hide");
    document.getElementById("questionTwo").classList.remove("hide");
}, 300); scoreCorrect++;
});
document.getElementById("correct2").addEventListener("click", function(){
    setTimeout(function(){
    document.getElementById("questionTwo").classList.add("hide");
    document.getElementById("questionThree").classList.remove("hide");
}, 300); scoreCorrect++;
});
document.getElementById("correct3").addEventListener("click", function(){
    setTimeout(function(){
    document.getElementById("questionThree").classList.add("hide");
    document.getElementById("questionFour").classList.remove("hide");
}, 300); scoreCorrect++;
});
document.getElementById("correct4").addEventListener("click", function(){
    setTimeout(function(){
    document.getElementById("questionFour").classList.add("hide");
    document.getElementById("questionFive").classList.remove("hide");
}, 300); scoreCorrect++;
})
document.getElementById("correct5").addEventListener("click", function(){
    setTimeout(function(){
    document.getElementById("questionFive").classList.add("hide");
    document.getElementById("resultScreen").classList.remove("hide");
}, 300); scoreCorrect++;
correctNum.innerHTML = "<p>" + scoreCorrect + "</p>";
incorrectNum.innerHTML = "<p>" + scoreIncorrect + "</p>";
});


var no1 = document.querySelectorAll(".no1");
var no2 = document.querySelectorAll(".no2");
var no3 = document.querySelectorAll(".no3");
var no4 = document.querySelectorAll(".no4");
var no5 = document.querySelectorAll(".no5");
var correctNum = document.querySelector("#correctNum");
var incorrectNum = document.querySelector("#incorrectNum");

no1.forEach(function(no1){
    no1.addEventListener("click", function(){
        setTimeout(function(){
        document.getElementById("questionOne").classList.add("hide");
        document.getElementById("questionTwo").classList.remove("hide");
    }, 300); scoreIncorrect++;
})});

no2.forEach(function(no2){
    no2.addEventListener("click", function(){
        setTimeout(function(){
        document.getElementById("questionTwo").classList.add("hide");
        document.getElementById("questionThree").classList.remove("hide");
    }, 300); scoreIncorrect++;
})});

no3.forEach(function(no3){
    no3.addEventListener("click", function(){
        setTimeout(function(){
        document.getElementById("questionThree").classList.add("hide");
        document.getElementById("questionFour").classList.remove("hide");
    }, 300); scoreIncorrect++;
})});

no4.forEach(function(no4){
    no4.addEventListener("click", function(){
        setTimeout(function(){
        document.getElementById("questionFour").classList.add("hide");
        document.getElementById("questionFive").classList.remove("hide");
    }, 300); scoreIncorrect++;
})});

no5.forEach(function(no5){
    no5.addEventListener("click", function(){
        setTimeout(function(){
        document.getElementById("questionFive").classList.add("hide");
        document.getElementById("resultScreen").classList.remove("hide");
    }, 300); scoreIncorrect++;
    correctNum.innerHTML = "<p>" + scoreCorrect + "</p>";
    incorrectNum.innerHTML = "<p>" + scoreIncorrect + "</p>";
})});

