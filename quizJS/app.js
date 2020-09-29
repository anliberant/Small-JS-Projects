const question = document.querySelector('#question'),
    choices = Array.from(document.querySelectorAll('.choice-text')),
    progressText = document.querySelector('#progressText'),
    scoreText = document.querySelector('#score'),
    progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {},
    acceptingAnswers = true,
    score = 0,
    questionCounter = 0,
    availableQuestions = [];
let questions = [];
fetch('questions.json')
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((loadedQuestions) => {
        console.log(loadedQuestions);
        questions = loadedQuestions;
        startGame();
    });

//     {
//         question: 'Inside which HTML element do we put the JavaScript??',
//         choice1: '<script>',
//         choice2: '<javascript>',
//         choice3: '<js>',
//         choice4: '<scripting>',
//         answer: 1,
//     },
//     {
//         question:
//             "What is the correct syntax for referring to an external script called 'xxx.js'?",
//         choice1: "<script href='xxx.js'>",
//         choice2: "<script name='xxx.js'>",
//         choice3: "<script src='xxx.js'>",
//         choice4: "<script file='xxx.js'>",
//         answer: 3,
//     },
//     {
//         question: " How do you write 'Hello World' in an alert box?",
//         choice1: "msgBox('Hello World');",
//         choice2: "alertBox('Hello World');",
//         choice3: "msg('Hello World');",
//         choice4: "alert('Hello World');",
//         answer: 4,
//     },
// ];
///CONSTANTS
const CORRECT_BONUS = 10,
    MAX_QUESTIONS = 3;
const getNewQuestions = () => {
    if (
        availableQuestions.length === 0 ||
        questionCounter > MAX_QUESTIONS - 1
    ) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('/end.html');
    }
    questionCounter++;
    if (progressText) {
        progressText.textContent =
            'Question ' + questionCounter + '/' + MAX_QUESTIONS;
    }
    if (progressBarFull) {
        progressBarFull.style.width =
            (questionCounter / MAX_QUESTIONS) * 100 + 'px';
    }

    const questionIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[questionIndex];
    if (question) {
        question.innerText = currentQuestion.question;
    }
    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};
const startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestions();
};
choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) {
            return;
        }
        acceptingAnswers = false;
        const selectedChoice = e.target,
            selectedAnswer = selectedChoice.dataset['number'];
        const classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        if (classToApply == 'correct') {
            incrementScore(CORRECT_BONUS);
        }
        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestions();
        }, 1000);
    });
});
const incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};
