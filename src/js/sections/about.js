import { addClassName, removeClassName } from "../components/utils.js";

export default function about() {
  let about = document.querySelector(".about");
  gsap.timeline({
    scrollTrigger: {
      trigger: about,
      start: "center bottom",
      end: "center bottom ",
      onEnter: () => addClassName(about),
      onLeaveBack: () => removeClassName(about),
    },
  });
}
