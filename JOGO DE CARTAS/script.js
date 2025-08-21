function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function resetGame() {
    score = 0;
    document.getElementById('score').textContent = score;
    document.getElementById('feedback').textContent = '';
    remainingQuestions = [...questions]; // ← restaura todas as perguntas
    drawCard();
}

function drawCard() {
    if (remainingQuestions.length === 0) {
        document.getElementById('question').textContent = 'Fim do jogo!';
        document.getElementById('options').innerHTML = '';
        return;
    }

    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    currentQuestion = remainingQuestions[randomIndex];
    remainingQuestions.splice(randomIndex, 1); // ← remove pergunta sorteada

    document.getElementById('question').textContent = currentQuestion.question;

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    const shuffledOptions = shuffle([...currentQuestion.options]);
    shuffledOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(btn);
    });

    document.getElementById('feedback').textContent = '';
}

function checkAnswer(selected) {
    const feedback = document.getElementById('feedback');
    if (selected === currentQuestion.correct) {
        feedback.textContent = 'Correto! Você ganhou 1 ponto.';
        feedback.style.color = 'green';
        score++;
        document.getElementById('score').textContent = score;
    } else {
        feedback.textContent = 'Errado! A resposta correta é ' + currentQuestion.correct + '.';
        feedback.style.color = 'red';
    }

    const buttons = document.querySelectorAll('#options button');
    buttons.forEach(btn => btn.disabled = true);
}
