$(document).ready(function () {
  // モーダルを開くボタンをクリックした時の処理
  $(".modal_open_button").click(function () {
    $(".modal_win").fadeIn();
  });

  // 閉じるボタンまたは背景をクリックした時の処理
  $(".modal_close_button, .modal_bg").click(function () {
    $(".modal_win").fadeOut();
  });

  // モーダルコンテンツ内のクリックを防止
  $(".modal_content").click(function (e) {
    e.stopPropagation(); // イベントの伝播を阻止
  });
});
