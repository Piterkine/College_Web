function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

locomotiveAnimation();
// ##################### loader ########################

function loaderAnimation() {
  var loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 4200);
}
loaderAnimation();

(function () {
  const link = document.querySelectorAll("nav > .hover-this");
  const cursor = document.querySelector(".cursor");

  const animateit = function (e) {
    const span = this.querySelector("span");
    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,
      move = 25,
      xMove = (x / width) * (move * 2) - move,
      yMove = (y / height) * (move * 2) - move;

    span.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === "mouseleave") span.style.transform = "";
  };

  const editCursor = (e) => {
    const { clientX: x, clientY: y } = e;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  };

  link.forEach((b) => b.addEventListener("mousemove", animateit));
  link.forEach((b) => b.addEventListener("mouseleave", animateit));
  window.addEventListener("mousemove", editCursor);
})();

// ######################### Slider #############################
var page1 = document.querySelector(".swiper-wrapper");

page1.addEventListener("mousemove", function (dets) {
  gsap.to(cursor2, {
    x: dets.x,
    y: dets.y,
    duration: 0.6,
  });
});

var swiper = new Swiper(".Slider", {
  autoplay: true,
  speed: 2500,
  loop: true,
  parallax: true,

  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});
// ############################# PAGE 2 #########################

var page2 = document.querySelector("#page-2");
var cursor2 = document.querySelector("#cursor-2");
var row = document.querySelector(".row");
page2.addEventListener("mousemove", function (dets) {
  gsap.to(cursor2, {
    x: dets.x,
    y: dets.y,
    duration: 0.6,
  });
});

//############################## PAGE 3 #################################
var page3 = document.querySelector("#page-3");
var cursor2 = document.querySelector("#cursor-2");
page3.addEventListener("mousemove", function (dets) {
  gsap.to(cursor2, {
    x: dets.x,
    y: dets.y,
    duration: 0.6,
  });
});

// #################################  page-4  ###################################

// ############################### page-5 #################################
var page5 = document.querySelector("#page-5");
var card1 = document.querySelector("#card1");
var card2 = document.querySelector("#card2");
var card3 = document.querySelector("#card3");
// card1.addEventListener("", function () {
//   cursor2.style.border = "0.2vw solid #000";
//   cursor2.style.backgroundColor =
//     " linear-gradient(225deg, #D9AFD9 0%, #97D9E1 100%";
// });
page5.addEventListener("mousemove", function (dets) {
  gsap.to(cursor2, {
    x: dets.x,
    y: dets.y,
    duration: 0.6,
  });
});

// ############################ page-6 #################################
var page6 = document.querySelector("#page-6");
page6.addEventListener("mousemove", function (dets) {
  gsap.to(cursor2, {
    x: dets.x,
    y: dets.y,
    duration: 0.6,
  });
});
