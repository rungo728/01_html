// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC2UUPBz9bol-WGEM0t6Cz-ZAiSWBu81c8",
  authDomain: "camp07-6ad54.firebaseapp.com",
  databaseURL: "https://camp07-6ad54.firebaseio.com",
  projectId: "camp07-6ad54",
  storageBucket: "camp07-6ad54.appspot.com",
  messagingSenderId: "531756787266",
  appId: "1:531756787266:web:d9993ecd60fb533985efdb",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//firebaseのデーターベース（保存させる場所）を使いますよと言うjsのコードを貼り付ける
const newPostRef = firebase.database().ref();
let d = 0;
const img = [
  "program2.jpg",
  "ryouri3.jpeg",
  "douga4.jpg",
  "douga3.jpg",
  "program1.jpg",
  "cooking１.jpg",
];
$(".icon").on("click", function (params) {
  console.log(this);
  d = $(this).attr("data-img");
});

// 送信処理
// 変数を活用する、val()を使って取得
// firebaseの送信処理を記述
// 送信ボタンをクリックされたら次の処理をする
$("#send").on("click", function () {
  // データを登録で送る
  newPostRef.push({
    icon: d, //アイコンエリア
    category: $("#article-category").val(), //カテゴリー
    title: $("#article-title").val(), //タイトル
    text: $("#text").val(), //テキストエリア
  });
  // 文字を空にする
  $("#text").val(""); //空にする
  $("#article-title").val(""); //空にする
});

// 受信処理
newPostRef.on("child_added", function (data) {
  let v = data.val(); //ここに保存されたデータが全て入ってくる
  // let k = data.key; //今回は使わない
  console.log(v); //vの変数に入っているオブジェクトを全てみる
  console.log(d);
  let str = `<li class="article-index__item"><a class="article-link" href=""><div class="article-box"><img src='img/${
    img[v.icon]
  }'><span>${v.category}</span></div><div class="article-title">${
    v.title
  }<br><div class="articles">${v.text}</div></div></a></li>`;
  // ここでデータをhtmlに埋め込む
  $("#output").prepend(str);
});

$("#text").on("keydown", function (event) {
  console.log(event);
});
