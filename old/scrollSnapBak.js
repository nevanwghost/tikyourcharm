document.addEventListener('DOMContentLoaded', function() {
    const sections = Array.from(document.querySelectorAll('.content-container'));

    let isScrolling = false;
    let scrollTimeout;
    let lastScrollPos = window.pageYOffset;
    let scrollingDown;

    const scrollSpeed = 250; // Adjust the scroll speed (in ms)

    function getClosestSection() {
        const scrollPos = window.pageYOffset;
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
        const startPosition = window.pageYOffset;
        const endPosition = section.offsetTop+0.5;
        const distance = endPosition - startPosition;
        const duration = scrollSpeed; // Use the scrollSpeed variable to control the animation duration
        let startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            window.scrollTo(0, startPosition + progress * distance);

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                isScrolling = false;
            }
        }

        requestAnimationFrame(step);
    }

    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);

        if (!isScrolling) {
            const scrollPos = window.pageYOffset;
            scrollingDown = scrollPos > lastScrollPos;
            lastScrollPos = scrollPos;

            scrollTimeout = setTimeout(() => {
                isScrolling = true;
                const closestSection = getClosestSection();
                scrollToSection(closestSection);
            }, 200); // Adjust the timeout to match the desired delay before snapping (in ms)
        }
    });
});