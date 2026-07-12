// --- 1. LOGIN VALIDATION & USERNAME PASSING ---
const loginForm = document.getElementById('loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop the page from standard reloading
        
        const usernameInput = document.getElementById('loginUser').value.trim();
        const passwordInput = document.getElementById('loginPassword').value.trim();
        const errorBox = document.getElementById('error-message');

        // Reset error message box state
        errorBox.style.display = "none";
        errorBox.textContent = "";

        // Check if input fields are completely blank
        if (usernameInput === "" || passwordInput === "") {
            errorBox.style.display = "block";
            errorBox.textContent = "Error: Fields cannot be empty. Please fill in both lines.";
            return;
        }

        // Store the entered username temporarily in the browser session storage
        sessionStorage.setItem('loggedInUser', usernameInput);

        // Redirect seamlessly to the dashboard layout page
        window.location.href = "home.html";
    });
}

// --- 2. DISPLAYING THE NAME ON THE HOME PAGE ---
const userDisplay = document.getElementById('user-display');
if (userDisplay) {
    // Retrieve the saved text string from browser memory
    const savedName = sessionStorage.getItem('loggedInUser');
    
    if (savedName) {
        userDisplay.textContent = savedName;
    } else {
        userDisplay.textContent = "Guest";
    }
}

// --- 3. DARK MODE TOGGLE FUNCTIONALITY ---
const themeToggleBtn = document.getElementById('theme-toggle');

// Run this immediately on load to remember the user's preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    if (themeToggleBtn) themeToggleBtn.textContent = "☀️ Light Mode";
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        // Save choice into storage and alter button visuals
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.textContent = "☀️ Light Mode";
        } else {
            localStorage.setItem('theme', 'light');
            themeToggleBtn.textContent = "🌙 Dark Mode";
        }
    });
}