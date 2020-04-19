//1.Save クリックイベント
$("#save").on("click", function () {
  // val()で値を取得する
  const key = $("#key").val();
  const value = $("#memo").val();
  console.log(key);
  console.log(value);
  // html側で入力されたデータを取得して確認

  // データを保存する
  // key は const keyの$("#key").val()
  // value は const valueの$("#memo").val();
  localStorage.setItem(key, value);
  //一覧表示に追加
  // const html = `<li><span>${key}</span><span>${value}</span></li>`
  //変数に格納したデータをhtmlに追加
  $("#xxx").append();

  // この↓消しちゃダメ
});

//2.clear クリックイベント
$("#clear").on("click", function () {
  // 保存されたデータ（localStorage）を消す

  //id="list"を削除する
  $("#xxx").empty();
});

//3.ページ読み込み：保存データ取得表示
for (let i = 0; i < localStorage.length; i++) {
  // 保存されたデータのkeyを取得

  // getItemのKeyを使って保存されたデータを全部取得

  const html = ``;
  $("#xxx").append(xxx);
}
