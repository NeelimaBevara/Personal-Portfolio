// Get the toggle checkbox
const toggleCheckbox = document.getElementById("theme-toggle");

// Function to switch themes
const switchTheme = () => {
  // Get the current theme from localStorage or default to light mode
  const currentTheme = localStorage.getItem("theme") || "light";

  // Determine the new theme
  const newTheme = currentTheme === "light" ? "dark" : "light";

  // Remove the current theme class and add the new one
  document.body.classList.remove(currentTheme);
  document.body.classList.add(newTheme);

  // Save the new theme to localStorage
  localStorage.setItem("theme", newTheme);

  // Update the checkbox state
  if (toggleCheckbox) {
    toggleCheckbox.checked = newTheme === "dark";
  }
};

// Apply the saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";

  // Apply the saved theme class to the body
  if (!document.body.classList.contains(savedTheme)) {
    document.body.classList.add(savedTheme);
  }

  // Set the checkbox state based on the saved theme
  if (toggleCheckbox) {
    toggleCheckbox.checked = savedTheme === "dark";
  }
});

// Set up the toggle checkbox event listener
if (toggleCheckbox) {
  toggleCheckbox.addEventListener("change", switchTheme);
}
