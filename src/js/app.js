import { plugins } from "./components/plugins.js";
import { lenis } from "./components/lenis.js";
import { intro } from "./sections/intro.js";
import { VantaFog } from "./common/vantaFog.js";
import projects from "./sections/projects.js";
import about from "./sections/about.js";
import { header } from "./components/header.js";
import { queryMatches } from "./components/utils.js";

plugins();
lenis();
lenisScroll.stop();
window.addEventListener("onbeforeunload", function () {
  window.scrollTo(0, 0);
  gsap.to(window, { duration: 0, scrollTo: 0 });
});
window.addEventListener("unload", function () {
  window.scrollTo(0, 0);
  gsap.to(window, { duration: 0, scrollTo: 0 });
});

window.addEventListener("DOMContentLoaded", () => {
  (async function loading() {
    const mediaElements = gsap.utils.toArray("[data-img]");
    const totalMedia = mediaElements.length;
    let loadedMedia = 0;
    const preloader = document.querySelector(".preloader");
    const preloaderNum = document.querySelector(".preloader__number");
    const introBlock = document.querySelector(".intro");
    const headerBlock = document.querySelector(".header");
    function setProgress(percent) {
      preloaderNum.innerHTML = `${percent}%`;
    }
    async function mediaLoaded(e) {
      loadedMedia++;
      const percent = Math.floor((loadedMedia / totalMedia) * 100);
      setProgress(percent);

      if (loadedMedia === totalMedia) {
        setTimeout(() => {
          preloader.classList.add("hidden");
        }, 300);

        setTimeout(() => {
          introBlock.classList.add("active");
          headerBlock.classList.add("active");
        }, 600);
        setTimeout(() => {
          // if (queryMatches(769, "min")) {
            lenisScroll.start();
          // }
        }, 2000);
        header();
        intro();
        about();
        projects();
        VantaFog();
      }
    }

    mediaElements.forEach((media) => {
      const dataSrc = media.getAttribute("data-img");
      if (dataSrc) {
        media.onerror = () => {
          console.log(`Ошибка загрузки для ${dataSrc}`);
          mediaLoaded();
        };
        media.setAttribute("src", dataSrc);
        media.onload = mediaLoaded;
      }
    });
  })();
});
