document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeStyle = document.getElementById("theme-style");
    const themeIcon = document.getElementById("theme-icon");

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem("theme") || "style.css"; // Default to light theme if not set
    themeStyle.setAttribute("href", savedTheme);
    if (savedTheme === "style-dark.css") {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun"); // Sun icon for dark mode
    } else {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon"); // Moon icon for light mode
    }

    // Toggle theme on button click
    themeToggle.addEventListener("click", () => {
        const currentTheme = themeStyle.getAttribute("href");

        if (currentTheme === "style.css") {
            themeStyle.setAttribute("href", "style-dark.css");
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
            localStorage.setItem("theme", "style-dark.css"); // Save dark theme
        } else {
            themeStyle.setAttribute("href", "style.css");
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");
            localStorage.setItem("theme", "style.css"); // Save light theme
        }
    });
});
