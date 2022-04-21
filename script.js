// pc 상단 snb language클릭 이벤트
$(".snb > li:nth-child(1) > a").hover(
  function () {
    $(this).children("img").attr("src", "images/gnb_icon2.png");
  },
  function () {
    $(this).children("img").attr("src", "images/gnb_icon1.png");
  }
);
$(".snb > li:nth-child(2) > a").hover(
  function () {
    $(this).children("img").attr("src", "images/gnb_icon4.png");
  },
  function () {
    $(this).children("img").attr("src", "images/gnb_icon3.png");
  }
);
$(".snb > li:nth-child(3) > a").hover(
  function () {
    $(this).children("img").attr("src", "images/gnb_icon6.png");
  },
  function () {
    $(this).children("img").attr("src", "images/gnb_icon5.png");
  }
);

$(".snb li:last-child > a").click(function () {
  $(this).next().slideToggle(200);
});
// pc 상단 snb language클릭 이벤트

// pc 패밀리사이트 클릭 이벤트
$(".fms_icon").click(function () {
  $(".fms").animate({ opacity: "1" }, 200, function () {
    $(".fms").css({ display: "block" });
  });
  $(".black_bg").addClass("click_on");
  $("main").css({ "z-index": "-2" });
});

$(".fms_text img").click(function () {
  $(".fms").animate({ opacity: "0" }, 200, function () {
    $(".fms").css({ display: "none" });
  });
  $(".black_bg").removeClass("click_on");
  $("main").css({ "z-index": "1" });
});
// pc 패밀리사이트 클릭 이벤트

// mob 상단 검색, 햄버거메뉴바 이벤트
$(".mob_search1").click(function () {
  $(".mob_search_ondiv").toggleClass("on");
  $(".search_fc").toggleClass("on");
  $(".mob_search1").attr("src", "images/search_sprite2.png");
  $(".black_bg").addClass("click_on");
  $(".black_bg").css({ top: "200px" });
  $("main").css({ "z-index": "-2" });
});

$(".mob_search2").click(function () {
  $(".search_lc").animate({ left: "0" }, 200);
  $(".black_bg").addClass("click_on");
  $("main").css({ "z-index": "-2" });
});

$(".search_close")
  .children()
  .click(function () {
    $(".search_lc").animate({ left: "800px" }, 200);
    $(".black_bg").removeClass("click_on");
    $("main").css({ "z-index": "1" });
  });

$(".search_left a").click(function () {
  $(this).parent().addClass("select").siblings().removeClass("select");

  var n = $(this).parent().index() + 1;
  $(".search_menu" + n)
    .addClass("on")
    .siblings("ul")
    .removeClass("on");
});
// mob 상단 검색, 햄버거메뉴바 이벤트

// mob 전체메뉴 이벤트
$(".all_icon").click(function () {
  $(".mob_all_menu").animate({ opacity: "1" }, 300, function () {
    $(".mob_all_menu").css({ display: "block" });
  });
});

$(".mob_all_menu article .all > a").click(function () {
  $(".mob_all_menu").animate({ opacity: "0" }, 300, function () {
    $(".mob_all_menu").css({ display: "none" });
  });
});
// mob 전체메뉴 이벤트

// pc gnb메뉴 이벤트
$(".gnb a").on("mouseover", function () {
  var sh = $(this).attr("data-height");
  $(".gnb_slide_all").removeClass("sh1 sh2 sh3 sh4 sh5 sh6").addClass(sh);
  var nn = $(this).parent().index() + 1;
  $(".gnb_slide_off").removeClass("on");
  $(".gnb_slide" + nn).addClass("on");
  $(".black_bg").addClass("click_on");
  $(".black_bg").css({ top: "177px" });
});

$("#pcgnb").on("mouseleave", function () {
  $(".gnb_slide_all").removeClass("sh1 sh2 sh3 sh4 sh5 sh6");
  $(".gnb_slide_off").removeClass("on");
  $(".black_bg").removeClass("click_on");
  $(".black_bg").css({ top: "0" });
});
// pc gnb메뉴 이벤트

// cont 나타나기 animate
$(".cont1").animate({ bottom: 0 }, 100, function () {
  $(this).css({ opacity: "1" });
});

$(".cont2 .left_wrap").animate({ bottom: 0 }, 300, function () {
  $(this).css({ opacity: "1" });
});

$(".cont2 .right_wrap ul").animate({ right: 0 }, 300, function () {
  $(this).css({ opacity: "1" });
});

$(".cont2 .right_wrap div").animate({ right: 0 }, 500, function () {
  $(this).css({ opacity: "1" });
});

$(".cont3").animate({ bottom: 0 }, 700, function () {
  $(this).css({ opacity: "1" });
});

