document.addEventListener('DOMContentLoaded', function() {
  let pageTop = document.querySelector('.page-top');
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
      pageTop.style.display = 'flex';
    } else {
      pageTop.style.display = 'none';
    }
  });

  pageTop.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
