const review_list = new Swiper(".review_list", {
  loop: true, // 기본값 false,
  speed: 1000,
  navigation: {
    nextEl: '.swiper-button-next', // 다음 버튼
    prevEl: '.swiper-button-prev', // 이전 버튼
  },
  autoplay: {
    delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
    disableOnInteraction: false, // 스와이프 후 자동재생이 비활성화 되지 않음
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
    clickable: true, // 버튼 클릭 여부
  },
  breakpoints: {
    0: { //분기점 
      slidesPerView: 2,
      spaceBetween: 12,
    },
    570: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 45,
    },
  },
});


//WOW
new WOW().init();
