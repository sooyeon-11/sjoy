
// depth2
$(".gnb > li").hover(function () {
  $(this).find(".depth2").stop().slideToggle();
});

// mgnb
$(".ham").click(function () {
  $(".dim").fadeIn();
  $(".mgnb_wrap").animate({
    left: "0"
  });
});

$(".mgnb_close").click(function () {
  $(".dim").fadeOut();
  $(".mgnb_wrap").animate({
    left: "-100%"
  });
});

$(".mgnb>li").click(function () {
  $(this).find(".mdepth2").stop().slideToggle();
  $(this).siblings().find(".mdepth2").slideUp();
});

// search
$(".btn_search").click(function () {
  $(this).toggleClass("active");
  $(".search").fadeToggle();
});


