(function () {
    const banner = document.getElementById('sub_nav');

    function toggleBanner() {
      if (window.scrollY <= 10) {
        banner.classList.remove('hidden');
      } else {
        banner.classList.add('hidden');
      }
    }

    toggleBanner();
    window.addEventListener('scroll', toggleBanner);
  })();

  document.querySelectorAll('.heart-icon').forEach(icon => {
  icon.addEventListener('click', (e) => {
    e.stopPropagation(); // 👈 stops bubbling
    e.preventDefault();  // 👈 stops link navigation
    icon.classList.toggle('active');
  });
});

document.querySelectorAll('.carousel-heart').forEach(icon => {
  icon.addEventListener('click', (e) => {
    e.stopPropagation(); // prevents carousel click issues
    icon.classList.toggle('active');
  });
});