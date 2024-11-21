document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeStyle = document.getElementById("theme-style");
    const themeIcon = document.getElementById("theme-icon");

    // Default to light mode if no theme is stored
    let savedTheme = localStorage.getItem("theme") || "style.css";
    themeStyle.setAttribute("href", savedTheme);

    // Set theme icon based on the saved theme
    if (savedTheme === "style.css") {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");  // Moon in light mode
    } else {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");  // Sun in dark mode
    }

    // Toggle theme on button click and save it in localStorage
    themeToggle.addEventListener("click", () => {
        const currentTheme = themeStyle.getAttribute("href");

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
    });
});
