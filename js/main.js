/*
360pxでviewport固定
================================================ */
!(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value = window.outerWidth > 360 ? "width=device-width,initial-scale=1" : "width=360";
    if (viewport.getAttribute("content") !== value) {
      viewport.setAttribute("content", value);
    }
  }
  addEventListener("resize", switchViewport, false);
  switchViewport();
})();

/*
スライドメニュー: js
================================================ */
const menuIcon = document.querySelector("#js-drawer-icon");
const menuPanel = document.querySelector("#js-drawer-panel");

if (menuIcon) {
  menuIcon.addEventListener("click", (e) => {
    e.preventDefault();
    menuIcon.classList.toggle("is-checked");
    menuPanel.classList.toggle("is-checked");
    document.body.classList.toggle("isScrollAllowed");
  });
}

/*
スムーススクロール：js
================================================ */
// ドロワーメニュー内のリンククリック時にドロワーを閉じる
document.querySelectorAll('#js-drawer-panel a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    menuIcon.classList.remove("is-checked");
    menuPanel.classList.remove("is-checked");
    document.body.classList.remove("isScrollAllowed");
  });
});

/*
フォームバリデーション
================================================ */
const form = document.querySelector("#js-form");
form.addEventListener("submit", (e) => {
  if (form.checkValidity()) {
    alert("送信が完了しました");
  }
});
