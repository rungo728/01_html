$(function () {
  $(function() {

    let $header = $( '#js-header' );

    // smoothscroll
    // #から始まるURLがクリックされた時
    $('a[href^="#"]').click(function() {
      // 移動速度を指定（ミリ秒）
      let speed = 300;
      // hrefで指定されたidを取得
      let id = $(this).attr("href");
      // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
      let target = $("#" == id ? "html" : id);
      // ページのトップを基準にターゲットの位置を取得
      let position = $(target).offset().top;
      // ターゲットの位置までspeedの速度で移動
      $("html, body").animate(
        {
          scrollTop: position - $header.outerHeight()
        },
        speed
      );
      return false;
    });

    // navigation
    $( '#js-toggle' ).on( 'click', function(e) {
      e.preventDefault();
      $header.toggleClass( 'add-active' );
    });
    $( '.js-navLink, #js-overlay' ).on( 'click', function(e) {
      e.preventDefault();
      $header.removeClass( 'add-active' );
    });
    // ここの意味があまり理解できてない
    let pcWidth = window.matchMedia( 'screen and (min-width: 769px)' );
    function checkBreakPoint() {
      if( pcWidth.matches ) {
        $header.removeClass( 'add-active' );
      }
    }
    pcWidth.addListener( checkBreakPoint );
    checkBreakPoint();

    // header
    $( window ).on( 'scroll', function() {
      if( $( this ).scrollTop() > $( '#js-hero' ).outerHeight() ) {
        $( 'body' ).addClass( 'add-scrolled' );
      } else {
        $( 'body' ).removeClass( 'add-scrolled' );
      }
    });
    
  });
  
  
  // results

  let mySwiper = new Swiper(".swiper-container", {
    loop: true,
    speed: 400,
    // 自動再生
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    spaceBetween: 24,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    slidesPerView: 1,
    breakpoints: {
      // 768px以上の場合
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      // 980px以上の場合
      980: {
        slidesPerView: 3,
      },
      // 1200px以上の場合
      1200: {
        slidesPerView: 4,
      }
    }
  });
});
