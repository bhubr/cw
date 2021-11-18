// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str) {
  return str
    .split(" ")
    .map(word => ['!', '?'].includes(word) ? word : `${word.substring(1, word.length)}${word[0]}ay`)
    .join(" ")
}

module.exports = pigIt
