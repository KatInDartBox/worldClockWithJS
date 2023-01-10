import { getTimeWord } from "./getTimeWord.js";
import { wordDatas } from "./wordDatas.js";

export function renderClock(date) {
  const elmWrapper = document.querySelector("#wordClockWrapper");
  let htlmText = "";

  // const minuteName = "five";
  // const pastTo = "past";
  // const hourName = "nine";

  // const timeWord = getTimeWord(date);
  // const minuteName = timeWord.minuteName;
  const { minuteName, pastTo, hourName } = getTimeWord(date);

  wordDatas.forEach((letterObj) => {
    let glowClass = "";
    // always on
    if (letterObj.type === "always") {
      glowClass = "glow";
    }
    // minute
    if (letterObj.type === "minute" && letterObj.data === minuteName) {
      glowClass = "glow";
    }

    // minutes
    if (minuteName !== "" && letterObj.type === "minutes") {
      glowClass = "glow";
    }

    // pastTo
    if (letterObj.type === "pastTo" && letterObj.data === pastTo) {
      glowClass = "glow";
    }
    // hour
    if (letterObj.type === "hour" && letterObj.data === hourName) {
      glowClass = "glow";
    }

    htlmText += `<span class="box pop ${glowClass}">${letterObj.letter}</span>`;
  });

  elmWrapper.innerHTML = htlmText;
}
