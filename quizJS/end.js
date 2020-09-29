const username = document.querySelector('#username'),
    saveScoreBtn = document.querySelector('#saveScoreBtn'),
    finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const MAX_HIGH_SCORES = 5;
finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});
saveScoreBtn.addEventListener('click', (e) => {
    saveHighScore(e);
});
const saveHighScore = (e) => {
    console.log(e.target);
    e.preventDefault();
    const scoreItem = {
        score: Math.floor(Math.random() * 100),
        name: username.value,
    };

    highScores.push(scoreItem);
    highScores.sort((a, b) => {
        return b.score - a.score;
    });
    highScores.splice(MAX_HIGH_SCORES);
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');
};
