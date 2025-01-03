// 메인 배너 슬라이드드

const visual_list = new Swiper(".visual_list", {
  loop: true, // 기본값 false,
  speed: 1000,

  effect: "fade", // fade 효과 활성화
  fadeEffect: {
    crossFade: true, // 이전 슬라이드와 다음 슬라이드의 교차 페이드 설정
  },

  autoplay: {
    delay: 2500, // 슬라이드가 머무르는 시간, 5000=5초
    disableOnInteraction: false, // 스와이프 후 자동재생이 비활성화 되지 않음
  },

  pagination: {
    el: ".swiper-pagination",
    type: "bullets", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
    clickable: true, // 버튼 클릭 여부
  },
});

const bread_list = new Swiper(".bread_list", {
  loop: true, // 기본값 false,
  speed: 1000,
  autoplay: {
    delay: 2500, // 슬라이드가 머무르는 시간, 5000=5초
    disableOnInteraction: false, // 스와이프 후 자동재생이 비활성화 되지 않음
  },
  breakpoints: {
    0: { //분기점 
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 28,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 53,
    },
  },
});

const jam_list = new Swiper(".jam_list ", {
  loop: true, // 기본값 false,
  speed: 1000,
  autoplay: {
    delay: 2500, // 슬라이드가 머무르는 시간, 5000=5초
    disableOnInteraction: false, // 스와이프 후 자동재생이 비활성화 되지 않음
  },
  breakpoints: {
    0: { //분기점 
      slidesPerView: 1,
      grid: {
        rows: 1,
      },
    },
    1200: {
      slidesPerView: 1,
      grid: {
        rows: 2,
      },
    },
    // 1200: {
    //   slidesPerView: 1,
    //   grid: {
    //     rows: 2,
    //   },
    // },
  },
});

const syrup_list = new Swiper(".syrup_list ", {
  loop: true, // 기본값 false,
  speed: 1000,
  autoplay: {
    delay: 2500, // 슬라이드가 머무르는 시간, 5000=5초
    disableOnInteraction: false, // 스와이프 후 자동재생이 비활성화 되지 않음
  },
  breakpoints: {
    0: { //분기점 
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 28,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 53,
    },
  },
});

const coffee_list = new Swiper(".coffee_list ", {
  loop: true, // 기본값 false,
  speed: 1000,
  autoplay: {
    delay: 2500, // 슬라이드가 머무르는 시간, 5000=5초
    disableOnInteraction: false, // 스와이프 후 자동재생이 비활성화 되지 않음
  },
  breakpoints: {
    0: { //분기점 
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1300: {
      slidesPerView: 2,
      spaceBetween: 100,
    },
  },
});

const review_list = new Swiper(".review_list", {
  loop: true, // 기본값 false,
  speed: 1000,
  navigation: {
    nextEl: '.swiper-button-next', // 다음 버튼
    prevEl: '.swiper-button-prev', // 이전 버튼
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

// document.addEventListener("DOMContentLoaded", () => {
//   const bread_imgs = document.querySelectorAll(".bread_img");

//   bread_imgs.forEach((box) => {
//     const images = box.querySelectorAll("img");
//     let currentIndex = 0;

//     setInterval(() => {
//       images[currentIndex].classList.remove("active"); // 클래스 제거
//       currentIndex = (currentIndex + 1) % images.length; // 다음 인덱스로 이동
//       images[currentIndex].classList.add("active"); // 클래스 추가
//     }, 3000); // 3초마다 변경
//   });
// });