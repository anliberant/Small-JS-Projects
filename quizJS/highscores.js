const highScoreList = document.querySelector('#highScoreList'),
    highScores = JSON.parse(localStorage.getItem('highScores')) || [];
console.log(
    highScores.map((score) => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
    })
);
highScoreList.innerHTML = highScores
    .map((score) => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
    })
    .join('');
