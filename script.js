document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    // Ensure correct icon is set based on the theme
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "style-dark.css") {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    } else {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }

    // Toggle theme on button click
    themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");

        if (currentTheme === "style.css") {
            document.documentElement.setAttribute("data-theme", "style-dark.css");
            document.getElementById("theme-style").setAttribute("href", "style-dark.css");
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
            localStorage.setItem("theme", "style-dark.css");
        } else {
            document.documentElement.setAttribute("data-theme", "style.css");
            document.getElementById("theme-style").setAttribute("href", "style.css");
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");
            localStorage.setItem("theme", "style.css");
        }
    });
});
