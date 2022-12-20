// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Animation when Scroll
const callback = function (entries) {
  entries.forEach((entry) => {
    console.log(entry);

    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fadeIn");
    } else {
      entry.target.classList.remove("animate-fadeIn");
    }
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".js-show-on-scroll");
targets.forEach(function (target) {
  target.classList.add("opacity-0");
  observer.observe(target);
});

