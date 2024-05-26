/*
スライドメニュー: js
================================================ */
// const menuIcon = document.querySelector("#js-drawer-icon");
// const menuContent = document.querySelector("#js-drawer-content");

// // エラー回避のためifが必要
// if (menuIcon) {
//   menuIcon.addEventListener("click", (e) => {
//     e.preventDefault();
//     menuIcon.classList.toggle("is-checked");
//     menuContent.classList.toggle("is-checked");
//   });
// }

/*
スライドメニュー: jQuery
================================================ */
$("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  $("#js-drawer-icon").toggleClass("is-checked");
  $("#js-drawer-content").toggleClass("is-checked");
});

/*
アコーディオン: jQuery
================================================ */
$(".js-accordion").on("click", function (e) {
  e.preventDefault();

  // this: クリックした要素
  if ($(this).parent().hasClass("is-open")) {
    $(this).parent().removeClass("is-open");
    $(this).next().slideUp();
  } else {
    $(this).parent().addClass("is-open");
    $(this).next().slideDown();
  }
});

/*
Swiper
================================================ */
const swiper = new Swiper("#js-gallery-swiper", {
  spaceBetween: 70,
  loop: true,

  pagination: {
    el: "#js-gallery-pagination",
  },

  navigation: {
    nextEl: "#js-gallery-next",
    prevEl: "#js-gallery-prev",
  },
});

/*
Modal: js
================================================ */
// const modalOpenItems = document.querySelectorAll(".js-modal-open");
// const modalCloseItems = document.querySelectorAll(".js-modal-close");
// const aboutModal = document.querySelector("#js-about-modal");

// modalOpenItems.forEach((modalOpenItem) => {
//   modalOpenItem.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (aboutModal) {
//       aboutModal.showModal();
//     }
//   });
// });

// modalCloseItems.forEach((modalCloseItem) => {
//   modalCloseItem.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (aboutModal) {
//       aboutModal.close();
//     }
//   });
// });

/*
Modal: jQuery
================================================ */
$(".js-modal-open").click(function (e) {
  e.preventDefault();
  $("#js-about-modal")[0].showModal();
});

$(".js-modal-close").click(function (e) {
  e.preventDefault();
  $("#js-about-modal")[0].close();
});

/*
Intersection Observer: js
================================================ */
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry, observer) => {
    if (entry.isIntersecting) {
      // 要素が表示領域に入った場合にクラスを付与
      entry.target.classList.add("is-in-view");
    }
    // 表示領域から外れた場合
    // else {
    //   entry.target.classList.remove("is-in-view");
    // }
  });
});

const inViewItems = document.querySelectorAll(".js-in-view");
inViewItems.forEach((inViewItem) => {
  io.observe(inViewItem);
});

// mapを使った書き方
// const inViewItems = [...document.querySelectorAll(".js-in-view")];
// inViewItems.map((inViewItem) => io.observe(inViewItem));

/*
スムーススクロール：jQuery
================================================ */
// href属性が#で始まるaタグをクリックした場合
$('a[href^="#"]').on("click", function (e) {
  // クリックした要素のhref属性を取得
  const id = $(this).attr("href");
  // href属性が#のみの場合はトップ（html）、それ以外はid属性のリンク先
  const target = $(id == "#" ? "html" : id);
  const position = $(target).offset().top;
  $("html, body").animate(
    {
      scrollTop: position,
    },
    1000,
    "swing" // swing or linear
  );
});

// ドロワーメニュー内のリンククリック時にドロワーを閉じる
$('#js-drawer-content a[href^="#"]').on("click", function (e) {
  $("#js-drawer-icon").removeClass("is-checked");
  $("#js-drawer-content").removeClass("is-checked");
});

/*
Topへ戻るボタンを表示：jQuery
================================================ */
$(window).on("scroll", function (e) {
  e.preventDefault();
  // 100pxスクロールするとクラスを付与
  if ($(window).scrollTop() > 100) {
    $("#js-page-top").addClass("is-show");
  } else {
    $("#js-page-top").removeClass("is-show");
  }
});

/*
Topへ戻るボタンを表示：js
================================================ */
// const pageTop = document.querySelector("#js-page-top");
// window.addEventListener("scroll", (e) => {
//   e.preventDefault();
//   if (window.scrollY > 100) {
//     pageTop.classList.add("is-show");
//   } else {
//     pageTop.classList.remove("is-show");
//   }
// });
