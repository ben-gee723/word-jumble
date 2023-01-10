//

// Jumbled Word
// Input: String of original word
// Input: String of jumbled word
// 1. Take word
// 2. Loop through and randomise word
// 3. return jumbled word

export function wordJumbleOld(word) {
  // Global Variables
  let str = word;
  let jumbled = "";
  let count = word.length;

  for (let i = 0; i < word.length; i++) {
    // Local Variables
    let rnum = Math.floor(Math.random() * count);
    let substring = str.substring(rnum, rnum + 1);

    // 1. Randomise Number
    // 2. Add to jumbled word string
    jumbled += substring;

    // 3. Remove letter from string
    str = str.replace(substring, "");

    // 4. reduce count
    count--;
  }
  // Return jumbled word
  return jumbled;
}

// console.log(wordJumble("zdravo"));
