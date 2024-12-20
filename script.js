themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    themeToggle.classList.toggle('active');
});

const backToTopButton = document.getElementById('backToTop');

// Écoute du défilement
window.addEventListener('scroll', () => {
    if (window.scrollY > 108) {
        backToTopButton.classList.add('show'); // Affiche le bouton
    } else {
        backToTopButton.classList.remove('show'); // Cache le bouton
    }
});

// Remonte la page lorsque l'utilisateur clique sur le bouton
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Animation fluide
    });
});
