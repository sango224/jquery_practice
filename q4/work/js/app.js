document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");
  const descriptions = document.querySelectorAll(".description li");

  navItems.forEach((item, index) => {
    item.addEventListener("click", function () {
      // 全てのコンテンツを非表示にする
      descriptions.forEach((description) => {
        description.classList.add("is-hidden");
      });

      // 対応するページのコンテンツを表示する
      descriptions[index].classList.remove("is-hidden");
    });
  });
});
