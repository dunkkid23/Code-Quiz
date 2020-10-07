var scoreCorrect = 0;
var scoreIncorrect = 0;
var currentQ = 0;



// var downloadTimer = setInterval(function () {
//     if (timeleft <= 0) {
//         clearInterval(downloadTimer);
//         document.getElementById("countdown").innerHTML = "";
//         for (var i = 0; i < qNumbers.length; i++) {
//             document.getElementById(qNumbers[i]).classList.add("hide");
//             document.getElementById("resultScreen").classList.remove("hide");
//         }
//     } else {
//         document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
//     }
//     timeleft -= 1;
// }, 1000);



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

function populateQuiz() {
    if (currentQ < quizQuestions.length) {
        $("#questionField").text(quizQuestions[currentQ].question);
        $("#a").text(quizQuestions[currentQ].answers[0]);
        $("#b").text(quizQuestions[currentQ].answers[1]);
        $("#c").text(quizQuestions[currentQ].answers[2]);
        $("#d").text(quizQuestions[currentQ].answers[3]);
    } else if (currentQ >= quizQuestions.length) {
        $("#questionDiv").addClass("hide");
        $("#resultScreen").removeClass("hide");
    }
}

$(".answer").click(function () {
    if ($(this).text() === quizQuestions[currentQ].correctAnswer) {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
    currentQ++;
    populateQuiz();
});