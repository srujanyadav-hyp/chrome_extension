# Olive Character New Tab (Chrome Manifest V3)

A minimal Chrome New Tab extension that plays your bundled Gemini-generated MP4
over a solid `#323F2B` fallback background.

## Install

1. Extract `zoro-character-chrome-extension.zip`.
2. Open Chrome and visit `chrome://extensions`.
3. Turn on **Developer mode**.
4. Select **Load unpacked**.
5. Choose the extracted `zoro-character-chrome-extension` folder.
6. Open a new tab (`Ctrl+T` / `Cmd+T`).

## Included files

- `manifest.json` — Manifest V3 New Tab override.
- `newtab.html` — Full-screen video page.
- `style.css` — Full-bleed video and exact olive fallback background.
- `newtab.js` — Starts muted playback and pauses when the tab is hidden.
- `background.mp4` — Your supplied Gemini video, bundled locally.

## Notes

- No third-party branding, analytics, external scripts, fonts, or network requests.
- Video is muted and loops continuously.
- `object-fit: cover` fills the window. Depending on screen aspect ratio, a small
  amount of the video edges may be cropped.
- Chrome may suspend playback when the tab is inactive to save resources.
- To uninstall, open `chrome://extensions` and remove **Olive Character New Tab**.
