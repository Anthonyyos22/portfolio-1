document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Mobile navigation toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', navLinks.classList.contains('active'));
    });
    
    // Image gallery functionality
    const initGallery = () => {
        const thumbs = document.querySelectorAll('.thumb');
        const slides = document.querySelectorAll('.slide');
        
        if (thumbs.length === 0 || slides.length === 0) return;
        
        thumbs.forEach(thumb => {
            thumb.addEventListener('click', function() {
                const targetIndex = parseInt(this.getAttribute('data-target'));
                
                // Update active states
                thumbs.forEach(t => t.classList.remove('active'));
                slides.forEach(s => s.classList.remove('active'));
                
                this.classList.add('active');
                slides[targetIndex].classList.add('active');
            });
        });
    };
    
    initGallery();
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    });
    
    // Add animation to tech cards on scroll
    const animateOnScroll = () => {
        const techCards = document.querySelectorAll('.tech-card');
        
        techCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initialize tech cards with hidden state
    document.querySelectorAll('.tech-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});