// Main JavaScript functionality for Goti Adarian website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initHeroSlider();
    initForms();
    initAnimations();
    initSmoothScrolling();
    updateActiveNavigation();
    initLanguageSwitcher();
});

// Navigation functionality
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Change icon
            const icon = navToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-bars';
                }
            }
        });
    });
    
    // Escape key closes mobile menu
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-bars';
            }
        }
    });
}

// Hero slider functionality (for home page)
function initHeroSlider() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;
    
    const slideImages = [
        'https://images.unsplash.com/photo-1612619695468-83053c3ab53e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxMzQ2Njk4OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        'https://images.unsplash.com/photo-1617131313439-6c9197dcd84c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxMzQ2NzA1Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        'https://images.unsplash.com/photo-1618675367337-d105341beb90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxMzQ2NzA5Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
    ];
    
    let currentSlide = 0;
    
    // Create background slides
    slideImages.forEach((src, index) => {
        const slide = document.createElement('div');
        slide.className = `hero-bg ${index === 0 ? 'active' : ''}`;
        slide.style.backgroundImage = `url(${src})`;
        slide.style.opacity = index === 0 ? '1' : '0';
        heroSection.insertBefore(slide, heroSection.firstChild);
    });
    
    // Auto-advance slides
    setInterval(() => {
        const slides = document.querySelectorAll('.hero-bg');
        slides[currentSlide].style.opacity = '0';
        currentSlide = (currentSlide + 1) % slideImages.length;
        slides[currentSlide].style.opacity = '1';
    }, 5000);
}

// Form functionality
function initForms() {
    initDonationForm();
    initContactForm();
}

function initDonationForm() {
    const donateForm = document.getElementById('donateForm');
    if (!donateForm) return;
    
    const amountButtons = document.querySelectorAll('.amount-btn');
    const customAmountInput = document.getElementById('customAmount');
    
    // Handle preset amount buttons
    amountButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            amountButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Set the amount in the input field
            const amount = this.getAttribute('data-amount');
            if (customAmountInput) {
                customAmountInput.value = amount;
            }
        });
    });
    
    // Handle custom amount input
    if (customAmountInput) {
        customAmountInput.addEventListener('input', function() {
            // Remove active class from all preset buttons when typing custom amount
            amountButtons.forEach(btn => btn.classList.remove('active'));
        });
    }
    
    // Handle donation form submission
    donateForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const donationData = {
            name: formData.get('name'),
            email: formData.get('email'),
            amount: formData.get('amount'),
            purpose: formData.get('purpose'),
            recurring: formData.get('recurring') === 'on'
        };
        
        // Validate form
        if (!donationData.name || !donationData.email || !donationData.amount || !donationData.purpose) {
            alert('Please fill in all required fields.');
            return;
        }
        
        if (donationData.amount <= 0) {
            alert('Please enter a valid donation amount.');
            return;
        }
        
        // Show confirmation
        const confirmMessage = `Thank you for your generous donation of ₹${donationData.amount}!\n\nDonor: ${donationData.name}\nPurpose: ${donationData.purpose}\n${donationData.recurring ? 'This will be a recurring monthly donation.' : ''}\n\nYou will be redirected to the payment gateway.`;
        
        if (confirm(confirmMessage)) {
            alert('Redirecting to payment gateway...');
            
            // Reset form
            this.reset();
            amountButtons.forEach(btn => btn.classList.remove('active'));
        }
    });
}

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const contactData = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        // Validate form
        if (!contactData.name || !contactData.email || !contactData.subject || !contactData.message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(contactData.email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Show success message
        alert(`Thank you for your message, ${contactData.name}! We will get back to you soon at ${contactData.email}.`);
        
        // Reset form
        this.reset();
    });
}

// Animation functionality
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .timeline-item, .festival-card, .belief-card, .ceremony-card, .news-card, .card');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.addEventListener('click', function(e) {
        const target = e.target.closest('a[href^="#"]');
        if (!target) return;
        
        e.preventDefault();
        const targetId = target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight || 0;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
}

