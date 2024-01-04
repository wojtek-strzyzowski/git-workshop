document.addEventListener("DOMContentLoaded", function() {
    // Animation für Überschriften mit der Klasse 'animated-heading'
    gsap.from(".animated-heading", { opacity: 0, y: 20, duration: 1, delay: 0.5, ease: "power4.out" });
});

