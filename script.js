alert('Sementara Tidak Bisa Mengirim Pesan Melalui FORM.')
alert('Dimohon Buka Website Ini di Laptop atau di Komputer agar lebih Maksimal, Sedang PROSES Responsif Website.')

// Loaded Website
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

var swiper = new Swiper(".swiper", {
  effect: "cube",
  allowTouchMove: false,
  grabCursor: false,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  mousewheel: true,
});

swiper.slideMove -
  function (s, e) {
    console(s);
  };

function Navigate(indx) {
  for (let i of document.querySelectorAll(".links li"))
    i.classList.remove(".activeLink");
  Array.from(document.querySelectorAll(".links li"))[indx].classList.add(
    ".activeLink"
  );
  swiper.slideTo(indx, 1500, true);
}

if (window.innerWidth <= 768) {
  document.body.style.overflowX = 'auto';
  document.body.style.width = '1024px';
}
