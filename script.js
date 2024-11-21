document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeStyle = document.getElementById("theme-style");
    const themeIcon = document.getElementById("theme-icon");

    // Check if there's a saved theme in localStorage
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        themeStyle.setAttribute("href", savedTheme);
        if (savedTheme === "style.css") {
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");  // Moon in light mode
        } else {
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");  // Sun in dark mode
        }
    } else {
        // Default to light mode if there's no saved theme
        themeStyle.setAttribute("href", "style.css");
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");  // Moon in light mode
    }

    // Toggle theme on button click and save it in localStorage
    themeToggle.addEventListener("click", () => {
        const currentTheme = themeStyle.getAttribute("href");

        // Apply theme switch animation
        themeIcon.style.animation = "themeSwitch 0.5s ease-in-out";

        setTimeout(() => {
            if (currentTheme === "style.css") {
                themeStyle.setAttribute("href", "style-dark.css");
                themeIcon.classList.remove("fa-moon");
                themeIcon.classList.add("fa-sun");
                localStorage.setItem("theme", "style-dark.css");  // Save dark theme
            } else {
                themeStyle.setAttribute("href", "style.css");
                themeIcon.classList.remove("fa-sun");
                themeIcon.classList.add("fa-moon");
                localStorage.setItem("theme", "style.css");  // Save light theme
            }
        }, 500); // Duration of the theme change animation
    });
});
