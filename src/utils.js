export const hslString = (H, S, L, a = 1) => {
  return `hsl(${H} ${S}% ${L}% / ${a})`;
};

export function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time - hours * 3600) / 60);
  const seconds = time % 60;
  const zeroPrefix = (time) => (time < 10 ? "0" : "");

  const hourString =
    hours > 0 ? `${zeroPrefix(hours)}${hours}:` : "";
  return `${hourString}${zeroPrefix(
    minutes
  )}${minutes}:${zeroPrefix(seconds)}${seconds}`;
}

export function sanitize(string) {
  harmfulSymbols.forEach(
    (symbol) =>
      (string = string.replace(new RegExp(`${symbol}`, "g"), ""))
  );
  return string;
}

export function wait(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

const harmfulSymbols = [
  "<",
  ">",
  "&",
  '"',
  "'",
  "/",
  "'",
  ":",
  ";",
  "\\+",
  "-",
  "=",
  "~",
  "|",
  "^",
  "%",
  "\\*",
  "$",
  "{",
  "}",
  "\\(",
  "\\)",
  "\\$",
  "'",
  '"',
];
