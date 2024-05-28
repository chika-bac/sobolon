// /*
// スライドメニュー: js
// ================================================ */
const menuIcon = document.querySelector("#js-drawer-icon");
const menuPanel = document.querySelector("#js-drawer-panel");

if (menuIcon) {
  menuIcon.addEventListener("click", (e) => {
    e.preventDefault();
    menuIcon.classList.toggle("is-checked");
    menuPanel.classList.toggle("is-checked");
  });
}

// /*
// Intersection Observer: js
// ================================================ */
// const io = new IntersectionObserver((entries) => {
//   entries.forEach((entry, observer) => {
//     if (entry.isIntersecting) {
//       // 要素が表示領域に入った場合にクラスを付与
//       entry.target.classList.add("is-in-view");
//     }
//     // 表示領域から外れた場合
//     // else {
//     //   entry.target.classList.remove("is-in-view");
//     // }
//   });
// });

// const inViewItems = document.querySelectorAll(".js-in-view");
// inViewItems.forEach((inViewItem) => {
//   io.observe(inViewItem);
// });

// // mapを使った書き方
// // const inViewItems = [...document.querySelectorAll(".js-in-view")];
// // inViewItems.map((inViewItem) => io.observe(inViewItem));

// /*
// スムーススクロール：jQuery
// ================================================ */
// // href属性が#で始まるaタグをクリックした場合
// $('a[href^="#"]').on("click", function (e) {
//   // クリックした要素のhref属性を取得
//   const id = $(this).attr("href");
//   // href属性が#のみの場合はトップ（html）、それ以外はid属性のリンク先
//   const target = $(id == "#" ? "html" : id);
//   const position = $(target).offset().top;
//   $("html, body").animate(
//     {
//       scrollTop: position,
//     },
//     1000,
//     "swing" // swing or linear
//   );
// });

// // ドロワーメニュー内のリンククリック時にドロワーを閉じる
// $('#js-drawer-content a[href^="#"]').on("click", function (e) {
//   $("#js-drawer-icon").removeClass("is-checked");
//   $("#js-drawer-content").removeClass("is-checked");
// });
