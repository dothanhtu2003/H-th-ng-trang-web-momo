document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links (ignore href="#" and missing targets)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return; // allow default behavior
            const id = href.slice(1);
            if (!id) return;
            const target = document.getElementById(id);
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Scroll reveal animations for all sections
    const sections = Array.from(document.querySelectorAll('section'));
    sections.forEach(sec => {
        sec.classList.add('reveal-base', 'reveal-up');
    });

    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });

    sections.forEach(sec => io.observe(sec));
});