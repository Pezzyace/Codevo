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



// NAV CHANGE ON SCROLL
const navHeight = navBar.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  const scrollHeight = window.scrollY;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  }else {
    navBar.classList.remove("fix-nav");
  }
})


// SCROLL TO ON CLICK
const links = [...document.querySelectorAll('scroll-link')];

links.map(link => {
  if(!link) return;
  link.addEventListener("click", e => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);

    const el = document.getElementById(id);
    let position = el.offsetTop - navHeight;

    window,scrollTo({
      top: position,
      left: 0,
    });

    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  });
});

gsap.from('.logo', {opacity: 0, duration: 1, delay: 0.5, y: -10});
gsap.from('.hamburger', {opacity: 0, duration: 1, delay: 1, x: 20});
gsap.from('.hero-img', {opacity: 0, duration: 1, delay: 1.5, x: 200});
gsap.from('.hero-content h2', {opacity: 0, duration: 1, delay: 2, y: -50});
gsap.from('.hero-content h1', {opacity: 0, duration: 1, delay: 2.5, y: -45});
gsap.from('.hero-content a', {opacity: 0, duration: 1, delay: 3.5, y: 50});