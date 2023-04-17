import { CANVAS } from "../canvas";

const fullscreen = () => {
  CANVAS.requestFullscreen && CANVAS.requestFullscreen();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const can = CANVAS as any;
  can.webkitRequestFullscreen && can.webkitRequestFullscreen();
  can.mozRequestFullscreen && can.mozRequestFullscreen();
  can.msRequestFullscreen && can.msRequestFullscreen();
};

const exitFullscreen = () => {
  document.exitFullscreen && document.exitFullscreen();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const doc = document as any;
  doc.webkitExitFullscreen && doc.webkitExitFullscreen();
  doc.mozExitFullscreen && doc.mozExitFullscreen();
  doc.msExitFullscreen && doc.msExitFullscreen();
};

export const handleFullscreen = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const doc = document as any;
  const fullscreenElement =
    document.fullscreenElement || doc.webkitFullscreenElement;

  fullscreenElement ? exitFullscreen() : fullscreen();
};
