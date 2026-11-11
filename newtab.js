(() => {
  const video = document.getElementById("background-video");

  // Muted autoplay is permitted by Chrome. Retry when the tab becomes visible.
  const playIfVisible = () => {
    if (!document.hidden) {
      const result = video.play();
      if (result && typeof result.catch === "function") {
        result.catch(() => {
          // Keep the solid #323F2B background if playback is temporarily unavailable.
        });
      }
    } else {
      video.pause();
    }
  };

  document.addEventListener("visibilitychange", playIfVisible);
  window.addEventListener("pageshow", playIfVisible);
  window.addEventListener("pagehide", () => video.pause());
  video.addEventListener("canplay", playIfVisible, { once: true });
  playIfVisible();
})();
