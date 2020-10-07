// results
$(function () {
  var mySwiper = new Swiper(".swiper-container", {
    speed: 400,
    spaceBetween: 40,
    // loop: true,
    // loopedSlides: 6,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // ページネーション
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    // 自動再生
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 1.5,
        spaceBetween: 24,
      },
    },
  });
});
