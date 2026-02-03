// Main JavaScript functionality for Goti Adarian website

document.addEventListener('DOMContentLoaded', function () {
    initNavigation();
    initHeroSlider();
    initDonationForm();
    initAnimations();
    initSmoothScrolling();
    updateActiveNavigation();
    initLanguageSwitcher();
    initBackToTop();
    handleImageErrors();
});

/* =========================
   Navigation functionality
========================= */
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (!navToggle || !navMenu) return;

    // Toggle menu
    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');

        const icon = navToggle.querySelector('i');
        if (icon) {
            icon.className = navMenu.classList.contains('active')
                ? 'fas fa-times'
                : 'fas fa-bars';
        }
    });

    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function () {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                if (icon) icon.className = 'fas fa-bars';
            }
        });
    });

    // Close menu on ESC
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            if (icon) icon.className = 'fas fa-bars';
        }
    });
}

/* =========================
   Hero slider
========================= */
function initHeroSlider() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    const slideImages = [
        'https://images.unsplash.com/photo-1612619695468-83053c3ab53e?w=1080',
        'https://images.unsplash.com/photo-1617131313439-6c9197dcd84c?w=1080',
        'https://images.unsplash.com/photo-1618675367337-d105341beb90?w=1080'
    ];

    let currentSlide = 0;

    slideImages.forEach((src, index) => {
        const slide = document.createElement('div');
        slide.className = 'hero-bg';
        slide.style.backgroundImage = `url(${src})`;
        slide.style.opacity = index === 0 ? '1' : '0';
        heroSection.insertBefore(slide, heroSection.firstChild);
    });

    setInterval(() => {
        const slides = document.querySelectorAll('.hero-bg');
        slides[currentSlide].style.opacity = '0';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.opacity = '1';
    }, 5000);
}

/* =========================
   Donation form
========================= */
function initDonationForm() {
    const donateForm = document.getElementById('donateForm');
    if (!donateForm) return;

    const amountButtons = document.querySelectorAll('.amount-btn');
    const customAmountInput = document.getElementById('customAmount');

    amountButtons.forEach(button => {
        button.addEventListener('click', function () {
            amountButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            if (customAmountInput) {
                customAmountInput.value = this.dataset.amount;
            }
        });
    });

    if (customAmountInput) {
        customAmountInput.addEventListener('input', () => {
            amountButtons.forEach(btn => btn.classList.remove('active'));
        });
    }

    donateForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for your support. Please use the bank details shown.');
        this.reset();
        amountButtons.forEach(btn => btn.classList.remove('active'));
    });
}

/* =========================
   Animations
========================= */
function initAnimations() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-card, .card')
        .forEach(el => observer.observe(el));
}

/* =========================
   Smooth scrolling
========================= */
function initSmoothScrolling() {
    document.addEventListener('click', function (e) {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;

        const target = document.getElementById(link.getAttribute('href').slice(1));
        if (!target) return;

        e.preventDefault();
        window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
        });
    });
}

/* =========================
   Active nav highlighting
========================= */
function updateActiveNavigation() {
    const current = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle(
            'active',
            link.getAttribute('href') === current
        );
    });
}

/* =========================
   Language switcher
========================= */
function initLanguageSwitcher() {
    const englishBtn = document.getElementById('englishBtn');
    const gujaratiBtn = document.getElementById('gujaratiBtn');

    if (!englishBtn || !gujaratiBtn) return;

    const setLang = lang => {
        document.querySelectorAll('[data-lang="en"]').forEach(el => el.style.display = lang === 'en' ? '' : 'none');
        document.querySelectorAll('[data-lang="gu"]').forEach(el => el.style.display = lang === 'gu' ? '' : 'none');
        localStorage.setItem('language', lang);
    };

    setLang(localStorage.getItem('language') || 'en');

    englishBtn.onclick = () => setLang('en');
    gujaratiBtn.onclick = () => setLang('gu');
}

/* =========================
   Back to top
========================= */
function initBackToTop() {
    const btn = document.createElement('button');
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    btn.className = 'back-to-top';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        btn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* =========================
   Image fallback
========================= */
function handleImageErrors() {
    document.querySelectorAll('img').forEach(img => {
        img.onerror = () => img.style.display = 'none';
    });
}
