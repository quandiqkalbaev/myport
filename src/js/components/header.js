export function header() {
  let links = document.querySelectorAll(".header__item");
  let logo = document.querySelector(".header__logo");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      console.log("click");

      e.preventDefault();
      let target = link.getAttribute("data-href");
      gsap.to(window, {
        duration: 0.2,
        scrollTo: {
          y: target,
        },
        ease: "power2",
      });
    });
  });
  logo.addEventListener("click", () => {
    gsap.to(window, {
      duration: 0.2,
      scrollTo: {
        y: '.intro',
      },
      ease: "power2",
    });
  });
}
