document
  .querySelector(".btn__submit")
  .addEventListener("click", function (event) {
    event.preventDefault(); // フォームのデフォルトの送信を防止

    const formData = new FormData(document.querySelector("form"));
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    const year = document.querySelector(".year").value;
    const month = document.querySelector(".month").value;
    const day = document.querySelector(".day").value;
    const birthday = `${year}/${month}/${day}`;
    console.log(`生年月日: ${birthday}`);
  });
