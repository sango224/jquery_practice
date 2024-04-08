document.addEventListener("DOMContentLoaded", function () {
  const selectBox = document.querySelector(".select-box");
  const foodList = document.querySelectorAll(".food-list li");

  selectBox.addEventListener("change", function () {
    const selectedCategory = selectBox.value;

    foodList.forEach((item) => {
      const categoryType = item.getAttribute("data-category-type");

      if (selectedCategory === "all" || selectedCategory === categoryType) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
