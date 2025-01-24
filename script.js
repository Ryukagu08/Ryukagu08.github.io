// Select elements
const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeStyle = document.getElementById('theme-style');

// Function to toggle theme
function toggleTheme() {
    const currentTheme = themeStyle.getAttribute('href') === 'style.css' ? 'light' : 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Update the stylesheet
    themeStyle.setAttribute('href', newTheme === 'light' ? 'style.css' : 'style-dark.css');

    // Update the icon
    themeIcon.className = newTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';

    // Save the theme to localStorage
    localStorage.setItem('theme', newTheme);
}

// Function to load the saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';

    // Apply the saved theme
    themeStyle.setAttribute('href', savedTheme === 'light' ? 'style.css' : 'style-dark.css');
    themeIcon.className = savedTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Event listener for theme toggle button
themeToggleButton.addEventListener('click', toggleTheme);

// Load theme on page load
document.addEventListener('DOMContentLoaded', loadTheme);