// Update active navigation based on current page
function updateActiveNavigation() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        // Handle different page matching
        if (
            (currentPage === '/' || currentPage === '/index.html') && (href === '/' || href === 'index.html') ||
            currentPage.includes(href.replace('.html', '')) && href !== '/' && href !== 'index.html'
        ) {
            link.classList.add('active');
        }
    });
}

// Utility functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\+]?[1-9][\d]{0,15}$/;
    return re.test(phone.replace(/\s/g, ''));
}

// Handle image loading errors
function handleImageErrors() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            if (this.src.includes('faravahar')) {
                // Create a placeholder for Faravahar images
                const placeholder = document.createElement('div');
                placeholder.style.cssText = `
                    width: ${this.width || 60}px;
                    height: ${this.height || 60}px;
                    background: linear-gradient(135deg, var(--primary), #e6b800);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--secondary);
                    font-weight: bold;
                    font-size: ${(this.width || 60) / 4}px;
                `;
                placeholder.innerHTML = 'F';
                placeholder.title = 'Faravahar Symbol';
                
                this.parentNode.replaceChild(placeholder, this);
            }
        });
    });
}

// Initialize image error handling
document.addEventListener('DOMContentLoaded', handleImageErrors);

// Back to top functionality
function initBackToTop() {
    let backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: var(--primary);
        color: var(--primary-foreground);
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        display: none;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    `;
    
    document.body.appendChild(backToTopButton);
    
    // Show/hide back to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    // Back to top functionality
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize back to top
document.addEventListener('DOMContentLoaded', initBackToTop);

// Analytics tracking (for future implementation)
function trackEvent(eventName, data) {
    console.log('Event tracked:', eventName, data);
    // Future: integrate with Google Analytics or other tracking service
}

// Track phone clicks
document.addEventListener('click', function(e) {
    if (e.target.closest('a[href^="tel:"]')) {
        trackEvent('phone_click', { number: e.target.closest('a').href });
    }
    
    if (e.target.closest('a[href*="google.com/maps"]')) {
        trackEvent('address_click', {});
    }
});

// Language switcher functionality
function initLanguageSwitcher() {
    const englishBtn = document.getElementById('englishBtn');
    const gujaratiBtn = document.getElementById('gujaratiBtn');
    
    if (englishBtn && gujaratiBtn) {
        // Get current language from localStorage or default to English
        const currentLang = localStorage.getItem('language') || 'en';
        
        // Set initial state
        if (currentLang === 'gu') {
            switchToGujarati();
        } else {
            switchToEnglish();
        }
        
        englishBtn.addEventListener('click', function() {
            switchToEnglish();
            localStorage.setItem('language', 'en');
        });
        
        gujaratiBtn.addEventListener('click', function() {
            switchToGujarati();
            localStorage.setItem('language', 'gu');
        });
    }
}

function switchToEnglish() {
    const englishBtn = document.getElementById('englishBtn');
    const gujaratiBtn = document.getElementById('gujaratiBtn');
    
    if (englishBtn && gujaratiBtn) {
        englishBtn.classList.add('active');
        gujaratiBtn.classList.remove('active');
    }
    
    // Show English content, hide Gujarati
    document.querySelectorAll('[data-lang="en"]').forEach(el => {
        el.style.display = '';
    });
    document.querySelectorAll('[data-lang="gu"]').forEach(el => {
        el.style.display = 'none';
    });
}

function switchToGujarati() {
    const englishBtn = document.getElementById('englishBtn');
    const gujaratiBtn = document.getElementById('gujaratiBtn');
    
    if (englishBtn && gujaratiBtn) {
        englishBtn.classList.remove('active');
        gujaratiBtn.classList.add('active');
    }
    
    // Show Gujarati content, hide English
    document.querySelectorAll('[data-lang="en"]').forEach(el => {
        el.style.display = 'none';
    });
    document.querySelectorAll('[data-lang="gu"]').forEach(el => {
        el.style.display = '';
    });
}

console.log('Goti Adarian website initialized successfully');