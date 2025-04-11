// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.1}s`;
  observer.observe(el);
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
});

const words = ["California", "Yosemite", "El Capitan", "Mesquite Dunes"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typewriter");

function type() {
  const current = words[wordIndex];
  const partial = isDeleting
    ? current.substring(0, charIndex--)
    : current.substring(0, charIndex++);

  typingElement.textContent = partial;

  let typingSpeed = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === current.length + 1) {
    isDeleting = true;
    typingSpeed = 1000; // Pause after full word
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typingSpeed = 400; // Pause before typing next word
  }

  setTimeout(type, typingSpeed);
}

type();
