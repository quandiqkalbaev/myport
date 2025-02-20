import { addClassName, removeClassName } from "../components/utils.js";

export default function projects() {
  let projects = document.querySelectorAll(".projects__item");
  let anchors = document.querySelectorAll(".projects__anchor");
  let active = 0;

  function setActive(i) {
    removeClassName(projects[active]);
    active = i;
    addClassName(projects[i]);
  }

  projects.forEach((project, index) => {
    gsap.timeline({
      scrollTrigger: {
        trigger: anchors[index],
        start: "top center",
        end: "bottom center",
        onEnter: () => setActive(index),
        onEnterBack: () => setActive(index),
        onLeaveBack: () => {
          if (index === 0) {
            removeClassName(projects[active]);
          } else {
            setActive(index);
          }
        },
      },
    });
  });
}
