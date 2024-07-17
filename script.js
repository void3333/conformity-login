document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    } else {
        body.classList.add('theme-dark'); // Default theme
    }

    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('theme-dark')) {
            body.classList.remove('theme-dark');
            body.classList.add('theme-light');
            localStorage.setItem('theme', 'theme-light');
        } else {
            body.classList.remove('theme-light');
            body.classList.add('theme-dark');
            localStorage.setItem('theme', 'theme-dark');
        }
    });

    document.getElementById('login-form').addEventListener('submit', async function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('error-message');

        errorMessage.style.display = 'none';

        try {
            const response = await fetch('https://your-backend-url.com/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            // Handle successful login
            console.log('Login successful:', data);
            // Redirect or update the UI accordingly
        } catch (error) {
            errorMessage.textContent = error.message;
            errorMessage.style.display = 'block';
        }
    });
});
