const changeThemeBtn = document.querySelector("#change-theme");

// Verify if exist the preference for the dark mode saved on localStorage
if (localStorage.getItem("dark")) document.body.classList.add("dark");

// Toggle dark mode
const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
}

// Load light or dark mode
changeThemeBtn.addEventListener("change", () => {
    toggleDarkMode();

    // Save or remove dark mode
    localStorage.removeItem("dark");

    if (document.body.classList.contains("dark")) localStorage.setItem("dark", 1);
});

