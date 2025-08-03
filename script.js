function createBalls() {
    for (let i = 0; i < 30; i++) {
        let ball = document.createElement("div");
        ball.classList.add("ball");
        document.body.appendChild(ball);
        ball.style.left = Math.random() * 100 + "vw"; // Randomize position
        ball.style.animationDuration = (Math.random() * 5 + 4) + "s"; // Slower fall time
        ball.style.animationDelay = Math.random() * 3 + "s"; // Random delay before start
    }
}

createBalls();

// Start background music when the page loads
window.onload = function() {
    let audio = document.getElementById("bgMusic");
    audio.play();
};

