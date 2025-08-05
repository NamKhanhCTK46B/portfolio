// Font loading optimization
function optimizeFontLoading() {
    // Check if fonts are loaded
    if ('fonts' in document) {
        Promise.all([
            document.fonts.load('300 16px Poppins'),
            document.fonts.load('400 16px Poppins'),
            document.fonts.load('500 16px Poppins'),
            document.fonts.load('600 16px Poppins'),
            document.fonts.load('700 16px Poppins'),
            document.fonts.load('800 16px Poppins')
        ]).then(() => {
            document.documentElement.classList.add('fonts-loaded');
            console.log('All fonts loaded successfully');
        }).catch((error) => {
            console.warn('Font loading failed, using fallback fonts:', error);
            document.documentElement.classList.add('fonts-fallback');
        });
    } else {
        // Fallback for browsers that don't support Font Loading API
        setTimeout(() => {
            document.documentElement.classList.add('fonts-loaded');
        }, 1000);
    }
}

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const skillBars = document.querySelectorAll('.skill-progress');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('translate-x-0');
    mobileMenu.classList.toggle('-translate-x-full');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('-translate-x-full');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('#header');
    if (window.scrollY > 100) {
        header.classList.add('bg-white/98', 'shadow-lg');
        header.classList.remove('bg-white/95');
    } else {
        header.classList.remove('bg-white/98', 'shadow-lg');
        header.classList.add('bg-white/95');
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            
            // Animate skill bars when skills section is visible
            if (entry.target.id === 'skills') {
                animateSkillBars();
            }
        }
    });
}, observerOptions);

// Observe all sections for fade-in animation
sections.forEach(section => {
    observer.observe(section);
});

// Animate skill bars
function animateSkillBars() {
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 200);
    });
}

// Form submission handling
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const company = contactForm.querySelectorAll('input[type="text"]')[1].value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !company || !message) {
            showNotification('Vui lòng điền đầy đủ thông tin!', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Đang gửi tin nhắn...', 'info');
        
        setTimeout(() => {
            showNotification('Tin nhắn đã được gửi thành công! Cảm ơn bạn đã quan tâm.', 'success');
            contactForm.reset();
        }, 2000);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type} fixed top-5 right-5 z-50 max-w-sm`;
    notification.innerHTML = `
        <div class="bg-white border-l-4 border-${type === 'success' ? 'green' : type === 'error' ? 'red' : 'blue'}-500 p-4 shadow-lg rounded-lg">
            <div class="flex items-center">
                <div class="flex-shrink-0">
                    <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'} text-${type === 'success' ? 'green' : type === 'error' ? 'red' : 'blue'}-500"></i>
                </div>
                <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">${message}</p>
                </div>
                <div class="ml-auto pl-3">
                    <button class="notification-close text-gray-400 hover:text-gray-600">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('#home');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Project card hover effects
const projectCards = document.querySelectorAll('.bg-white.rounded-2xl');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Skill item hover effects
const skillItems = document.querySelectorAll('.bg-white.p-6.rounded-xl');
skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-8px) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});

// Education item hover effects
const educationItems = document.querySelectorAll('.bg-gray-50.p-8.rounded-2xl');
educationItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-8px)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
    });
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-primary');
        link.classList.add('text-gray-700');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.remove('text-gray-700');
            link.classList.add('text-primary');
        }
    });
});

// Add graduation countdown
function updateGraduationCountdown() {
    const graduationDate = new Date('2026-12-30');
    const now = new Date();
    const timeLeft = graduationDate - now;
    
    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        
        const countdownElement = document.querySelector('.text-accent.font-semibold.text-sm');
        if (countdownElement) {
            countdownElement.textContent = `Tốt nghiệp sau ${days} ngày`;
        }
    }
}

// Update countdown every hour
setInterval(updateGraduationCountdown, 3600000);
updateGraduationCountdown();

// Add custom styles for Tailwind
const style = document.createElement('style');
style.textContent = `
    .animate-fade-in {
        animation: fadeIn 0.6s ease-in-out;
    }
    
    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .notification {
        animation: slideIn 0.3s ease-out;
    }
    
    @keyframes slideIn {
        0% {
            transform: translateX(100%);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    /* Font loading states */
    .fonts-loaded {
        font-display: swap;
    }
    
    .fonts-fallback {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }
`;
document.head.appendChild(style);

// Loading screen
window.addEventListener('load', () => {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.classList.add('hidden');
    }
});

// Add loading screen to HTML if not present
if (!document.querySelector('.loading')) {
    const loading = document.createElement('div');
    loading.className = 'loading fixed inset-0 bg-white z-50 flex items-center justify-center';
    loading.innerHTML = '<div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>';
    document.body.appendChild(loading);
}

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize font loading optimization
    optimizeFontLoading();
    
    // Add graduation animation
    const graduationElement = document.querySelector('.text-accent.font-semibold.text-sm');
    if (graduationElement) {
        graduationElement.style.animation = 'pulse 2s infinite';
    }
    
    console.log('Portfolio Tailwind CSS loaded successfully!');
});

// Add pulse animation for graduation text
const pulseStyle = document.createElement('style');
pulseStyle.textContent = `
    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.7;
        }
    }
`;
document.head.appendChild(pulseStyle); 