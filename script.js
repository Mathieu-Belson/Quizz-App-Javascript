const questions = [
    {
        Question: "In the movie "Titanic," what is the name of the ship that sank?",
        Answers: [
            { text: "The Titanic", correct: true },
            { text: "The Poseidon", correct: false },
            { text: "The Queen Mary", correct: false },
            { text: "The Black Pearl", correct: false }  , 
        ]
    },
    {
        Question: "Who played the iconic character of Neo in 'The Matrix' series?",
        Answers: [

            { text: "Keanu Reeves", correct: true },
            { text: "Brad Pitt", correct: false },
            { text: "Will Smith", correct: false },
            { text: "Tom Cruise", correct: false },
        ]
    }
    ,
    {
        Question: "Which movie features a lovable clownfish named Nemo?",
        Answers: [

            { text: "Finding Nemo", correct: true },
            { text: "Shark Tale", correct: false },
            { text: "Madagascar", correct: false },
            { text: "The Little Mermaid", correct: false },
        ]
    }
    ,
    {
        Question: "What film franchise features a secret agent known for his love of martinis and shaken, not stirred, drinks?",
        Answers: [

            { text: "Die Hard", correct: false },
            { text: "Mission: Impossible", correct: false },
            { text: "James Bond", correct: true },
            { text: "Jason Bourne", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

    }