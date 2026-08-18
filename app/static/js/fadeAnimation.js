const sections = document.querySelectorAll(".fade-section");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.15
  }
);

sections.forEach((section) => {
  observer.observe(section);
});


const themeToggle = document.getElementById("theme-toggle");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.documentElement.classList.remove("dark");
} else {
  document.documentElement.classList.add("dark");
}


function updateThemeIcon() {
  const isDark = document.documentElement.classList.contains("dark");

  if (isDark) {
    moonIcon.classList.remove("hidden");
    sunIcon.classList.add("hidden");
  } else {
    moonIcon.classList.add("hidden");
    sunIcon.classList.remove("hidden");
  }
}


updateThemeIcon();

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    isDark ? "dark" : "light"
  );
  updateThemeIcon();
});