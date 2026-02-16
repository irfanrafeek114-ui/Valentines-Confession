const questions = [
  "Will you be my Valentine?",
  "Shho angne parayalle",
  "Mandi vangich theraam :)",
  "Karangan kond povam :P",
  "Cinemakk kondovaamm",
  "Bun muska vangicheraam :)",
  "Yes parayado! :("
];

let currentIndex = 0;

const questionElement = document.getElementById('question');
const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');

noButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % questions.length;
  questionElement.textContent = questions[currentIndex];
  
  // Add these lines here for the moving effect
  noButton.style.position = 'absolute';
  noButton.style.left = `${Math.random() * 80 + 10}%`;
  noButton.style.top = `${Math.random() * 80 + 10}%`;
});

yesButton.addEventListener('click', () => {
  questionElement.textContent = "Yaeyyyyyyyy!!!!! ";
  document.querySelector('.buttons').style.display = 'none';
  
  // Simple confetti effect (fun addition)
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.textContent = '🎉';
    confetti.style.position = 'absolute';
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.top = `${Math.random() * 100}vh`;
    confetti.style.fontSize = `${Math.random() * 2 + 1}em`;
    confetti.style.animation = 'confetti 2s linear';
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 2000);
  }
});
// Add many floating hearts dynamically with randomness

const heartsContainer = document.querySelector('.hearts');

for (let i = 0; i < 50; i++) {  // Change to 50 for "so many"—reduce if too much

  const heart = heartsContainer.cloneNode(true);

  

  // Randomize properties

  const duration = Math.random() * 10 + 5;  // 5-15s speed

  const delay = Math.random() * 5;  // 0-5s start delay

  const left = Math.random() * 100;  // Horizontal position %

  const rotation = Math.random() * 360 - 180;  // -180 to 180 deg base rotation
const rotationStart = Math.random() * 720;  // Extra spin at start

  const rotationEnd = Math.random() * 720;  // Extra spin at end

  const size = Math.random() * 1.5 + 0.5;  // 0.5-2em size variation

  

  heart.style.setProperty('--duration', `${duration}s`);

  heart.style.setProperty('--delay', `-${delay}s`);  // Negative for immediate variety

  heart.style.setProperty('--left', `${left}%`);

  heart.style.setProperty('--rotation', `${rotation}deg`);

  heart.style.setProperty('--rotation-start', `${rotationStart}deg`);

  heart.style.setProperty('--rotation-end', `${rotationEnd}deg`);


  heart.style.fontSize = `${size}em`;  // Apply to container for pseudo

  document.body.appendChild(heart);

}
