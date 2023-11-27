document.getElementById("darkModeToggle").addEventListener("click", function() {
    // Toggle the body class
    document.body.classList.toggle("dark-mode");

    // Store the user's preference in localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkModeEnabled", "true");
    } else {
        localStorage.removeItem("darkModeEnabled");
    }
});

// Check if user has previously enabled dark mode
if (localStorage.getItem("darkModeEnabled")) {
    document.body.classList.add("dark-mode");
}