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

// ############################# PAGE 2 #########################

var page2 = document.querySelector("#page-2");
var cursor2 = document.querySelector("#cursor-2");
page2.addEventListener("mousemove", function (dets) {
  gsap.to(cursor2, {
    x: dets.x,
    y: dets.y,
    duration: 0.6,
  });
});

// ############################# PAGE 3 #########################

var page3 = document.querySelector("#page-3");
var cursor2 = document.querySelector("#cursor-2");
page3.addEventListener("mousemove", function (dets) {
  gsap.to(cursor2, {
    x: dets.x,
    y: dets.y,
    duration: 0.6,
  });
});

// ############################# PAGE 4 #########################

var page4 = document.querySelector("#page-4");
var cursor2 = document.querySelector("#cursor-2");
page4.addEventListener("mousemove", function (dets) {
  gsap.to(cursor2, {
    x: dets.x,
    y: dets.y,
    duration: 0.6,
  });
});

// ############################ page-5 #################################
var page4 = document.querySelector("#page-5");
var cursor2 = document.querySelector("#cursor-2");
page4.addEventListener("mousemove", function (dets) {
  gsap.to(cursor2, {
    x: dets.x,
    y: dets.y,
    duration: 0.6,
  });
});
window.addEventListener("wheel", function (dets) {
  if (dets.deltaY > 0) {
    gsap.to(".marque", {
      transform: "translateX(-200%)",
      ease: "none",
      duration: 3.5,
      repeat: -1,
    });
    gsap.to(".marque img", {
      rotate: 180,
    });
  } else {
    gsap.to(".marque", {
      transform: "translateX(0%)",
      ease: "none",
      duration: 3,
      repeat: -1,
    });
    gsap.to(".marque img", {
      rotate: 0,
    });
  }
});

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// gsap.registerPlugin(ScrollTrigger)
document.querySelectorAll(".elem").forEach((elem) => {
  let image = elem.querySelector("img");
  let tl = gsap.timeline();
  let xTransform = gsap.utils.random(-100, 100);
  tl.set(
    image,
    {
      transformOrigin: `${xTransform < 0 ? 0 : "100"}`,
    },
    "start"
  )
    .to(
      image,
      {
        scale: 0,
        ease: "none",
        scrollTrigger: {
          trigger: image,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      },
      "start"
    )
    .to(elem, {
      xPercent: xTransform,
      // ease: 'Power4 .easeInOut',
      ease: "none",
      scrollTrigger: {
        trigger: image,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
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
