const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});


window.addEventListener('scroll', function() {
  var footer = document.getElementById('footer');
  var scrollPosition = window.scrollY;
  var windowHeight = window.innerHeight;
  var bodyHeight = document.body.scrollHeight;

  if (scrollPosition + windowHeight >= bodyHeight) {
    footer.style.bottom = '0';
  } else {
    footer.style.bottom = '-100px';
  }
});


