document.addEventListener('DOMContentLoaded', function () {
  var navToggle = document.querySelector('.hamburger');
  var navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }

  var fadeIns = document.querySelectorAll('.fade-in');
  if (fadeIns.length) {
    function revealFadeIns() {
      fadeIns.forEach(function (element) {
        if (element.getBoundingClientRect().top < window.innerHeight * 0.92) {
          element.classList.add('visible');
        }
      });
    }

    revealFadeIns();
    window.addEventListener('scroll', revealFadeIns, { passive: true });
  }
});