$(".cont4").animate({ bottom: 0 }, 100, function () {
  $(this).css({ opacity: "1" });
});

$(window).scroll(function () {
  var sc = $(this).scrollTop();

  if (sc > 1000) {
    $(".cont4 .cont4_tab").addClass("on");
  } else {
    $(".cont4 .cont4_tab").removeClass("on");
  }
});

$(window).scroll(function () {
  var sc = $(this).scrollTop();

  if (sc > 1500) {
    $(".cont5").addClass("on");
  } else {
    $(".cont5").removeClass("on");
  }
});
// cont 나타나기 animate

// 자동슬라이드1 top배너
var tln = $(".cont2_slide li").length; // 전역변수
var t; // 전역변수
for (t = 1; t <= tln; t++) {
  if (t == 1) {
    $(".cont2_page").append("<li class='on'>0" + t + "</li>");
  } else {
    $(".cont2_page").append("<li>0" + t + "</li>");
  }
}

var tn = 0; // 전역변수
var chk = 0; // 전역변수 false
function slide1() {
  tn++;
  if (tn > tln - 1) {
    tn = 0;
  }
  $(".cont2_slide li").eq(tn).addClass("on").siblings().removeClass("on");
  $(".cont2_page li").eq(tn).addClass("on").siblings().removeClass();
}

var timer = setInterval("slide1();", 5000); // 전역변수

$(".cont2_btn .prev").click(function () {
  if (chk == 0) {
    clearInterval(auto);
    auto = setInterval("slide2();", 5000);
  }
  tn--;
  if (tn < 0) {
    tn = tln - 1;
  }
  $(".cont2_slide li").eq(tn).addClass("on").siblings().removeClass("on");
  $(".cont2_page li").eq(tn).addClass("on").siblings().removeClass();
});

$(".cont2_btn .next").click(function () {
  if (chk == 0) {
    clearInterval(auto);
    auto = setInterval("slide2();", 5000);
  }
  slide1();
});

$(".cont2_btn .stop").click(function () {
  clearInterval(timer);
  $(this).siblings(".control").addClass("select");
  $(this).removeClass("select");
  chk = 1;
});

$(".cont2_btn .play").click(function () {
  setInterval("slide1();", 5000);
  $(this).removeClass("select");
  $(this).siblings(".control").addClass("select");
  chk = 0;
});
// 자동슬라이드1 top배너

// 소식 탭메뉴
$(".cont3_tabmenu a").click(function () {
  $(this).parent().addClass("select").siblings().removeClass("select");

  var n = $(this).parent().index() + 1;
  $(".tab_menu" + n)
    .addClass("on")
    .siblings(".menu_list")
    .removeClass("on");

  $(this).children("span").animate({ top: "90%" }, 100);
});
// 소식 탭메뉴

// 자동슬라이드2 팝업존
var pln = $(".popup li").length; // 전역변수
var p; // 전역변수
for (p = 1; p <= pln; p++) {
  if (p == 1) {
    $(".popup_page").append("<li class='on'>0" + p + "</li>");
  } else if (p > 9) {
    $(".popup_page").append("<li>" + p + "</li>");
  } else {
    $(".popup_page").append("<li>0" + p + "</li>");
  }
}

var pn = 0; // 전역변수
var chk = 0; // 전역변수 false
function slide2() {
  pn++;
  if (pn > pln - 1) {
    pn = 0;
  }
  $(".popup").animate({ left: "-254px" }, 300, function () {
    $(this).append($(".popup li:first-child")).css({ left: "0" });
  });
  $(".popup_page li").eq(pn).addClass("on").siblings().removeClass();
}

var auto = setInterval("slide2();", 5000); // 전역변수

$(".popup_btn .prev").click(function () {
  if (chk == 0) {
    clearInterval(auto);
    auto = setInterval("slide2();", 5000);
  }
  pn--;
  if (pn < 0) {
    pn = pln - 1;
  }
  $(".popup")
    .css({ left: "-254px" })
    .prepend($(".popup li:last-child"))
    .animate({ left: 0 }, 300);
  $(".popup_page li").eq(pn).addClass("on").siblings().removeClass();
});

$(".popup_btn .next").click(function () {
  if (chk == 0) {
    clearInterval(auto);
    auto = setInterval("slide2();", 5000);
  }
  slide2();
});

$(".popup_btn .stop").click(function () {
  clearInterval(auto);
  $(this).siblings(".control").addClass("select");
  $(this).removeClass("select");
  chk = 1;
});

