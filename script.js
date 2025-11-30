// Login form handling
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const message = document.getElementById('message');
            
            // Simple validation for demo purposes
            if (username === 'admin' && password === 'password') {
                message.style.color = 'green';
                message.textContent = 'Login successful! Redirecting...';
                // In a real application, you would redirect to a dashboard or home page
                // setTimeout(() => {
                    window.location.href = 'index.html';
                // }, 2000);
            } else {
                message.style.color = 'red';
                message.textContent = 'Invalid username or password.';
            }
        });
    }
});

// Smooth scrolling for anchor links (if needed)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add any additional interactivity here
