const toggle = document.querySelector("#menu-toggle");
const menu = document.getElementById("slide-menu");
const closeBtn = document.getElementById("closebtn");

toggle.onclick = () => {
  menu.classList.add("active");
};

closeBtn.onclick = () => {
  menu.classList.remove("active");
};
