document.addEventListener('DOMContentLoaded', () => {
    // Scroll-triggered animation
    gsap.from('.title-line', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out"
    });

    gsap.from('.hero-buttons', {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power3.out"
    });
});