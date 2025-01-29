export async function VantaFog() {
  if (!document.querySelector("[data-vanta-fog]")) return;

  if (typeof VANTA === "undefined") {
    console.error("VANTA is not defined. Make sure to include the VANTA library.");
    return;
  }

  VANTA.FOG({
    el: "[data-vanta-fog]",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    highlightColor: 0x0,
    midtoneColor: 0x098891,
    lowlightColor: 0x002244,
    baseColor: 0x0,
    blurFactor: 0.76,
    speed: 3.3,
    zoom: 0.9,
  });
}
