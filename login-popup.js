/* for it to show everytime */

// window.addEventListener("DOMContentLoaded", () => {
//   document.getElementById("login").classList.remove("hidden");

//   document.getElementById("login-btn").addEventListener("click", () => {
//     document.getElementById("login").classList.add("hidden");
//   });
// });

/* for it to show only once */

window.addEventListener("DOMContentLoaded", () => {
  const hasVisited = localStorage.getItem("hasVisited");

  if (!hasVisited) {
    document.getElementById("login").classList.remove("hidden");
  }
  document.getElementById("login-btn").addEventListener("click", () => {
    localStorage.setItem("hasVisited", "true");
    document.getElementById("login").classList.add("hidden");
  });
});
