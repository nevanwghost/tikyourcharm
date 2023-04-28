const container = document.getElementById('container');
const sections = Array.from(document.querySelectorAll('.content-container'));

let isScrolling = false;
let scrollTimeout;

function getClosestSection() {
    const scrollPos = container.scrollTop;
    let closestSection = sections[0];
    let minDistance = Math.abs(scrollPos - closestSection.offsetTop);

    sections.forEach(section => {
        const distance = Math.abs(scrollPos - section.offsetTop);
        if (distance < minDistance) {
            closestSection = section;
            minDistance = distance;
        }
    });

    return closestSection;
}

function scrollToSection(section) {
    const startPosition = container.scrollTop;
    const endPosition = section.offsetTop;
    const distance = endPosition - startPosition;
    const duration = 500; // Animation duration in ms
    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        container.scrollTop = startPosition + progress * distance;

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            isScrolling = false;
        }
    }

    requestAnimationFrame(step);
}

container.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);

    if (!isScrolling) {
        scrollTimeout = setTimeout(() => {
            isScrolling = true;
            const closestSection = getClosestSection();
            scrollToSection(closestSection);
        }, 150); // Adjust the timeout to match the desired delay before snapping (in ms)
    }
});
