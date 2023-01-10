# WORD CLOCK

you can find any useful info in this readme.

## Word Data

- initial word data

```js
// simple data yet to be change
const wordDatas = [
  /* cSpell:disable */
  "itoismiashxl", // it is
  "quarteryoten", // quarter ten
  "hfivehalfina", // five half
  "titwentyhaad", // twenty
  "minutessitch", // minutes
  "ipasttoutwic", // past to
  "zoneeightsix", // eight six
  "threesamfive", // three five
  "twoninealoni", // two nine
  "foursevenuti", // four seven
  "televentenig", // eleven
  "maetwelvenob", // twelve
  "maòclocksmol", // òclock
];
```

- new data structure to resolve glowing issue

```js
export const wordClocksTable = [
  // row 1; it is
  { letter: "i", type: "always", data: "" },
  { letter: "t", type: "always", data: "" },
  { letter: "o", type: "", data: "" },
  { letter: "i", type: "always", data: "" },
  { letter: "s", type: "always", data: "" },
  { letter: "m", type: "", data: "" }, //
  { letter: "i", type: "", data: "" },
  { letter: "a", type: "", data: "" },
  { letter: "s", type: "", data: "" },
  { letter: "h", type: "", data: "" },
  { letter: "x", type: "", data: "" },
  { letter: "l", type: "", data: "" },
  // row 2; quarter, ten
  { letter: "q", type: "minute", data: "quarter" },
  { letter: "u", type: "minute", data: "quarter" },
  { letter: "a", type: "minute", data: "quarter" },
  { letter: "r", type: "minute", data: "quarter" },
  { letter: "t", type: "minute", data: "quarter" },
  { letter: "e", type: "minute", data: "quarter" }, //
  { letter: "r", type: "minute", data: "quarter" },
  { letter: "y", type: "", data: "" },
  { letter: "o", type: "", data: "" },
  { letter: "t", type: "minute", data: "ten" },
  { letter: "e", type: "minute", data: "ten" },
  { letter: "n", type: "minute", data: "ten" },
  // row 3; five, half
  { letter: "h", type: "", data: "" },
  { letter: "f", type: "minute", data: "five" },
  { letter: "i", type: "minute", data: "five" },
  { letter: "v", type: "minute", data: "five" },
  { letter: "e", type: "minute", data: "five" },
  { letter: "h", type: "minute", data: "half" }, //
  { letter: "a", type: "minute", data: "half" },
  { letter: "l", type: "minute", data: "half" },
  { letter: "f", type: "minute", data: "half" },
  { letter: "i", type: "", data: "" },
  { letter: "n", type: "", data: "" },
  { letter: "a", type: "", data: "" },
  // row 4; twenty
  { letter: "t", type: "", data: "" },
  { letter: "i", type: "", data: "" },
  { letter: "t", type: "minute", data: "twenty" },
  { letter: "w", type: "minute", data: "twenty" },
  { letter: "e", type: "minute", data: "twenty" },
  { letter: "n", type: "minute", data: "twenty" }, //
  { letter: "t", type: "minute", data: "twenty" },
  { letter: "y", type: "minute", data: "twenty" },
  { letter: "h", type: "", data: "" },
  { letter: "a", type: "", data: "" },
  { letter: "a", type: "", data: "" },
  { letter: "d", type: "", data: "" },
  // row 4; twenty
  { letter: "m", type: "minutes", data: "" },
  { letter: "i", type: "minutes", data: "" },
  { letter: "n", type: "minutes", data: "" },
  { letter: "u", type: "minutes", data: "" },
  { letter: "t", type: "minutes", data: "" },
  { letter: "e", type: "minutes", data: "" }, //
  { letter: "s", type: "minutes", data: "" },
  { letter: "s", type: "", data: "" },
  { letter: "i", type: "", data: "" },
  { letter: "t", type: "", data: "" },
  { letter: "c", type: "", data: "" },
  { letter: "h", type: "", data: "" },
  // row 5; past,to
  { letter: "i", type: "", data: "" },
  { letter: "p", type: "pastTo", data: "past" },
  { letter: "a", type: "pastTo", data: "past" },
  { letter: "s", type: "pastTo", data: "past" },
  { letter: "t", type: "pastTo", data: "past" },
  { letter: "t", type: "pastTo", data: "to" }, //
  { letter: "o", type: "pastTo", data: "to" },
  { letter: "u", type: "", data: "" },
  { letter: "t", type: "", data: "" },
  { letter: "w", type: "", data: "" },
  { letter: "i", type: "", data: "" },
  { letter: "c", type: "", data: "" },
  // row 6; one,eight,six
  { letter: "z", type: "", data: "" },
  { letter: "o", type: "hour", data: "one" },
  { letter: "n", type: "hour", data: "one" },
  { letter: "e", type: "hour", data: "one" },
  { letter: "e", type: "hour", data: "eight" },
  { letter: "i", type: "hour", data: "eight" }, //
  { letter: "g", type: "hour", data: "eight" },
  { letter: "h", type: "hour", data: "eight" },
  { letter: "t", type: "hour", data: "eight" },
  { letter: "s", type: "hour", data: "six" },
  { letter: "i", type: "hour", data: "six" },
  { letter: "x", type: "hour", data: "six" },
  // row 7; three,five
  { letter: "t", type: "hour", data: "three" },
  { letter: "h", type: "hour", data: "three" },
  { letter: "r", type: "hour", data: "three" },
  { letter: "e", type: "hour", data: "three" },
  { letter: "e", type: "hour", data: "three" },
  { letter: "s", type: "", data: "" }, //
  { letter: "a", type: "", data: "" },
  { letter: "m", type: "", data: "" },
  { letter: "f", type: "hour", data: "five" },
  { letter: "i", type: "hour", data: "five" },
  { letter: "v", type: "hour", data: "five" },
  { letter: "e", type: "hour", data: "five" },
  // row 8; two,nine
  { letter: "t", type: "hour", data: "two" },
  { letter: "w", type: "hour", data: "two" },
  { letter: "o", type: "hour", data: "two" },
  { letter: "n", type: "hour", data: "nine" },
  { letter: "i", type: "hour", data: "nine" },
  { letter: "n", type: "hour", data: "nine" }, //
  { letter: "e", type: "hour", data: "nine" },
  { letter: "a", type: "", data: "" },
  { letter: "l", type: "", data: "" },
  { letter: "o", type: "", data: "" },
  { letter: "n", type: "", data: "" },
  { letter: "i", type: "", data: "" },
  // row 9; four,seven
  { letter: "f", type: "hour", data: "four" },
  { letter: "o", type: "hour", data: "four" },
  { letter: "u", type: "hour", data: "four" },
  { letter: "r", type: "hour", data: "four" },
  { letter: "s", type: "hour", data: "seven" },
  { letter: "e", type: "hour", data: "seven" }, //
  { letter: "v", type: "hour", data: "seven" },
  { letter: "e", type: "hour", data: "seven" },
  { letter: "n", type: "hour", data: "seven" },
  { letter: "u", type: "", data: "" },
  { letter: "t", type: "", data: "" },
  { letter: "i", type: "", data: "" },
  // row 10; ten,eleven
  { letter: "t", type: "", data: "" },
  { letter: "e", type: "hour", data: "eleven" },
  { letter: "l", type: "hour", data: "eleven" },
  { letter: "e", type: "hour", data: "eleven" },
  { letter: "v", type: "hour", data: "eleven" },
  { letter: "e", type: "hour", data: "eleven" }, //
  { letter: "n", type: "hour", data: "eleven" },
  { letter: "t", type: "hour", data: "ten" },
  { letter: "e", type: "hour", data: "ten" },
  { letter: "n", type: "hour", data: "ten" },
  { letter: "i", type: "", data: "" },
  { letter: "g", type: "", data: "" },
  // row 11; twelve
  { letter: "m", type: "", data: "" },
  { letter: "a", type: "", data: "" },
  { letter: "e", type: "", data: "" },
  { letter: "t", type: "hour", data: "twelve" },
  { letter: "w", type: "hour", data: "twelve" },
  { letter: "e", type: "hour", data: "twelve" }, //
  { letter: "l", type: "hour", data: "twelve" },
  { letter: "v", type: "hour", data: "twelve" },
  { letter: "e", type: "hour", data: "twelve" },
  { letter: "n", type: "", data: "" },
  { letter: "o", type: "", data: "" },
  { letter: "b", type: "", data: "" },
  // row 12; clock
  { letter: "m", type: "", data: "" },
  { letter: "a", type: "", data: "" },
  { letter: "ò", type: "always", data: "" },
  { letter: "c", type: "always", data: "" },
  { letter: "l", type: "always", data: "" },
  { letter: "o", type: "always", data: "" }, //
  { letter: "c", type: "always", data: "" },
  { letter: "k", type: "always", data: "" },
  { letter: "s", type: "", data: "" },
  { letter: "m", type: "", data: "" },
  { letter: "o", type: "", data: "" },
  { letter: "l", type: "", data: "" },
];
```

