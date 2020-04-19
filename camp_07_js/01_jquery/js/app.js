// 名前に意味はありません。自由です。
$(document).ready(function () {
  // alert(1); //中身は今回適当に決めただけです
  // id="a"に対してクリックされたら
  $("#a").on("click", function () {
    // ここに書いていく
    $("#a").html("クリックされた");
    $("#a").css("color", "red");
    // $("#a").fadeOut(5000); //5秒
    // // fadeInは消えている要素にしか効かない
    // $("#a").fadeIn(5000); //5秒
    $("#a").append("<p>pタグが入りました</p>");
    // clickの閉じタグ、消しちゃダメ
    $(".b").hide();
    $(".b").fadeIn(2000); //2秒
  });
  // これは$(document).readyの閉じタグ
});
