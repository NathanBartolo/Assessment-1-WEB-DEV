document.addEventListener('DOMContentLoaded', function() {
    const colorDisplay = document.getElementById('color-display');
    const optionsContainer = document.getElementById('options-container');
    const message = document.getElementById('message');
    const scoreValue = document.getElementById('score-value');
    const playAgainBtn = document.getElementById('play-again-btn');
    //to call score,lives, and correct color variable 
    let score = 0;
    let lives = 3;
    let correctColor;
    //function to create random rgb colors
    function generateColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
    // Function to display the correct color to guess
    function displayColor() {
        correctColor = generateColor();
        colorDisplay.textContent = correctColor;
    }
    // Function to check if the chosen color matches the correct color
    function checkColor(chosenColor) {
        if (chosenColor === correctColor) {
            score++;
            scoreValue.textContent = score;
            message.textContent = 'Correct! Well done.';
            startRound(); // Call startRound() function to start a new round
        } else {
            lives--;
            if (lives === 0) {
                gameOver();
            } else {
                message.textContent = `Incorrect. ${lives} lives remaining.`;
            }
        }
    }
    //function if the game is over
    function gameOver() {
        message.textContent = 'Game Over! You have run out of lives.';
        playAgainBtn.style.display = 'block';//this will display the play again button
    }
    
    // Function to create options for the player to choose from
    function createOptions() {
        const colors = [];
        colors.push(correctColor);
        while (colors.length < 6) {
            const newColor = generateColor();
            if (!colors.includes(newColor)) {
                colors.push(newColor);
            }
        }
        colors.sort(() => Math.random() - 0.5);
        colors.forEach(color => {
            const option = document.createElement('div');
            option.classList.add('option');
            option.style.backgroundColor = color;
            option.addEventListener('click', function() {
                checkColor(color);
            });
            optionsContainer.appendChild(option);
        });
    }
    //function to start a new round
    function startRound() {
        lives = 3;
        message.textContent = '';
        playAgainBtn.style.display = 'none';
        optionsContainer.innerHTML = '';
        displayColor();
        createOptions();
    }
    //function to trigger the play again button
    playAgainBtn.addEventListener('click', startRound);
    //start again when the page load
    startRound();
});
