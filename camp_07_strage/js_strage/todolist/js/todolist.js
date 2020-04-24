// タスク追加機能部分
const addTask = document.querySelector(".add");
const list = document.querySelector(".todos");

const createTodoList = (task) => {
  // HTML テンプレートを生成
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${task}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

  list.innerHTML += html;
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
  }
});
