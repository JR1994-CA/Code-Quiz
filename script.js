
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
        
    },
]

let i = 0;
let score = 0;
let timeClock = 60;
const timer = document.querySelector("#time");
const newMessage = document.querySelector("#message");
let localScores;
let scoreList = [];
const choiceA = document.getElementById("choiceA");
const choiceB = document.getElementById("choiceB");
const choiceC = document.getElementById("choiceC");
const choiceD = document.getElementById("choiceD");
// Timer and Time up prompt
function setTime() {
    var timeInterval = setInterval(function () {
        timeClock--;
        timer.textContent = "Timer " + timeClock;
        if (timeClock === 0) {
            clearInterval(timeInterval);
            alert("Time!");
            questionEnder();
        }
        else if (i === questions.length) {
            clearInterval(timeInterval);
        }
    }, 1000)
    return (score)
};
// When time is up or user has answered all the questions, display the score and prompt to user to submit their name in HighScore or Play again.
function questionEnder() {
    const inputScore = document.createElement("h1");
    const inputTag = document.createElement("input");
    const submitButton = document.createElement("button");
    const playAgainButton = document.createElement("button");
    score += timeClock;
    if (score <= 0 ) {
        score = 0;
    };
    document.getElementById("question").textContent = "Game Over!";
    choiceA.remove();
    choiceB.remove();
    choiceC.remove();
    choiceD.remove();
    document.body.children[1].appendChild(inputScore);
    document.getElementsByTagName("h1")[0].setAttribute("id", "score");
    document.getElementById("score").textContent = "Your Score is " + score;
    document.getElementById("score").setAttribute("class", "row");
    document.getElementById("score").setAttribute("class", "text-center");
    document.body.children[1].appendChild(inputTag);
    document.getElementsByTagName("input")[0].setAttribute("id", "input-field");
    document.getElementsByTagName("input")[0].placeholder = "Enter initials";
    submitButton.textContent = "Submit";
    document.body.children[1].appendChild(submitButton);    
    submitButton.addEventListener("click", function (event) {    
        event.preventDefault();     
        var hiScoreText = new Object();   
        hiScoreText.name = inputTag.value.trim(); 
        hiScoreText.newScore = score;     
        saveScores(hiScoreText);   
        window.location.href = "index.html";    
    });  
};

//Displays questions
function questionInit() {
    choiceA.hidden = false;
    choiceB.hidden = false;
    choiceC.hidden = false;
    choiceD.hidden = false;
    document.getElementById("startButton").hidden = true;
    if (i === questions.length) {
        questionEnder();
    }
    else {
        document.getElementById("question").innerHTML = questions[i]["question"];
        document.getElementById("choiceA").innerHTML = questions[i]["choiceA"];
        document.getElementById("choiceB").innerHTML = questions[i]["choiceB"];
        document.getElementById("choiceC").innerHTML = questions[i]["choiceC"];
        document.getElementById("choiceD").innerHTML = questions[i]["choiceD"];
    }
};
// Local Storage - Need to verify functionality
function saveScores(highScoreText) {
    tempArray = JSON.parse(localStorage.getItem("scores"));
    if (tempArray === null) {
        scoreList.push(highScoreText);
        localStorage.setItem("scores", JSON.stringify(scoreList));
    }
    else {
        tempArray.push(highScoreText);
        localStorage.setItem("scores", JSON.stringify(tempArray));
    }
};
document.getElementById("startButton").addEventListener("click", questionInit);
document.getElementById("startButton").addEventListener("click", setTime);
document.getElementById("startButton").addEventListener("click", function () {
    newMessage.textContent = "";
});
// Show correct or wrong and subtracts time
choiceA.hidden = true;
choiceB.hidden = true;
choiceC.hidden = true;
choiceD.hidden = true;
document.getElementById("choiceA").addEventListener("click", function () {
    if (questions[i].choice === questions[i].answer) {
        newMessage.textContent = "Well done!";
        score++;
    }
    else {
        newMessage.textContent = "Incorrect!";
        timeClock -= 5;
    }
    i++;
    questionInit();
});
document.getElementById("choiceB").addEventListener("click", function () {
    if (questions[i].choice === questions[i].answer) {
        newMessage.textContent = "Well done!";
        score++;
    }
    else {
        newMessage.textContent = "Incorrect!";
        timeClock -= 5;
    }
    i++;
    questionInit();
});
document.getElementById("choiceC").addEventListener("click", function () {
    if (questions[i].choice === questions[i].answer) {
        newMessage.textContent = "Well done!";
        score++;
    }
    else {
        newMessage.textContent = "Incorrect!";
        timeClock -= 5;
    }
    i++;
    questionInit();
});
document.getElementById("choiceD").addEventListener("click", function () {
    if (questions[i].choice === questions[i].answer) {
        newMessage.textContent = "Well done!";
        score++;
    }
    else {
        newMessage.textContent = "Incorrect!";
        timeClock -= 5;
    }
    i++;
    questionInit();
});