$(".popup_btn .play").click(function () {
  auto = setInterval("slide2()", 5000);
  $(this).removeClass("select");
  $(this).siblings(".control").addClass("select");
  chk = 0;
});
// 자동슬라이드2 팝업존

// .cont4 .menu_list 탭메뉴
$(".cont4 .tab_menu li").click(function () {
  $(this).addClass("select").siblings().removeClass("select");

  var n = $(this).index() + 1;
  $(".menu_list" + n)
    .addClass("on")
    .siblings(".menu_list")
    .removeClass("on");
});
// .cont4 .menu_list 탭메뉴

// mob 민원정보 버튼
$(".cont4_tab .next").click(function () {
  $(".menu_list.on .mob_slide").animate({ left: "-132px" }, 300, function () {
    $(this)
      .append($(".menu_list.on .mob_slide li:first-child"))
      .css({ left: "0" });
  });
});

$(".cont4_tab .prev").click(function () {
  $(".menu_list.on .mob_slide")
    .css({ left: "-132px" })
    .prepend($(".menu_list.on .mob_slide li:last-child"))
    .animate({ left: "0" }, 300);
});
// mob 민원정보 버튼

// 여행 정보 탭메뉴
$(".cont5 .tour_tab li").click(function () {
  $(this).addClass("select").siblings().removeClass("select");
  $(this).find("sup").removeClass("on");
  $(this).find("sup").addClass("on");
  $(this)
    .find("img")
    .animate({ right: "-228px" }, 200, function () {
      $(".tour_tab li.select")
        .siblings()
        .find("img")
        .css({ opacity: "0", right: "-200px" });
      $(this).css({ opacity: "1" });
    });

  var n = $(this).index() + 1;
  $(".tour" + n)
    .addClass("on")
    .siblings("div")
    .removeClass("on");
});
// 여행 정보 탭메뉴

var bw = $("body").width(); // 전역변수
$(window).resize(function () {
  bw = $("body").width();
});

// 여행 정보 슬라이드
var lw = 378; // 전역변수
$(".cont5_btn .next").click(function () {
  if (bw > 800) {
    lw = 378;
  } else {
    lw = 284;
  }
  $(".tour_list.on ul li").eq(1).addClass("act").siblings().removeClass("act");
  $(".tour_list.on ul").animate({ left: -lw }, 500, function () {
    $(this).append($(".tour_list.on ul li:first-child")).css({ left: "0" });
  });
});

$(".cont5_btn .prev").click(function () {
  if (bw > 800) {
    lw = 378;
  } else {
    lw = 284;
  }
  $(".tour_list.on ul")
    .css({ left: -lw })
    .prepend($(".tour_list.on ul li:last-child"))
    .animate({ left: "0" }, 500);
  $(".tour_list.on ul li").eq(0).addClass("act").siblings().removeClass("act");
});
// 여행 정보 슬라이드

// 하단 배너모음
var lln = $(".cont6_list li").length; // 전역변수
var ln = 0; // 전역변수
var lhk = 0; // 전역변수 false

function slide3() {
  var liw = $(".cont6_list li:first-child").width() + 60;
  $(".cont6_list").animate({ left: -liw }, 600, function () {
    $(this).append($(".cont6_list li:first-child")).css({ left: "0" });
  });
}

var autobnr = setInterval("slide3();", 5000); // 전역변수

$(".cont6_btn .prev").click(function () {
  if (lhk == 0) {
    clearInterval(autobnr);
    autobnr = setInterval("slide3();", 5000);
  }
  ln--;
  if (ln < 0) {
    ln = lln - 1;
  }
  $(".cont6_list")
    .css({ left: -liw })
    .prepend($(".cont6_list li:last-child"))
    .animate({ left: 0 }, 300);
});

$(".cont6_btn .next").click(function () {
  if (lhk == 0) {
    clearInterval(autobnr);
    autobnr = setInterval("slide3();", 5000);
  }
  slide3();
});

$(".cont6_btn .stop").click(function () {
  clearInterval(autobnr);
  $(this).siblings(".control").addClass("select");
  $(this).removeClass("select");
  lhk = 1;
});

$(".cont6_btn .play").click(function () {
  auto = setInterval("slide3()", 5000);
  $(this).removeClass("select");
  $(this).siblings(".control").addClass("select");
  lhk = 0;
});
// 하단 배너모음

// 푸터 메뉴 리스트 탭메뉴
$(document).ready(function () {
  $(".ft_menu li").click(function () {
    $(this).find("img").addClass("on");
    $(this).siblings("li").find("img").removeClass("on");

    var n = $(this).index() + 1;
    $(".footer_list" + n)
      .toggleClass("on")
      .siblings()
      .removeClass("on");
  });
});
// 푸터 메뉴 리스트 탭메뉴
