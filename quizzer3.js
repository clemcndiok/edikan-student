let q1 = {
    question: "what planet has humans?",
    answer: "Earth"
};

let q2 = {
    question: "what is 13 times 3?",
    answer: "39"
};

let q3 = {
    question: "who was the first Nigerian president?",
    answer: "Nnamdi Azikiwe"
};

let q4 = {
    question: "what has an orbit of 27 days?",
    answer: "Moon"
};

let q5 = {
    question: "you are learning Javascript, true or false.?",
    answer: "true"
};

let questions = [q1, q2, q3, q4, q5];
let score = 0;
let numQuestions = questions.length;
let scoreCounter = 0;

let question = document.getElementById("question");
let response = document.getElementById("response");
let input = document.getElementById("input");
let button = document.getElementById("submit");
let start = document.getElementById("start");
let showScore = document.getElementById("score");

start.onclick = startGame;

function startGame()
{
    scoreCounter++;

    if (scoreCounter < 6)
    {
        input.value = "";
    question.innerHTML = "";
    response.innerHTML = "";

    let index = Math.floor(Math.random() * questions.length);
    let pickedQuestion = questions[index];
    questions.splice(index, 1);
    question.innerHTML = pickedQuestion.question;

    button.onclick = checkAnswer;

    function checkAnswer()
    {
        if (input.value === pickedQuestion.answer)
        {
            response.innerHTML = "Correct! You are a genius";
            score++;
        }
        else
        {
            response.innerHTML = "Not correct! The correct answer is "+ pickedQuestion.answer;
        }
    }

    start.innerHTML = "Next";
    }
    else
    {
        let percent = score / 5 * 100;
        showScore.innerHTML = "Score : " + score + "/5. The percentage is " + percent + "%";
        if (percent > 75) {
            showScore.innerHTML += "<br> Great Job!";
        }else {
            showScore.innerHTML += "<br> Keep Trying!";
        }
    }
}