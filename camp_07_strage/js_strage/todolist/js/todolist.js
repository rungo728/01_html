// タスク追加機能部分
const addTask = document.querySelector(".add");
const list = document.querySelector(".todos");

(function () {
  // 初期化処理
  // ローカルストレージに格納されている値を取得し、リストを生成する
  for (var key in localStorage) {
    var html = localStorage.getItem(key);
    // 値を取得したら、右（localStorage.getItem(key)）から左（list.innerHTML）に繰り返し投入していく
    if (html) {
      list.innerHTML += localStorage.getItem(key);
    }
  }
})();

const saveTaskToLocalStorage = (task, html) => {
  // null は、localStorage に保存しない
  if (html) {
    // localStorage は、0 から始まる
    localStorage.setItem(task, html);
    return;
  }
  return;
};

const deleteTaskFromLocalStorage = (task) => {
  localStorage.removeItem(task);
  return;
};

const createTodoList = (task) => {
  // HTML テンプレートを生成
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${task}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

  list.innerHTML += html;
  saveTaskToLocalStorage(task, html);
};

addTask.addEventListener("submit", (e) => {
  // デフォルトのイベントを無効
  e.preventDefault();

  // タスクに入力した値を空白を除外して格納
  const task = addTask.add.value.trim();
  if (task.length) {
    // Todo List の HTML を作成
    createTodoList(task);
    // タスクに入力した文字をクリア
    addTask.reset();
  }
});
// タスク削除機能部分
list.addEventListener("click", (e) => {
  // ゴミ箱には、.delete クラスが設定
  if (e.target.classList.contains("delete")) {
    // クリックイベント時に、deleteクラスが classListの中に含まれている場合、親要素もろとも削除
    e.target.parentElement.remove();
    // 保存されたデータ（localStorage）を消す
    const task = e.target.parentElement.textContent.trim();
    deleteTaskFromLocalStorage(task);
  }
});
