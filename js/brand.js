const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0; // data-delay 속성에서 값을 가져옴
      setTimeout(() => {
        entry.target.classList.add('animate');
      }, delay);
    }
  });
});

document.querySelectorAll('.animate-on-scroll').forEach((el) => {
  observer.observe(el);
});