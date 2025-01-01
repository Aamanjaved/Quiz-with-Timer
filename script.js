const questions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 5 + 3?", answer: "8" },
    { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
];

let currentQuestionIndex = 0;
let timerInterval;
const timerElement = document.getElementById("timer");
const flashcard = document.getElementById("flashcard");
const startBtn = document.getElementById("start-btn");
const showAnswerBtn = document.getElementById("show-answer-btn");
const nextBtn = document.getElementById("next-btn");

const startQuiz = () => {
    currentQuestionIndex = 0;
    startBtn.disabled = true;
    showAnswerBtn.disabled = false;
    nextBtn.disabled = false;
    showQuestion();
};

const showQuestion = () => {
    if (currentQuestionIndex < questions.length) {
        flashcard.textContent = questions[currentQuestionIndex].question;
        flashcard.classList.remove("hidden");
        startTimer();
    } else {
        endQuiz();
    }
};

const showAnswer = () => {
    flashcard.textContent = questions[currentQuestionIndex].answer;
};

const nextQuestion = () => {
    currentQuestionIndex++;
    stopTimer();
    showQuestion();
};

const endQuiz = () => {
    flashcard.textContent = "Quiz Finished!";
    stopTimer();
    showAnswerBtn.disabled = true;
    nextBtn.disabled = true;
    startBtn.disabled = false;
};

const startTimer = () => {
    let timeLeft = 10;
    timerElement.textContent = `Timer: ${timeLeft}`;

    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Timer: ${timeLeft}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            nextQuestion();
        }
    }, 1000);
};

const stopTimer = () => {
    clearInterval(timerInterval);
};

startBtn.addEventListener("click", startQuiz);
showAnswerBtn.addEventListener("click", showAnswer);
nextBtn.addEventListener("click", nextQuestion);