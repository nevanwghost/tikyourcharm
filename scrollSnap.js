document.addEventListener("DOMContentLoaded", function () {
    const sections = Array.from(document.querySelectorAll(".content-container"));
  
    let isScrolling = false;
    let scrollTimeout;
    let lastScrollPos = window.pageYOffset;
    let scrollingDown;
  
    const scrollSpeed = 200; // Adjust the scroll speed (in ms)
    const threshold = 0.95;
  
    function getTargetSection() {
      const scrollPos = window.pageYOffset;
      const windowHeight = window.innerHeight;
  
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
        const top = rect.top;
        const bottom = rect.bottom;
  
        if (scrollingDown) {
          if (top >= 0 && top <= windowHeight * threshold) {
            return section;
          }
        } else {
          if (bottom >= windowHeight * (1 - threshold) && bottom <= windowHeight) {
            return section;
          }
        }
      }
  
      return null;
    }
  
    function scrollToSection(section) {
      if (!section) {
        isScrolling = false;
        return;
      }
  
      const startPosition = window.pageYOffset;
      const endPosition = section.offsetTop + 0.5;
      const distance = endPosition - startPosition;
      const duration = scrollSpeed;
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
  
    window.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout);
  
      if (!isScrolling) {
        const scrollPos = window.pageYOffset;
        scrollingDown = scrollPos > lastScrollPos;
        lastScrollPos = scrollPos;
  
        scrollTimeout = setTimeout(() => {
          isScrolling = true;
          const targetSection = getTargetSection();
          scrollToSection(targetSection);
        }, 300); // Adjust the timeout to match the desired delay before snapping (in ms)
      }
    });
  });
  