const textContainer = document.getElementById('hero-text');
const textToType = 'Join the Joyful Wedding Celebration of <strong>Charles</strong> and <strong>Kartika</strong>';
const typingSpeed = 25; // milliseconds

function typeText(index) {
  if (index <= textToType.length) {
    textContainer.innerHTML = textToType.slice(0, index);
    setTimeout(() => typeText(index + 1), typingSpeed);
  }
}

typeText(0);