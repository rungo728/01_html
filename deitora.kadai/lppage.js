// results
$(function () {
  var mySwiper = new Swiper(".swiper-container", {
    loop: true,
    speed: 400,
    // spaceBetween: 40,
    // 自動再生
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    spaceBetween: 40,
    slidesPerView: 3,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
});
