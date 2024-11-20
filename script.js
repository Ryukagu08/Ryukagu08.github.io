document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeStyle = document.getElementById("theme-style");
    const themeIcon = document.getElementById("theme-icon");

    themeToggle.addEventListener("click", () => {
        const currentTheme = themeStyle.getAttribute("href");

        if (currentTheme === "style.css") {
            // Switch to dark theme
            themeStyle.setAttribute("href", "style-dark.css");
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");  // Sun appears in dark mode
        } else {
            // Switch to light theme
            themeStyle.setAttribute("href", "style.css");
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");  // Moon appears in light mode
        }
    });
});