// var startButton = document.querySelector("#startBtn");
// var questions = document.querySelectorAll(".question");
// var questionText = document.querySelector(".qText");
// var correctChoice = document.querySelectorAll(".yes");
// var wrongChoice = document.querySelectorAll(".no");
// var timeleft = 60;

// var qNumbers = ["questionOne", "questionTwo", "questionThree", "questionFour", "questionFive"];

// startButton.addEventListener("click", function () {
//     var downloadTimer = setInterval(function () {
//         if (timeleft <= 0) {
//             clearInterval(downloadTimer);
//             document.getElementById("countdown").innerHTML = "";
//             for (var i = 0; i < qNumbers.length; i++) {
//                 document.getElementById(qNumbers[i]).classList.add("hide");
//                 document.getElementById("resultScreen").classList.remove("hide");
//             }
//         } else {
//             document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
//         }
//         timeleft -= 1;
//     }, 1000);
//     document.querySelector("#begin").classList.add("hide");
//     document.querySelector("#questionOne").classList.remove("hide");
// });



// var scoreCorrect = 0;
// var scoreIncorrect = 0;

// questions.forEach(function (questions) {
//     questions.addEventListener("click", function () {
//         if (this.classList.contains("no")) {
//             this.style.background = "red";
//             questionText.innerHTML = "Incorrect: -10 seconds!";
//             timeleft -= 10;
//         } else if (this.classList.contains("yes")) {
//             this.style.background = "green";
//             questionText.innerHTML = "Correct: great job!";
//         }
//     });
// });

// document.getElementById("correct1").addEventListener("click", function () {
//     setTimeout(function () {
//         document.getElementById("questionOne").classList.add("hide");
//         document.getElementById("questionTwo").classList.remove("hide");
//     }, 300);
//     scoreCorrect++;
// });
// document.getElementById("correct2").addEventListener("click", function () {
//     setTimeout(function () {
//         document.getElementById("questionTwo").classList.add("hide");
//         document.getElementById("questionThree").classList.remove("hide");
//     }, 300);
//     scoreCorrect++;
// });
// document.getElementById("correct3").addEventListener("click", function () {
//     setTimeout(function () {
//         document.getElementById("questionThree").classList.add("hide");
//         document.getElementById("questionFour").classList.remove("hide");
//     }, 300);
//     scoreCorrect++;
// });
// document.getElementById("correct4").addEventListener("click", function () {
//     setTimeout(function () {
//         document.getElementById("questionFour").classList.add("hide");
//         document.getElementById("questionFive").classList.remove("hide");
//     }, 300);
//     scoreCorrect++;
// })
// document.getElementById("correct5").addEventListener("click", function () {
//     setTimeout(function () {
//         document.getElementById("questionFive").classList.add("hide");
//         document.getElementById("resultScreen").classList.remove("hide");
//     }, 300);
//     scoreCorrect++;
// });


// var no1 = document.querySelectorAll(".no1");
// var no2 = document.querySelectorAll(".no2");
// var no3 = document.querySelectorAll(".no3");
// var no4 = document.querySelectorAll(".no4");
// var no5 = document.querySelectorAll(".no5");
// var correctNum = document.querySelector("#correctNum");
// var incorrectNum = document.querySelector("#incorrectNum");

// no1.forEach(function (no1) {
//     no1.addEventListener("click", function () {
//         setTimeout(function () {
//             document.getElementById("questionOne").classList.add("hide");
//             document.getElementById("questionTwo").classList.remove("hide");
//         }, 300);
//         scoreIncorrect++;
//     })
// });

// no2.forEach(function (no2) {
//     no2.addEventListener("click", function () {
//         setTimeout(function () {
//             document.getElementById("questionTwo").classList.add("hide");
//             document.getElementById("questionThree").classList.remove("hide");
//         }, 300);
//         scoreIncorrect++;
//     })
// });

// no3.forEach(function (no3) {
//     no3.addEventListener("click", function () {
//         setTimeout(function () {
//             document.getElementById("questionThree").classList.add("hide");
//             document.getElementById("questionFour").classList.remove("hide");
//         }, 300);
//         scoreIncorrect++;
//     })
// });

// no4.forEach(function (no4) {
//     no4.addEventListener("click", function () {
//         setTimeout(function () {
//             document.getElementById("questionFour").classList.add("hide");
//             document.getElementById("questionFive").classList.remove("hide");
//         }, 300);
//         scoreIncorrect++;
//     })
// });

// no5.forEach(function (no5) {
//     no5.addEventListener("click", function () {
//         setTimeout(function () {
//             document.getElementById("questionFive").classList.add("hide");
//             document.getElementById("resultScreen").classList.remove("hide");
//             clearInterval(downloadTimer);
//             document.getElementById("countdown").innerHTML = "";
//         }, 300);
//         scoreIncorrect++;
//     });
// });




// document.getElementById("initialSubmit").addEventListener("click", function () {
//     var initialsDisplay = document.getElementById("initialDiv");
//     var initials = document.getElementById("initialText").value;
//     var totalScore = (scoreCorrect * 25) - (scoreIncorrect * 15);
//     localStorage.setItem("initials", initials);
//     initialsDisplay.textContent = localStorage.getItem("initials");
//     document.getElementById("totalScoreDiv").textContent = totalScore;
//     document.getElementById("highScores").classList.remove("hide");
// });

// var person = prompt("Please enter your initials!");
// localStorage.setItem("person", person);
// document.getElementById("test").innerHTML = localStorage.getItem("person");



// SO instead of this messy fucking code, I should be using an array for the questions
// with a section under each question for the actual question, the answers, and the correct answer
// have the HTML populate from the JS questions array

var quizQuestions = [{
    question: "What does DOM stand for?",
    answers: ["Dainty Object Model", "Document Object Model", "Designer Oblong Mask", "Document Opioid Model"],
    correctAnswer: "Document Object Model"
}, {
    question: "What form is the result of querySelectorAll?",
    answers: ["String", "Boolean", "Number", "Array"],
    correctAnswer: "Array"
}, {
    question: "Where in an HTML document do you link an external style sheet?",
    answers: ["Footer", "Body", "Head", "Garbage"],
    correctAnswer: "Head"
}, {
    question: "What is the name of the framework containing CSS & JavaScript-based design templates?",
    answers: ["Bootstrap", "JQuery", "Node", "Altavista"],
    correctAnswer: "Bootstrap"
}, {
    question: "What does HTML stand for?",
    answers: ["Hyperthread Makeup License", "Human-Tested Mineral Lovers", "Hypertext Markup Language", "Handsy Trucker Milks Ladies"],
    correctAnswer: "Hypertext Markup Language"
}];

$("#startBtn").click(function () {
    $("#begin").addClass("hide");
    $("#questionDiv").removeClass("hide");
    populateQuiz();
});

currentQ = 0;

function populateQuiz(){
        $("#questionField").text(quizQuestions[currentQ].question); 
        $("#a").text(quizQuestions[currentQ].answers[0]);
        $("#b").text(quizQuestions[currentQ].answers[1]);
        $("#c").text(quizQuestions[currentQ].answers[2]);
        $("#d").text(quizQuestions[currentQ].answers[3]);
        currentQ++;
}

$(".answer").click(function(){
    if($(".answer").contains("quizQuestions[currentQ].correctAnswer")){
        alert("Correct!");
    } else {alert("Incorrect!");}
    populateQuiz();
})