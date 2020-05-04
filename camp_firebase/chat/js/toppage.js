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
// xxxxxスクリプトを貼り付ける
const newPostRef = firebase.database().ref();

// ここから下にjqueryの処理を書いて練習します
// 変数を活用する、val()を使って取得
// firebaseの送信処理を記述
// 送信ボタンをクリックされたら次の処理をする
$("#send").on("click", function () {
  // データを登録で送る
  newPostRef.push({
    username: $("#username").val(), //名前
    text: $("#text").val(), //テキストエリア
  });
  // 文字を空にする
  $("#text").val(""); //空にする
  $("#username").val(""); //空にする
});

// 受信処理
newPostRef.on("child_added", function (data) {
  let v = data.val(); //ここに保存されたデータが全て入ってくる
  // let k = data.key; //今回は使わない
  console.log(v); //vの変数に入っているオブジェクトを全てみる

  let str = `<p>${v.username}<br>${v.text}</p>`;
  // ここでデータをhtmlに埋め込む
  $("#output").prepend(str);
});

$("#text").on("keydown", function (event) {
  console.log(event);
});
