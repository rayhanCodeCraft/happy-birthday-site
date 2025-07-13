const celebrateBtn = document.getElementById("celebrateBtn");
const container = document.querySelector(".confetti-container");
const audio = document.getElementById("birthdayAudio");
const modal = document.getElementById("surpriseModal");
const closeModalBtn = document.getElementById("closeModal");

// 🔊 Safe audio play for modern browsers
function playAudio() {
  audio.currentTime = 0;
  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.catch((error) => {
      console.warn("Autoplay blocked. User interaction required.");
    });
  }
}

celebrateBtn.addEventListener("click", () => {
  const emojis = ["🎉", "🎊", "💖", "🌹", "✨", "🎈", "💕"];
  const particleCount = 20;

  // 🎉 Confetti
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    const left = Math.random() * 100;
    const delay = Math.random() * 0.5;

    particle.style.left = `${left}%`;
    particle.style.bottom = "-20px";
    particle.style.fontSize = "1.5rem";
    particle.style.animationDelay = `${delay}s`;

    container.appendChild(particle);
  }

  // 🎵 Play audio
  playAudio();

  // 🎁 Show modal
  setTimeout(() => {
    modal.classList.remove("hidden");
    modal.classList.add("show");
  }, 2000);

  // 🎉 Remove confetti
  setTimeout(() => {
    container.innerHTML = "";
  }, 3500);
});

// 🧹 Close modal
closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  modal.classList.add("hidden");
});
