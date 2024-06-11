// 自行加入的JS請寫在這裡
$(function () {
  // 首頁輪播
  $('.mpSlider').slick({
    mobileFirst: true,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    fade: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    customPaging: function (slider, i) {
      var title = $(slider.$slides[i]).find('img').attr('alt').trim();
      return $('<button type="button" aria-label="' + title + '"/>').text(title);
    },
  });

  $('.itemSlider').slick({
    mobileFirst: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });
  //卡片式輪播
  $('.latest_report .cardSlider').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4.1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '30px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3.1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '30px',
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          autoplay: false,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  //卡片式輪播
  $('.popular_report .cardSlider').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          //centerPadding: '40px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  //燈箱slick+lightBox組合
  $('.cp_slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    pauseOnFocus: true,
    focusOnSelect: true,
    accessibility: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  $('.cp_slider').slickLightbox({
    caption: 'caption',
    lazyLoad: 'ondemand',
    useHistoryApi: 'true',
    ease: 'ease',
    lazy: true,
  });
  //
  $('.cppic_slider').slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    // pauseOnHover: true,
    // pauseOnFocus: true,
    // focusOnSelect: true,
    // accessibility: true,
    // lazyLoad: 'ondemand',
    // ease: 'ease',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  // cp_photo
  $('.Slider-for').on('init reInit afterChange', function (event, slick, currentSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.controls').html(i + '/' + slick.slideCount);
  });
  $('.Slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    swipe: false,
    swipeToSlide: false,
    lazyLoad: 'ondemand',
    asNavFor: '.Slider-nav',
    infinite: true,
  });
  $('.Slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.Slider-for',
    dots: true,
    arrows: true,
    lazyLoad: 'ondemand',
    focusOnSelect: true,
    infinite: true,
  });
});

$(function () {
  $('.modal').hide(); //先隱藏視窗
  $('.modal').after('<div class="modal_overlay"></div>'); //新增透明底
  $('.modal').prepend('<button type="button" class="close">關閉</button>'); //新增關閉按鈕
  $('.modal_overlay').hide(); //隱藏透明底

  //按鈕動作
  $('.openModal-1').click(function (e) {
    $('.modal_overlay').fadeIn(100);
    $('#modal-1').addClass('opened').fadeIn(100);
    $('body').addClass('noscroll');
    e.preventDefault();
  });

  //關閉function
  function closeModal() {
    $('.modal').hide();
    $('.modal_overlay').hide();
    $('body').removeClass('noscroll');
  }
  //點選關閉按鈕及透明底都可關閉
  $('.modal_overlay').click(closeModal);
  $('.modal .close').click(closeModal);

  $('.btn_sys').click(function (e) {
    $('.sys_ann').hide();
  });
});

// function tabFunction(obj) {
//   'use strict';
//   // const tabSet = document.querySelector(obj.target) || null;
//   const tabSet = document.querySelectorAll(obj.target) || null;
//   const autoClose = obj.autoClose;
//   const openSwitch = obj.openSwitch;
//   const openFirst = obj.openFirst;
//   const modeSwitch = obj.modeSwitch;
//   const widthCheck = obj.width;

//   if (tabSet2) {
//     tabSet2.forEach((tab) => {
//       let id = [];
//       let mode = '';
//       let modeBBtn;
//       const modeABtn = tab.querySelectorAll('.tabItems button');
//       const modeAContent = tab.querySelectorAll('.tabContent');
//       const modeBContent = tab.querySelectorAll('.content');
//       const count = modeABtn.length;
//       let nowIndex = obj.index === null ? null : obj.index <= count ? obj.index : count;
//       const lastTab = modeABtn[modeABtn.length - 1];

//       for (let i = 0; i < modeABtn.length; i++) {
//         id.push(`tab_${randomLetter(3)}${randomFloor(0, 999)}`);
//       }

//       // 內容增加標題給模式B使用
//       modeABtn.forEach((item, index) => {
//         const btn = document.createElement('button');
//         btn.classList.add('modeBBtn');
//         btn.innerText = item.innerText;
//         modeAContent.forEach((content, i) => (i === index ? content.prepend(btn) : null));
//       });

//       modeBBtn = tab.querySelectorAll('.modeBBtn');

