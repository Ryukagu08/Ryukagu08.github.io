// Select elements
const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeStyle = document.getElementById('theme-style');

// Function to switch theme
function switchTheme(theme) {
    if (theme === 'dark') {
        themeStyle.setAttribute('href', 'style-dark.css');
        themeIcon.classList.replace('fa-moon', 'fa-sun'); // Change icon to sun
    } else {
        themeStyle.setAttribute('href', 'style.css');
        themeIcon.classList.replace('fa-sun', 'fa-moon'); // Change icon to moon
    }
}

// Event listener for theme toggle button
themeToggleButton.addEventListener('click', () => {
    // Determine current theme
    const currentTheme = themeStyle.getAttribute('href') === 'style.css' ? 'light' : 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Apply new theme
    switchTheme(newTheme);

    // Save new theme in localStorage
    localStorage.setItem('theme', newTheme);
});

// Check localStorage for saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light'; // Default to light theme
    switchTheme(savedTheme);
});
