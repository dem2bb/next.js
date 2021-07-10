import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const setAnimation = () => {
  //   gsap.from(".card-set-item", {
  //     scrollTrigger: ".card-set-item",
  //     duration: 0.8,
  //     opacity: 0,
  //     y: 100,
  //     stagger: 0.25,
  //   });

  function animateFrom(elem, direction = 1) {
    direction = direction || 1;

    var x = 0,
      y = direction * 100;

    if (elem.classList.contains("gs_reveal_fromLeft")) {
      x = -400;
      y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
      x = 400;
      y = 0;
    }

    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";

    gsap.fromTo(
      elem,
      { x: x, y: y, autoAlpha: 0 },
      {
        duration: 2,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
        rotation: 0.01,
      }
    );
  }

  function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
  }

  gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      onEnter: function () {
        animateFrom(elem);
      },
    });
  });
};

export default setAnimation;