//       // 判斷寬度
//       const init = () => {
//         if (window.innerWidth <= widthCheck && modeSwitch) {
//           // 模式B
//           mode = 'B';
//           if (modeSwitch) {
//             modeABtn.forEach((content) => content.classList.remove('active'));
//             modeAContent.forEach((content) => content.classList.remove('active'));
//             // 移除模式A無障礙設置
//             modeABtn.forEach((item, index) => {
//               item.removeAttribute('aria-controls');
//               item.removeAttribute('role');
//               modeAContent[index].removeAttribute('aria-labelledby');
//               modeAContent[index].removeAttribute('role');
//               modeAContent[index].removeAttribute('aria-label');
//             });
//             // 增加模式B無障礙設置
//             modeBBtn.forEach((item, index) => {
//               item.setAttribute('aria-controls', id[index]);
//               modeBContent[index].setAttribute('aria-labelledby', id[index]);
//               modeBContent[index].setAttribute('id', id[index]);
//               // item.setAttribute('role', 'tab');
//               // modeBContent[index].setAttribute('role', 'tabpanel');
//               modeBContent[index].setAttribute('aria-label', item.innerText);
//             });

//             tab.classList.add('modeB');

//             if (nowIndex !== null) {
//               modeBBtn[nowIndex].classList.add('active');
//               modeBBtn[nowIndex].setAttribute('aria-selected', 'true');
//               modeBContent[nowIndex].classList.add('active');
//             }
//           }
//           // 模式B
//         } else if (window.innerWidth > widthCheck || !modeSwitch) {
//           // 模式A
//           mode = 'A';

//           if (modeSwitch) {
//             modeBContent.forEach((item) => item.style.removeProperty('display'));
//             modeBBtn.forEach((content) => content.classList.remove('active'));
//             modeBContent.forEach((content) => content.classList.remove('active'));

//             // 移除模式B無障礙設置
//             modeBBtn.forEach((item, index) => {
//               item.removeAttribute('aria-controls');
//               item.removeAttribute('role');
//               modeBContent[index].removeAttribute('aria-labelledby');
//               modeBContent[index].removeAttribute('role');
//               modeBContent[index].removeAttribute('aria-label');
//               modeBContent[index].removeAttribute('id');
//             });
//           }
//           // 增加模式A無障礙設置
//           modeABtn.forEach((item, index) => {
//             item.setAttribute('aria-controls', id[index]);
//             item.setAttribute('role', 'tab');
//             item.setAttribute('aria-selected', 'false');
//             modeAContent[index].setAttribute('aria-labelledby', id[index]);
//             modeAContent[index].setAttribute('role', 'tabpanel');
//             modeAContent[index].setAttribute('aria-label', item.innerText);
//           });

//           tab.classList.remove('modeB');

//           nowIndex === null ? (nowIndex = 0) : nowIndex;
//           modeABtn[nowIndex].classList.add('active');
//           modeAContent[nowIndex].classList.add('active');
//           modeABtn[nowIndex].setAttribute('aria-selected', 'true');
//           // 模式A
//         }
//       };
//       init();

//       // 預先展開模式
//       function openCheck() {
//         // 預先展開模式
//         if (!openFirst && mode === 'B' && nowIndex !== null) {
//           const siblings = Array.prototype.filter.call(modeBContent[nowIndex].parentElement.parentElement.children, (child) => {
//             return child !== modeBContent[nowIndex].parentElement;
//           });
//           siblings.forEach((item) => $(item).find('.content').slideUp('fast'));
//         } else if (mode === 'B' && nowIndex === null) {
//           modeBContent.forEach((item) => $(item).slideUp('fast'));
//         } else {
//           modeBContent.forEach((item) => $(item).slideDown('fast'));
//         }
//       }
//       openCheck();

//       // 模式A共用
//       function modeAFn(item, index) {
//         modeABtn.forEach((content) => content.classList.remove('active'));
//         modeAContent.forEach((content) => content.classList.remove('active'));
//         modeAContent[index].classList.add('active');
//         item.classList.add('active');
//         modeABtn.forEach((content) => content.setAttribute('aria-selected', 'false'));
//         item.setAttribute('aria-selected', 'true');
//         nowIndex = index;
//       }

//       modeAContent.forEach((item, index) => {
//         const itemAllTarget = modeAContent[index].querySelectorAll('a,button,input,textarea,select');
//         const firstItem = itemAllTarget[1];
//         const lastItem = itemAllTarget[itemAllTarget.length - 1];
//         const prevItemAllTarget = modeAContent[index - 1]?.querySelectorAll('a,button,input,textarea,select');
//         const siblings = Array.prototype.filter.call(modeBBtn[index].parentElement.parentElement.children, (child) => {
//           return child !== modeBBtn[index].parentElement;
//         });

