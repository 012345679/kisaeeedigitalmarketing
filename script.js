// Smooth Scroll
document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Button Animation
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("mouseover", () => {
    btn.style.transform = "scale(1.1)";
  });

  btn.addEventListener("mouseout", () => {
    btn.style.transform = "scale(1)";
  });
});