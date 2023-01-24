// Jumble Word
export function wordJumble(word:string):string {
  let str:string = word;
  let count:number = word.length;

  return word.split("").reduce((acc:string) => {
    let rnum:number = Math.floor(Math.random() * count);
    let substring:string = str.substring(rnum, rnum + 1);

    acc += substring;
    str = str.replace(substring, "");
    count--;
    return acc;
  }, "");
};
// console.log(wordJumble("zdravo"));

// Jumple Many
export const jumbleMany = (words: string) => words.split(" ")
    .map((item: string) => wordJumble(item))
    .join(" ");