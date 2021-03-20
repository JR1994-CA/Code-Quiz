
var questions = [{
    question: "How do you write comments in Javascript?",
    ChoiceA: "//",
    ChoiceB: "/*",
    ChoiceC: "{}",
    ChoiceD: "None of Above",
    answer: "A"
    
},
{
    question: "Which one of these data types stores a single true or false value?",
    ChoiceA: "string",
    ChoiceB: "object",
    ChoiceC: "float",
    ChoiceD: "boolean",
    answer: "D"
    
},
{
    question:"Which ones of these values is not considered false?",
    ChoiceA: "''",
    ChoiceB: "null",
    ChoiceC: "'0'",
    ChoiceD: "0",
    answer:"C"
    
},
{
    question:"What does CSS stand for?",
    ChoiceA: "Common Style Sheet",
    ChoiceB: "Cascading Style Sheet",
    ChoiceC: "Computer Style Sheet",
    ChoiceD: "Colorful Style Sheet",
    answer: "B"
    
},
{
    question:"What does HTMl stand for?",
    ChoiceA: "Hyper Text Marketing Language",
    ChoiceB: "Hyper Text Management Language",
    ChoiceC: "Hyper Text Multiple Language",
    ChoiceD: "Hyper Text Markup Language",
    answer: "D"
    
}
]

var totalSeconds = 75;
var timerEl = document.querySelector("#time");
var startingButton = document.getElementById("starter-btn");
var questionContainerEl = document.getElementById("questionBox");
var introContainerEl = document.getElementById("startingPage");
var nextQuestionButton = document.getElementById("next-btn");
var questionText = document.getElementById("question");
var currentQuestion = 0;
var choicesEl = document.querySelector("#btn-section");
var score = 0;
var result = document.querySelector("#result")

var buttonA = document.querySelector("#A");
var buttonB = document.querySelector("#B");
var buttonC = document.querySelector("#C");
var buttonD = document.querySelector("#D");






function startGame() {
    console.log("Started the Game");
    startingButton.classList.add("hide");
    questionContainerEl.classList.remove("hide");
    introContainerEl.classList.add("hide");
    setQuestion();
    timerEl.value = totalSeconds;
}

function setQuestion() {
    console.log("Question");

    var questionDisplay = questions[currentQuestion];

    for(let i = 0; i < questions.length; i++) {
        questionText.innerHTML = questionDisplay.question;
        buttonA.innerHTML = questionDisplay.ChoiceA;
        buttonB.innerHTML = questionDisplay.ChoiceB;
        buttonC.innerHTML = questionDisplay.ChoiceC;
        buttonD.innerHTML = questionDisplay.ChoiceD;
    }



}

function checkChoice(choice) {

    if(choice == questions[currentQuestion].answer) {
        console.log("Correct");

    } else {
        console.log("Wrong");
    }

    if((currentQuestion) < (questions.length)) {
        currentQuestion++;
        setQuestion();
    } else {

    }


}

startingButton.addEventListener("click", startGame)
choicesEl.addEventListener("click", setQuestion);
