$("#omikuji").on("click", function () {
  // 乱数１〜５
  const r = Math.ceil(Math.random() * 5);
  //if文処理
  let view = "";
  if (r == 1) {
    view = '<img src="img/daikichi.png" alt="">';
  }
  if (r == 2) {
    view = "中吉";
  }
  if (r == 3) {
    view = "小吉";
  }
  if (r == 4) {
    view = "吉";
  }
  if (r == 5) {
    view = "凶";
  }
  //表示処理
  $("#echo").html(view);
});