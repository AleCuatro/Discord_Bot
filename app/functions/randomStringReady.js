export function randomStringActivity(text) {
    const words = text;
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    return `${randomWord}`;
  }