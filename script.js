document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeStyle = document.getElementById("theme-style");
    const themeIcon = document.getElementById("theme-icon");

    // Always load in light mode by default
    themeStyle.setAttribute("href", "style.css");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");  // Moon icon for light mode

    // Toggle theme on button click
    themeToggle.addEventListener("click", () => {
        const currentTheme = themeStyle.getAttribute("href");

        if (currentTheme === "style.css") {
            themeStyle.setAttribute("href", "style-dark.css");
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
        } else {
            themeStyle.setAttribute("href", "style.css");
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");
        }
    });
});
