const age = 25;
const counter = document.querySelector("#age-counter");

if (counter) {
  const duration = 1500;
  const startTime = performance.now();

  function animateAge(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    counter.textContent = Math.floor(progress * age);

    if (progress < 1) {
      requestAnimationFrame(animateAge);
    }
  }

  requestAnimationFrame(animateAge);
} else {
  console.warn("#age-counter element was not found.");
}

const clockEl = document.getElementById("clock");
if (clockEl) {
  function updateClock() {
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString();
  }

  setInterval(updateClock, 1000);
  updateClock();
}

const btn = document.getElementById("changeTextBtn");
const message = document.getElementById("message");
if (btn && message) {
  btn.addEventListener("click", () => {
    const messages = [
      "You clicked the button!",
      "Nice work!",
      "Creative energy unlocked!",
      "Keep building something cool!"
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    message.textContent = randomMessage;
  });
}

const quoteBtn = document.getElementById("quoteBtn");
const quoteEl = document.getElementById("quote");
if (quoteBtn && quoteEl) {
  const quotes = [
    "Success is built by small steps.",
    "Practice makes progress.",
    "Keep coding, keep learning.",
    "Every bug is a lesson.",
    "Small ideas become big projects."
  ];

  quoteBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteEl.textContent = quotes[randomIndex];
  });
}

let count = 0;
const countEl = document.getElementById("count");
const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");

if (countEl && minusBtn && plusBtn) {
  minusBtn.addEventListener("click", () => {
    count--;
    countEl.textContent = count;
  });

  plusBtn.addEventListener("click", () => {
    count++;
    countEl.textContent = count;
  });
}

const colorBtn = document.getElementById("colorBtn");
if (colorBtn) {
  colorBtn.addEventListener("click", () => {
    const hue = Math.floor(Math.random() * 360);
    document.body.style.background = `linear-gradient(135deg, hsl(${hue}, 60%, 20%), hsl(${(hue + 60) % 360}, 70%, 40%), hsl(${(hue + 120) % 360}, 70%, 50%))`;
  });
}

const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  const applyTheme = (isLight) => {
    document.body.classList.toggle("light-mode", isLight);
    themeToggle.textContent = isLight ? "☀️ Light mode" : "🌙 Dark mode";
  };

  const savedTheme = localStorage.getItem("themeMode");
  if (savedTheme === "light") {
    applyTheme(true);
  }

  themeToggle.addEventListener("click", () => {
    const isLight = !document.body.classList.contains("light-mode");
    applyTheme(isLight);
    localStorage.setItem("themeMode", isLight ? "light" : "dark");
  });
}

