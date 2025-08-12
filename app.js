// Typing Effect
const typedText = document.getElementById("typed-text");
const textArray = ["A.Divya Teja Veereswara Rao", "a Front-End Developer", "a Web Designer"];
let textIndex = 0;
let charIndex = 0;
const typingDelay = 150;
const erasingDelay = 100;
const newTextDelay = 1200;

function type() {
    if (charIndex < textArray[textIndex].length) {
        typedText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}
function erase() {
    if (charIndex > 0) {
        typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textIndex++;
        if (textIndex >= textArray.length) textIndex = 0;
        setTimeout(type, typingDelay);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    if (textArray.length) setTimeout(type, 500);
});

// Intersection Observer for animations
const fadeEls = document.querySelectorAll(".fade-in");
const slideRightEl = document.querySelector(".slide-right");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains("fade-in")) {
                entry.target.classList.add("fade-in-show");
            }
            if (entry.target.classList.contains("slide-right")) {
                entry.target.classList.add("slide-right-show");
            }
            entry.target.querySelectorAll('.timeline-content').forEach(tc => {
                tc.style.opacity = 1;
            });
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

fadeEls.forEach(el => observer.observe(el));
observer.observe(slideRightEl);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Contact Form Handler
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    this.reset();
});
