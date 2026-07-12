// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mainNav.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', menuToggle.classList.contains('active'));
});

// Close mobile menu when a link is clicked
const navLinks = mainNav.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mainNav.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

// Form validation and submission
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

// Validation rules
const validationRules = {
    name: {
        required: true,
        minLength: 2,
        pattern: /^[a-zA-Z\s]+$/,
        errorMsg: 'Please enter a valid name (letters and spaces only, at least 2 characters)'
    },
    email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        errorMsg: 'Please enter a valid email address'
    },
    message: {
        required: true,
        minLength: 10,
        errorMsg: 'Please enter at least 10 characters in your message'
    }
};

// Validate individual field
function validateField(fieldName, value) {
    const rules = validationRules[fieldName];
    
    if (!rules) return true;
    
    if (rules.required && value.trim() === '') {
        return false;
    }
    
    if (value.trim() && rules.minLength && value.trim().length < rules.minLength) {
        return false;
    }
    
    if (value.trim() && rules.pattern && !rules.pattern.test(value.trim())) {
        return false;
    }
    
    return true;
}

// Show error message
function showError(fieldName, message) {
    const field = document.getElementById(fieldName);
    const errorElement = document.getElementById(`${fieldName}-error`);
    
    field.classList.add('error');
    field.classList.remove('success');
    errorElement.textContent = message;
}

// Clear error message
function clearError(fieldName) {
    const field = document.getElementById(fieldName);
    const errorElement = document.getElementById(`${fieldName}-error`);
    
    field.classList.remove('error');
    field.classList.add('success');
    errorElement.textContent = '';
}

// Real-time validation on blur
Object.keys(validationRules).forEach(fieldName => {
    const field = document.getElementById(fieldName);
    if (field) {
        field.addEventListener('blur', () => {
            if (field.value.trim() !== '') {
                if (validateField(fieldName, field.value)) {
                    clearError(fieldName);
                } else {
                    showError(fieldName, validationRules[fieldName].errorMsg);
                }
            } else {
                field.classList.remove('error', 'success');
                document.getElementById(`${fieldName}-error`).textContent = '';
            }
        });
    }
});

// Form submission
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const eventType = document.getElementById('event-type').value;
    const message = document.getElementById('message').value;
    
    let isValid = true;
    
    // Validate all required fields
    ['name', 'email', 'message'].forEach(fieldName => {
        if (!validateField(fieldName, document.getElementById(fieldName).value)) {
            showError(fieldName, validationRules[fieldName].errorMsg);
            isValid = false;
        }
    });
    
    if (!isValid) {
        formStatus.className = 'form-status error';
        formStatus.textContent = 'Please fix the errors above before submitting.';
        return;
    }
    
    // Clear previous status
    formStatus.className = 'form-status';
    formStatus.innerHTML = '<span style="opacity: 0.7;">Sending your brief...</span>';
    
    // Simulate sending (in production, replace with actual API call)
    try {
        // Replace this with your actual form submission endpoint
        const formData = {
            name,
            email,
            eventType,
            message,
            timestamp: new Date().toISOString()
        };
        
        // Log form data (for testing)
        console.log('Form data to be sent:', formData);
        
        // Simulated API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Success
        formStatus.className = 'form-status success';
        formStatus.innerHTML = '✓ Your brief has been sent successfully! We\'ll get back to you within 24 hours.';
        
        // Reset form
        contactForm.reset();
        ['name', 'email', 'message'].forEach(fieldName => {
            const field = document.getElementById(fieldName);
            field.classList.remove('error', 'success');
            document.getElementById(`${fieldName}-error`).textContent = '';
        });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
            formStatus.className = 'form-status';
            formStatus.textContent = '';
        }, 5000);
        
    } catch (error) {
        console.error('Form submission error:', error);
        formStatus.className = 'form-status error';
        formStatus.textContent = 'There was an error sending your brief. Please try again.';
    }
});

// Smooth scroll for navigation links (for browsers that don't support CSS scroll-behavior)
if (!CSS.supports('scroll-behavior', 'smooth')) {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}

// Add page load animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

console.log('Femi Lion Entertainment - Website Script Loaded');