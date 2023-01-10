import { getTimeWord } from "./scripts/getTimeWord.js";
import { renderClock } from "./scripts/renderClock.js";

const now = new Date();
let { minuteName: pastMinuteName } = getTimeWord(now);
renderClock(now);

setInterval(() => {
  const currentTime = new Date();

  const { minuteName } = getTimeWord(currentTime);
  if (pastMinuteName !== minuteName) {
    renderClock(currentTime);
    pastMinuteName = minuteName;
  }
}, 1 * 60 * 1000);
