var scoreCorrect = 0;
var scoreIncorrect = 0;
var score = 0;
var currentQ = 0;
var timeleft = 1;

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
    $("#currentScore").text("Score: " + score);
    populateQuiz();
    var downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            $("#resultText").text("You've run out of time!");
            $("#countdown").text("");
            $("#questionDiv").addClass("hide");
            $("#resultScreen").removeClass("hide");
            $("#countdown").addClass("hide");
        } else {
            $("#countdown").text(timeleft + " seconds remaining");
        }
        timeleft -= 1;
    }, 1000);
});

function populateQuiz() {
    if (currentQ < quizQuestions.length) {
        $("#questionField").text(quizQuestions[currentQ].question);
        $("#a").text(quizQuestions[currentQ].answers[0]);
        $("#b").text(quizQuestions[currentQ].answers[1]);
        $("#c").text(quizQuestions[currentQ].answers[2]);
        $("#d").text(quizQuestions[currentQ].answers[3]);
    } else if (currentQ >= quizQuestions.length) {
        $("#resultText").text("You've completed the quiz!");
        $("#questionDiv").addClass("hide");
        $("#resultScreen").removeClass("hide");
        $("#countdown").addClass("hide");
    }
}

$(".answer").click(function () {
    $("#currentScore").text("Score: " + score);
    if ($(this).text() === quizQuestions[currentQ].correctAnswer) {
        alert("Correct!");
        scoreCorrect++;
        updateScore();
    } else {
        alert("Incorrect!");
        scoreIncorrect++;
        timeleft -= 5;
        updateScore();
    }
    currentQ++;
    populateQuiz();
});

function updateScore() {
    score = (scoreCorrect * 5) - (scoreIncorrect * 3);
    $("#currentScore").text("Score: " + score);
}

function setScore() {
    var initials = $("#initialText").val();
    if (initials === "") {
        alert("Please enter your initials, idiot!");
    } else if (initials !== "") {
        var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
        var newScore = {
            score: score,
            initials: initials
        };
        highscores.push(newScore);
        localStorage.setItem("highscores", JSON.stringify(highscores));
        $("#resultScreen").addClass("hide");
        $("#highScoreDiv").removeClass("hide");
        highscores.sort(function (a, b) {
            return b.score - a.score
        })
        for (var i = 0; i < 3; i++) {
            var newNameLi = $("<li></li>");
            var newScoreLi = $("<li></li>");
            newNameLi.text(highscores[i].initials);
            $("#highscore-initials").append(newNameLi);
            newScoreLi.text(highscores[i].score);
            $("#highscore-score").append(newScoreLi);
        }
    }
}

$("#initialSubmit").click(function () {
    setScore();
});

$("#restart").click(function () {
    $("#highScoreDiv").addClass("hide");
    $("#begin").removeClass("hide");
    currentQ = 0;
    score = 0;
    scoreCorrect = 0;
    scoreIncorrect = 0;
    updateScore();
});

$("#reset").click(function () {
    localStorage.clear();
    $("#highscore-initials").html("");
    $("#highscore-score").html("");
});