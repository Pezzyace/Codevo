const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");
const navBar = document.querySelector(".nav")



navOpen.addEventListener('click', () => {
  menu.classList.add("show");
  document.body.classList.add("show");
  navBar.classList.add("show");
})
 
navClose.addEventListener('click', () => {
  menu.classList.remove("show");
  document.body.classList.remove("show");
  navBar.classList.remove("show");
})