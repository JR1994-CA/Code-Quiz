
const questions = [
{
    question: "How do you write comments in Javascript?",
    choiceA: "//",

    choiceB: "/*",
    choiceC: "{}",
    choiceD: "None of Above",
    answer: "A"
    
},
{
    question: "Which one of these data types stores a single true or false value?",
    choiceA: "string",
    choiceB: "object",
    choiceC: "float",
    choiceD: "boolean",
    answer: "D"
    
},
{
    question:"Which ones of these values is not considered false?",
    choiceA: "''",
    choiceB: "null",
    choiceC: "'0'",
    choiceD: "0",
    answer:"C"
    
},
{
    question:"What does CSS stand for?",
    choiceA: "Common Style Sheet",
    choiceB: "Cascading Style Sheet",
    choiceC: "Computer Style Sheet",
    choiceD: "Colorful Style Sheet",
    answer: "B"
    
},
{
    question:"What does HTML stand for?",
    choiceA: "Hyper Text Marketing Language",
    choiceB: "Hyper Text Management Language",
    choiceC: "Hyper Text Multiple Language",
    choiceD: "Hyper Text Markup Language",
    answer: "D"
    
}
]

var score = 0;
var counter = 0;
var currentTime = document.querySelector('#currentTime');
var start = document.querySelector("#starter-btn");
var introDiv = document.querySelector('#introSection');
var questionsDiv = document.querySelector('#questionBox');
var questionText = document.getElementById("#question");
var buttonSection = document.querySelector("btn-section");
var finished = document.querySelector("#endPage");
var finalScore = document.querySelector("#final-score"); 
var initialsEl = document.getElementById("initials");
var submit = document.querySelector("#submit");
var secondsLeft = 75;
var holdInterval = 0;
var penalty = 10;
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

const buttonA = document.querySelector("#A");
const buttonB = document.querySelector("#B");
const buttonC = document.querySelector("#C");
const buttonD = document.querySelector("#D");




function startGame() {

    console.log("Here We Go!!!");
    start.classList.add("hide");
    introDiv.classList.add("hide");
    questionsDiv.removeAttribute("class");
    currentTime.value = secondsLeft;

    setQuestion();
    clockTick();
}





function setQuestion() {

    const questionDisplay = questions[counter];

    for (let i = 0; i < questions.length; i++) {
        questionText.innerHTML = "<p>" + questionDisplay.question + "<p>";

        buttonA.innerHTML = questionDisplay.choiceA;
        buttonB.innerHTML = questionDisplay.choiceB;
        buttonC.innerHTML = questionDisplay.choiceC;
        buttonD.innerHTML = questionDisplay.choiceD;
        
    }   

}

function checkChoice(choice) {
    
    if(choice === question[counter].answer) {
        console.log("Correct :D");
        score;
    }
    else {
        console.log("Wrong :(");
        secondsLeft -= 10;
        currentTime.innerHTML = secondsLeft;
    }

    if((counter) < (question.length)) {
        counter++;
        setQuestion();
    }
    else {
        stopTimer();
    }
    

}

function setTimer() {


    var timeInterval = setInterval(function () {
        secondsLeft--;
        setTime();
        
        if (totalSeconds === 0) {
            currentTime.textContent = "" + totalSeconds;
            clearInterval(timeInterval);
            totalSeconds = 75;
        }

    }, 1000);
}

function clockTick() {

    currentTime.textContent = secondsLeft;

    var clockDecrement = setInterval(function() {
        secondsLeft--;
        currentTime.textContent = secondsLeft;
        if(secondsLeft == 0){
            clearInterval(clockDecrement);

            finished.style.display = "block";

            finalScore = document.getElementsById("#final-score");
            finalScore.textContent = secondsLeft;
            
            questionsDiv.setAttribute("class", "hide");

        }
       
    }, 1000)

}


function endQuiz() {


   finished.removeAttribute("class");
   finalScore.textContent = currentTime;
   questionsDiv.setAttribute("class", "hide");
}


function saveHighscore() {
    var initials = initialsEl.value.trim();

    if (initials !== "") {
        
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

        
        var newScore = {
            score: time,
            initials: initials
        };
        
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));
      
        window.location.href = "highscores.html";
    }
}
function checkForEnter(event) {
    
    if (event.key === "Enter") {
        saveHighscore();
    }
}
start.addEventListener("click", startGame);
buttonSection.addEventListener("click", setQuestion);
submit.addEventListener("click", endQuiz);
