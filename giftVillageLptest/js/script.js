$(function() {
  
  // wowjsフワッとさせるアニメーション
  new WOW().init()

  // スクロール検知
  $(window).on("scroll", function() {
    // トップからスクロールしてjs-topを超えたら
    if ($(this).scrollTop() > $('#js-top').outerHeight() ) {
      // is-showクラスをつける
      $('.totop').addClass( 'is-show' );
    } else {
      // js-topより上に戻ったらis-showクラスを削除
      $('.totop').removeClass( 'is-show' );
    }
  });
  
  // smoothscroll
  // #から始まるURLがクリックされた時
  $('a[href^="#"]').click(function() {
    // 移動速度を指定（ミリ秒）
    let speed = 500;
    // hrefで指定されたidを取得
    let id = $(this).attr("href");
    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    let target = $("#" == id ? "html" : id);
    // ページのトップを基準にターゲットの位置を取得
    let position = $(target).offset().top;
    // ターゲットの位置までspeedの速度で移動
    $("html, body").animate(
      {
        scrollTop: position 
      
      },
      speed , 'swing'
    );
    return false;
  });
})