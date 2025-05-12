document.addEventListener("DOMContentLoaded", () => {
    const row = document.querySelector(".feature-row");
    if (!row) return;
  
    const originalContent = row.innerHTML;
    row.innerHTML += originalContent;
  
    const totalScroll = row.scrollWidth / 2;
    let scrollAmount = 0;
  
    function autoScroll() {
      scrollAmount += 1;
      row.style.transform = `translateX(-${scrollAmount}px)`;
  
      if (scrollAmount >= totalScroll) {
        scrollAmount = 0;
      }
  
      requestAnimationFrame(autoScroll);
    }
  
    autoScroll();
  });