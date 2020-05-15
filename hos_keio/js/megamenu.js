$(function () {
  // ①マウスをボタンに乗せた際のイベントを設定
  $(".wrap li").hover(
    function () {
      // ②乗せたボタンに連動したメガメニューをスライドで表示させる
      $(this).find(".megaColumn").stop().slideDown();
      $(this).find(".megaFooter").stop().slideDown();

      // ③マウスをボタンから離した際のイベントを設定
    },
    function () {
      // ④マウスを離したらメガメニューをスライドで非表示にする
      $(this).find(".megaColumn").stop().slideUp();
      $(this).find(".megaFooter").stop().slideUp();
    }
  );
});
