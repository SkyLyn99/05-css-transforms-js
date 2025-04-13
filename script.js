// Get the Magic 8-Ball and answer elements.
const magicBall = document.getElementById("magicBall");
const answer = document.getElementById("answer");

// Array of possible answers for the Magic 8-Ball.
const answers = [
  "It is certain",
  "Without a doubt",
  "You may rely on it",
  "Yes definitely",
  "It is decidedly so",
  "As I see it, yes",
  "Most likely",
  "Yes",
  "Outlook good",
  "Signs point to yes",
  "Reply hazy try again",
  "Better not tell you now",
  "Ask again later",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "Outlook not so good",
  "My sources say no",
  "Very doubtful",
  "My reply is no"
];

// Event listener for the Magic 8-Ball click.
magicBall.addEventListener("click", function() {
  // Clear the current answer.
  answer.innerText = "";

  // Add the rapid-shake class to trigger the animation.
  magicBall.classList.add("rapid-shake");

  // Wait for the animation to finish (0.7s) before showing the answer.
  setTimeout(function() {
    // Remove the rapid-shake class after the animation.
    magicBall.classList.remove("rapid-shake");
      // Display a random answer.
      const randomIndex = Math.floor(Math.random() * answers.length);
      answer.innerText = answers[randomIndex];
    }, 700); // Match the duration of the rapid-shake animation.
  });