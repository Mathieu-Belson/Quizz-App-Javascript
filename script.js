const questions = [
    {
        question: "In the movie 'Titanic', what is the name of the ship that sank?",
        answers: [
            { text: "The Titanic", correct: true },
            { text: "The Poseidon", correct: false },
            { text: "The Queen Mary", correct: false },
            { text: "The Black Pearl", correct: false }  , 
        ]
    },
    {
        question: "Who played the iconic character of Neo in 'The Matrix' series?",
        answers: [

            { text: "Keanu Reeves", correct: true },
            { text: "Brad Pitt", correct: false },
            { text: "Will Smith", correct: false },
            { text: "Tom Cruise", correct: false },
        ]
    }
    ,
    {
        question: "Which movie features a lovable clownfish named Nemo?",
        answers: [

            { text: "Finding Nemo", correct: true },
            { text: "Shark Tale", correct: false },
            { text: "Madagascar", correct: false },
            { text: "The Little Mermaid", correct: false },
        ]
    }
    ,
    {
        question: "What film franchise features a secret agent known for his love of martinis and shaken, not stirred, drinks?",
        answers: [

            { text: "Die Hard", correct: false },
            { text: "Mission: Impossible", correct: false },
            { text: "James Bond", correct: true },
            { text: "Jason Bourne", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion() {
    resetState();     /* reset the state of the page because we are going to show a new question */
    let currentQuestion = questions[currentQuestionIndex]; /* questions[0] */
    let questionNb = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNb + ". " + currentQuestion.question; /* display the question like this: 1. In the movie 'Titanic', what is the name of the ship that sank? */

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct; /* dataset is a property of the button element. It allows us to store custom data on an element. */
        } 
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display ="none";
    while(answerButtons.firstChild) { 
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer (e) { 
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true"; /* isCorrect is a boolean */
    if(isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    } else {
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach( button => { /* Array.from() method returns an Array object from any object with a length property or an iterable object. */
        if(button.dataset.correct ==="true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextbutton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextbutton();
    } else {
        startQuiz();
    }
})
startQuiz();
