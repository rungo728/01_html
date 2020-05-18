$(function () {
  /*クリックイベント*/
  $(".tab_btn").on("click", function () {
    /* 一旦.tab_itemからactive-itemを外す */
    $(".tab_item").removeClass("active-item");
    /* クリックした.tab_btnに対応する.tab_itemにactive-itemをつける */
    $($(this).attr("href")).addClass("active-item");
    //以下２行を追加
    // 現在のactive-btnクラスを削除
    $(".tab_btn").removeClass("active-btn");
    // 選択されたタブ（自分自身）にactive-btnクラスを追加
    $(this).addClass("active-btn");

    return false;
  });
});
