// script.js

// Dynamic greeting effect
const dynamicText = document.getElementById('dynamic-text');
const greetings = [
    "Welcome to my site!",
    "Hi there! I'm glad you're here.",
    "Enjoy exploring my world!",
    "Let's take a journey through my culture."
];

let index = 0;

function rotateGreeting() {
    dynamicText.textContent = greetings[index];
    index = (index + 1) % greetings.length;
}

setInterval(rotateGreeting, 3000);

// Fade-in on scroll (if needed for future elements)
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(el => observer.observe(el));
});

document.querySelector('.btn').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('profile').scrollIntoView({ behavior: 'smooth' });
});



