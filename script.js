// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
    }
    
    lastScroll = currentScroll;
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe menu items
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
});

// Observe stat items
const statItems = document.querySelectorAll('.stat-item');
statItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
});

// Observe info items
const infoItems = document.querySelectorAll('.info-item');
infoItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
});

// Form submission
const contactForm = document.querySelector('.contact-form form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Simple validation
    if (name && email && message) {
        alert(`Thank you for your message, ${name}! We'll get back to you at ${email} soon.`);
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Smooth scroll for browsers that don't support CSS scroll-behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Counter animation for stats
const animateCounter = (element, target) => {
    let count = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
            element.textContent = target + (element.textContent.includes('+') ? '+' : '%');
            clearInterval(timer);
        } else {
            element.textContent = Math.ceil(count) + (element.textContent.includes('+') ? '+' : '%');
        }
    }, 20);
};

// Observe and animate stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const statValue = entry.target.querySelector('h4');
            const text = statValue.textContent;
            const num = parseInt(text.replace(/\D/g, ''));
            
            if (text.includes('%')) {
                animateCounter(statValue, 100);
            } else if (text.includes('K')) {
                let count = 0;
                const timer = setInterval(() => {
                    count++;
                    if (count >= num) {
                        statValue.textContent = num + 'K+';
                        clearInterval(timer);
                    } else {
                        statValue.textContent = count + 'K+';
                    }
                }, 30);
            } else {
                animateCounter(statValue, num);
            }
        }
    });
}, { threshold: 0.5 });

statItems.forEach(item => {
    statsObserver.observe(item);
});

// Add parallax effect to hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled * 0.002);
    }
});

// Menu Category Filtering
const categoryButtons = document.querySelectorAll('.category-btn');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const category = button.getAttribute('data-category');
        
        menuItems.forEach((item, index) => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 50);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(30px)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Testimonial Slider
let currentSlide = 0;
const testimonialTrack = document.querySelector('.testimonial-track');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

function updateSlider() {
    if (testimonialTrack && testimonialCards.length > 0) {
        const slideWidth = testimonialCards[0].offsetWidth + 32; // including gap
        testimonialTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        currentSlide = currentSlide > 0 ? currentSlide - 1 : testimonialCards.length - 1;
        updateSlider();
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        currentSlide = currentSlide < testimonialCards.length - 1 ? currentSlide + 1 : 0;
        updateSlider();
    });
}

// Auto-advance testimonials every 5 seconds
if (testimonialCards.length > 0) {
    setInterval(() => {
        currentSlide = currentSlide < testimonialCards.length - 1 ? currentSlide + 1 : 0;
        updateSlider();
    }, 5000);
}

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        if (email) {
            // Create success message
            const successMessage = document.createElement('div');
            successMessage.textContent = `✓ Thank you for subscribing! Check ${email} for confirmation.`;
            successMessage.style.cssText = `
                background: #27ae60;
                color: white;
                padding: 1rem 2rem;
                border-radius: 10px;
                margin-top: 1rem;
                animation: fadeInUp 0.5s ease;
                text-align: center;
            `;
            
            newsletterForm.appendChild(successMessage);
            newsletterForm.reset();
            
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        }
    });
}

// Offer Card Buttons
const offerButtons = document.querySelectorAll('.offer-card button');
offerButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const card = e.target.closest('.offer-card');
        const drinkName = card.querySelector('h3').textContent;
        
        // Create a notification
        const notification = document.createElement('div');
        notification.textContent = `✓ ${drinkName} added to your order!`;
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: linear-gradient(135deg, #6f4e37, #c7a17a);
            color: white;
            padding: 1.5rem 2rem;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            z-index: 10000;
            animation: slideInRight 0.5s ease;
            font-weight: 500;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.5s ease';
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    });
});

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    @keyframes fadeInUp {
        from {
            transform: translateY(20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Smooth reveal for gallery items
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }, Array.from(galleryItems).indexOf(entry.target) * 100);
            galleryObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

galleryItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'scale(0.9)';
    item.style.transition = 'all 0.5s ease';
    galleryObserver.observe(item);
});

// Feature cards animation
const featureCards = document.querySelectorAll('.feature-card');
const featureObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const index = Array.from(featureCards).indexOf(entry.target);
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 150);
            featureObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

featureCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    featureObserver.observe(card);
});

// Add active state to nav links based on scroll position
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active-link');
        }
    });
});

