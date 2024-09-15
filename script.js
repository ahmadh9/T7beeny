const runawayButtons = document.querySelectorAll('.runaway');

runawayButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        const randomX = Math.floor(Math.random() * window.innerWidth);
        const randomY = Math.floor(Math.random() * window.innerHeight);
        button.style.position = 'absolute';
        button.style.top = `${randomY}px`;
        button.style.left = `${randomX}px`;
    });
});
