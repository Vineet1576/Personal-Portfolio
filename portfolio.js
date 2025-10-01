// portfolio.js
// JS for interactive features across all portfolio pages

document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for navigation links (single page)
    document.querySelectorAll('nav ul li a').forEach(function (link) {
        link.addEventListener('click', function (e) {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const section = document.querySelector(href);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Tooltip show/hide for social icons (index.html)
    document.querySelectorAll('.custom-tooltip').forEach(function (tooltip) {
        const parent = tooltip.parentElement;
        if (parent) {
            parent.addEventListener('mouseover', function () {
                tooltip.style.opacity = '1';
            });
            parent.addEventListener('mouseout', function () {
                tooltip.style.opacity = '0';
            });
        }
    });

    // Skills bar animation (skills.html)
    document.querySelectorAll('.bar').forEach(function (bar) {
        bar.style.width = '0';
        setTimeout(function () {
            if (bar.classList.contains('html')) bar.style.width = '90%';
            if (bar.classList.contains('css')) bar.style.width = '85%';
            if (bar.classList.contains('js')) bar.style.width = '80%';
            if (bar.classList.contains('react')) bar.style.width = '75%';
            if (bar.classList.contains('vscode')) bar.style.width = '70%';
            if (bar.classList.contains('git')) bar.style.width = '80%';
        }, 500);
    });

    // Project card hover effect (portfolio.html)
    document.querySelectorAll('.project-card').forEach(function (card) {
        card.addEventListener('mouseover', function () {
            card.style.transform = 'scale(1.03)';
            card.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
        });
        card.addEventListener('mouseout', function () {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '';
        });
    });
});

// Mobile nav toggle logic
        const navToggle = document.getElementById('navToggle');
        const mobileNav = document.getElementById('mobileNav');
        let navOpen = false;
        navToggle.addEventListener('click', function() {
            navOpen = !navOpen;
            if (navOpen) {
                mobileNav.classList.remove('hidden');
            } else {
                mobileNav.classList.add('hidden');
            }
        });
        // Hide mobile nav on resize to md and above
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 768) {
                mobileNav.classList.add('hidden');
                navOpen = false;
            }
        });
        // Optional: Hide mobile nav when clicking a link
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.add('hidden');
                navOpen = false;
            });
        });