// Typing effect
const lines = [
  "MBA Tech Data Science student",
  "Instagram content creator",
  "Python and AI explorer"
];
let lineIndex = 0;
let charIndex = 0;
let deleting = false;
const typingEl = document.getElementById("typing");

function type() {
  const current = lines[lineIndex];
  if (!deleting) {
    charIndex++;
    typingEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(type, 1500);
      return;
    }
  } else {
    charIndex--;
    typingEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      lineIndex = (lineIndex + 1) % lines.length;
    }
  }
  setTimeout(type, deleting ? 40 : 80);
}
type();

// Dark / light mode
const btn = document.getElementById("themeBtn");
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});