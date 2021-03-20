
var questions = [{
    question: "How do you write comments in Javascript?",
    options: ["//", "/*", "<!---->", "None of Above"],
    answers: "//"
    
},
{
    question: "Which one of these data types stores a single true or false value?",
    options: ["string", "object", "float", "boolean"],
    answers: "boolean"
    
},
{
    question:"Which ones of these values is not considered false?",
    options:["''", "null", "'0'", "0"],
    answers:"'0'"
    
},
{
    question:"What does CSS stand for?",
    options:["Common Style Sheet", "Cascading Style Sheet", "Computer Style Sheet", "Colorful Style Sheet"],
    answers: "Cascading Style Sheet"
    
},
{
    question:"What does HTMl stand for?",
    options: ["Hyper Text Marketing Language", "Hyper Text Management Language", "Hyper Text Multiple Language", "Hyper Text Markup Language"],
    answers: "Hyper Text Markup Language"
    
}
]


var timerEL = document.getElementById("time");
var startingButton = document.getElementById("starter-btn");
var questionContainerEl = document.getElementById("questionBox");
var introContainerEl = document.getElementById("startingPage");

startingButton.addEventListener("click", startGame)

function startGame() {
    console.log("Started the Game");
    startingButton.classList.add("hide");
    questionContainerEl.classList.remove("hide");
    introContainerEl.classList.add("hide");
}


function setNextQuestion() {


}

function selectAnswer() {


}