## Audio

this section, we will learn how to make our clock read the time for us, however i dont think that this tutorial has specific viewer to request this audio path. so i just leave it here for now.

- audio file path

```js
export const soundPath = {
  one: "../assets/sounds/1.mp3",
  two: "../assets/sounds/2.mp3",
  three: "../assets/sounds/3.mp3",
  four: "../assets/sounds/4.mp3",
  five: "../assets/sounds/5.mp3",
  six: "../assets/sounds/6.mp3",
  seven: "../assets/sounds/7.mp3",
  eight: "../assets/sounds/8.mp3",
  nine: "../assets/sounds/9.mp3",
  ten: "../assets/sounds/10.mp3",
  eleven: "../assets/sounds/11.mp3",
  twelve: "../assets/sounds/12.mp3",
  itIs: "../assets/sounds/itIs.mp3",
  oClock: "../assets/sounds/oClock.mp3",
  to: "../assets/sounds/to.mp3",
  past: "../assets/sounds/past.mp3",
  twenty: "../assets/sounds/20.mp3",
  quarter: "../assets/sounds/quarter.mp3",
  half: "../assets/sounds/half.mp3",
  minutes: "../assets/sounds/minutes.mp3",
};
```

- audio state

```js
export const soundState = {
  /** @type {HTMLAudioElement} */
  one: undefined,
  /** @type {HTMLAudioElement} */
  two: undefined,
  /** @type {HTMLAudioElement} */
  three: undefined,
  /** @type {HTMLAudioElement} */
  four: undefined,
  /** @type {HTMLAudioElement} */
  five: undefined,
  /** @type {HTMLAudioElement} */
  six: undefined,
  /** @type {HTMLAudioElement} */
  seven: undefined,
  /** @type {HTMLAudioElement} */
  eight: undefined,
  /** @type {HTMLAudioElement} */
  nine: undefined,
  /** @type {HTMLAudioElement} */
  ten: undefined,
  /** @type {HTMLAudioElement} */
  eleven: undefined,
  /** @type {HTMLAudioElement} */
  twelve: undefined,
  /** @type {HTMLAudioElement} */
  itIs: undefined,
  /** @type {HTMLAudioElement} */
  oClock: undefined,
  /** @type {HTMLAudioElement} */
  to: undefined,
  /** @type {HTMLAudioElement} */
  past: undefined,
  /** @type {HTMLAudioElement} */
  twenty: undefined,
  /** @type {HTMLAudioElement} */
  quarter: undefined,
  /** @type {HTMLAudioElement} */
  half: undefined,
  /** @type {HTMLAudioElement} */
  minutes: undefined,

  isReady: false,
};
```
