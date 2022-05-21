import { remark } from "remark";
import html from "remark-html";

/* Markdown to HTML */

export async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

/* Shuffle array and get random element from array */

export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/* It takes an array as an argument and returns a random element from that array */

export function getRandomElement(array) {
  const choose = Math.floor(Math.random() * array.length);
  return array[choose];
}