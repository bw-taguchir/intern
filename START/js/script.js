document.addEventListener("DOMContentLoaded", function () {
  // ハンバーガーメニュー（SP）
  var btnMenu = document.getElementById("js-btn-menu");
  var gnav = document.querySelector(".gnav");

  btnMenu.addEventListener("click", function () {
    btnMenu.classList.toggle("active");
    gnav.classList.toggle("show");

    if (gnav.style.display === "block") {
      gnav.style.display = "none";
    } else {
      gnav.style.display = "block";
    }
  });

  document.addEventListener("click", function (e) {
    if (!gnav.contains(e.target) && !btnMenu.contains(e.target)) {
      if (gnav.classList.contains("show")) {
        gnav.classList.remove("show");
        btnMenu.classList.toggle("active");

        if (gnav.style.display === "block") {
          gnav.style.display = "none";
        } else {
          gnav.style.display = "block";
        }
      }
    }
  });
});
