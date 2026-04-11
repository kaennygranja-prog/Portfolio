// ============================================
// KAENNY RIBEIRO GRANJA - Portfolio JS
// Topbar scroll, mobile menu, ring animations
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // --- Topbar scroll ---
    const topbar = document.getElementById('topbar');

    window.addEventListener('scroll', () => {
        topbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // --- Mobile Menu ---
    const menuBtn = document.getElementById('menuBtn');
    const mobileOverlay = document.getElementById('mobileOverlay');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open');
        mobileOverlay.classList.toggle('open');
        document.body.style.overflow = mobileOverlay.classList.contains('open') ? 'hidden' : '';
    });

    mobileOverlay.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('open');
            mobileOverlay.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // --- Active nav link ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-desktop a');

    function updateActiveNav() {
        let current = '';
        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - 150) {
                current = sec.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // --- Reveal on Scroll ---
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('[data-anim]').forEach((el, i) => {
        el.style.transitionDelay = (i % 3) * 0.15 + 's';
        revealObserver.observe(el);
    });

    // --- Skill Ring Animation ---
    const circumference = 2 * Math.PI * 52; // r=52

    const ringObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target.querySelector('.ring-fill');
                if (fill) {
                    const percent = parseInt(fill.getAttribute('data-percent'));
                    const offset = circumference - (circumference * percent / 100);
                    fill.style.strokeDashoffset = offset;
                }
                ringObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.skill-ring-card').forEach(card => {
        ringObserver.observe(card);
    });

    // --- Smooth Scroll ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
