// Vanilla JS way to listen for scrolling and checking if element is in viewport
document.addEventListener('DOMContentLoaded', (event) => {
    // Function to check if the element is in the viewport
    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    };

    // Function to fade in/out elements based on their presence in the viewport
    const scrollFade = () => {
        document.querySelectorAll('.animate-box').forEach((el) => {
            if (isElementInViewport(el)) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });
    };

    // Run the fade function on scroll and initially once
    window.addEventListener('scroll', scrollFade);
    scrollFade(); // Trigger once on load if any are in view initially
});
