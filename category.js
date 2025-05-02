document.querySelectorAll(".category-lunch img").forEach((img) => {
  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.1)";
    img.style.transition = "transform 0.3s ease-in-out";
  });
  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
  });
});
