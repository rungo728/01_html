$("#gu").on("click", function () {
  // 乱数１〜3
  var cpunum = Math.ceil(Math.random() * 3);
  //if文処理
  var view = "";
  var judge = "";

  if (cpunum == 1) {
    view = '<img src="img/gu.png" alt="">';
    judge = "ひきわけ";
  }
  if (cpunum == 2) {
    view = '<img src="img/cho1.png" alt="">';
    judge = "あなたの勝ち";
  }
  if (cpunum == 3) {
    view = '<img src="img/par.png" alt="">';
    judge = "あなたの負け";
  }
  //表示処理
  $("#pc").html(view);
  $("#result").html(judge);
});

$("#cho").on("click", function () {
  // 乱数１〜3
  var cpunum = Math.ceil(Math.random() * 3);
  //if文処理
  var view = "";
  var judge = "";

  if (cpunum == 1) {
    view = '<img src="img/gu.png" alt="">';
    judge = "あなたの負け";
  }
  if (cpunum == 2) {
    view = '<img src="img/cho1.png" alt="">';
    judge = "ひきわけ";
  }
  if (cpunum == 3) {
    view = '<img src="img/par.png" alt="">';
    judge = "あなたの勝ち";
  }
  //表示処理
  $("#pc").html(view);
  $("#result").html(judge);
});

$("#par").on("click", function () {
  // 乱数１〜3
  var cpunum = Math.ceil(Math.random() * 3);
  //if文処理
  var view = "";
  var judge = "";

  if (cpunum == 1) {
    view = '<img src="img/gu.png" alt="">';
    judge = "あなたの勝ち";
  }
  if (cpunum == 2) {
    view = '<img src="img/cho1.png" alt="">';
    judge = "あなたの負け";
  }
  if (cpunum == 3) {
    view = '<img src="img/par.png" alt="">';
    judge = "ひきわけ";
  }
  //表示処理
  $("#pc").html(view);
  $("#result").html(judge);
});
