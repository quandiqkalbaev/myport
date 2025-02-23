import { addClassName, removeClassName } from "../components/utils.js";

export default function projects() {
  let projects = document.querySelectorAll(".projects__item");
  let projectsTitle = document.querySelector(".projects__heading");
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
        start: "top 65%",
        end: "bottom 65%",
        onEnter: () => {
          setActive(index), addClassName(projectsTitle);
        },
        onEnterBack: () => setActive(index),
        onLeaveBack: () => {
          removeClassName(projectsTitle)
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
