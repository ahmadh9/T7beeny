const runawayButtons = document.querySelectorAll('.runaway');

runawayButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        // Get window dimensions and button dimensions
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const buttonWidth = button.offsetWidth;
        const buttonHeight = button.offsetHeight;

        // Random X and Y positions within the window, avoiding edges
        const randomX = Math.floor(Math.random() * (windowWidth - buttonWidth - 20)) + 10;
        const randomY = Math.floor(Math.random() * (windowHeight - buttonHeight - 20)) + 10;

        // Apply the new position with smooth transition
        button.style.transition = 'top 0.3s ease, left 0.3s ease';
        button.style.position = 'absolute';
        button.style.top = `${randomY}px`;
        button.style.left = `${randomX}px`;
    });
});