//         // 模式A
//         if (modeSwitch || mode === 'A') {
//           // 模式A點擊
//           if (openSwitch) {
//             modeABtn[index].addEventListener('click', (e) => {
//               e.preventDefault();
//               modeAFn(e.target, index);
//             });

//             // 模式A鍵盤
//             modeABtn[index].addEventListener('keydown', (e) => {
//               if (e.which === 9 && !e.shiftKey) {
//                 modeAFn(e.target, index);
//                 if (itemAllTarget.length > 1 && e.target !== lastTab) {
//                   e.preventDefault();
//                   firstItem.focus();
//                 } else if (itemAllTarget.length === 1 && e.target !== lastTab) {
//                   e.preventDefault();
//                   modeABtn[index + 1]?.focus();
//                 } else if (itemAllTarget.length > 1 && e.target === lastTab) {
//                   modeABtn[index + 1]?.focus();
//                 } else if (itemAllTarget.length === 1 && e.target === lastTab) {
//                   setTimeout(() => {
//                     lastTab.focus();
//                     lastTab.blur();
//                   }, 10);
//                 }
//               } else if (e.which === 9 && e.shiftKey) {
//                 e.preventDefault();
//                 modeAFn(modeABtn[index], index);
//                 lastItem?.focus();
//                 if (itemAllTarget.length === 1) {
//                   modeABtn[index - 1]?.focus();
//                 }
//               }
//             });
//           }
//         }

//         // 模式B
//         if (modeSwitch || mode === 'B') {
//           // 模式B點擊
//           if (openSwitch) {
//             modeBBtn[index].addEventListener('click', (e) => {
//               e.preventDefault();
//               siblings.forEach((content) => content.querySelector('.modeBBtn').classList.remove('active'));
//               e.target.classList.toggle('active');
//               $(modeBContent[index]).slideToggle('fast');
//               nowIndex = index;

//               if (autoClose) {
//                 siblings.forEach((con) => {
//                   $(con.querySelector('.content')).slideUp('fast');
//                   con.classList.remove('active');
//                   con.querySelector('.modeBBtn').setAttribute('aria-selected', 'false');
//                 });
//               }
//             });

//             // 模式B鍵盤
//             modeBBtn[index].addEventListener('keydown', (e) => {
//               e.target.classList.add('active');
//               let firstTabStyle = window.getComputedStyle(modeBContent[index]);
//               nowIndex = index;

//               if (autoClose & !openFirst) {
//                 siblings.forEach((content) => {
//                   $(content.querySelector('.content')).slideUp('fast');
//                   content.querySelector('.modeBBtn').classList.remove('active');
//                   content.querySelector('.modeBBtn').setAttribute('aria-expanded', 'false');
//                 });
//               }

//               if (e.which === 9 && !e.shiftKey) {
//                 $(modeBContent[index]).slideDown('fast');
//                 if (index === 0) {
//                   e.target.classList.add('active');
//                 }

//                 if (itemAllTarget.length > 1) {
//                   e.preventDefault();
//                   firstItem?.focus();
//                 } else if (itemAllTarget.length === 1) {
//                   modeBBtn[index]?.focus();
//                 }
//               } else if (e.which === 9 && e.shiftKey) {
//                 e.preventDefault();
//                 $(modeBContent[index]).slideDown('fast');
//                 if (itemAllTarget.length > 1) {
//                   lastItem?.focus();
//                 } else if (itemAllTarget.length === 1) {
//                   modeBBtn[index - 1]?.focus();
//                 }
//               }
//             });
//           }
//         }

//         // 內容鍵盤遊走
//         itemAllTarget.forEach((n, i) => {
//           if (i > 0) {
//             n.addEventListener('keydown', (e) => {
//               if (mode === 'A') {
//                 if ((e.which === 9 && !e.shiftKey && e.target === lastItem && modeABtn[index] !== lastTab) || (e.which === 9 && e.shiftKey && e.target === firstItem)) {
//                   modeABtn[index]?.focus();
//                 }
//               } else if (mode === 'B') {
//                 if (e.which === 9 && e.shiftKey) {
//                   if (e.target === firstItem) {
//                     modeBBtn[index]?.focus();
//                   } else if (itemAllTarget.length === 1) {
//                     modeBBtn[index - 1]?.focus();
//                   }
//                 }
//               }
//             });
//           }
//         });
//       });

//       window.addEventListener('resize', init);
//     });
//   }
// }
