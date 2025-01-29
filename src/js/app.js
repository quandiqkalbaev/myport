import Swiper from "swiper";
import { plugins } from "./components/plugins.js";
import { lenis } from "./components/lenis.js"
import { intro } from "./sections/intro.js";
import { validationPhoneInput } from "./components/validation-phone-input.js";
import { VantaFog } from "./common/vantaFog.js";

window.addEventListener("onbeforeunload", function () {
    window.scrollTo(0, 0);
    gsap.to(window, { duration: 0, scrollTo: 0 });
});
window.addEventListener("unload", function () {
    window.scrollTo(0, 0);
    gsap.to(window, { duration: 0, scrollTo: 0 });
});


window.addEventListener("load", () => {
    plugins()
    lenis()
    Swiper.use([Navigation, Autoplay])

    validationPhoneInput()
    intro()
    VantaFog()

    // Zoom Site Disabled
    document.addEventListener('gesturestart', function (e) {
        e.preventDefault();
        document.body.style.zoom = 1;
    });

    document.addEventListener('gesturechange', function (e) {
        e.preventDefault();
        document.body.style.zoom = 1;
    });

    document.addEventListener('gestureend', function (e) {
        e.preventDefault();
        document.body.style.zoom = 1;
    });
})