export const scoringFunction = (word: string) => {
  const goalWord = "bbbbb";
  const goalWordLetters = goalWord.split('');


  if (typeof (word) !== "string") {
    return "Please include a valid word.";
  }

  const localWord = word.normalize("NFKD");

  if (localWord.includes(" ")) {
    return "No spaces allowed."
  }

  if (localWord.length !== 5) {
    return "Only 5 letter words are allowed."
  }

  let letters: string[] = [];
  letters = localWord.split('')

  const allLettersValid = letters.map((l) => typeof (l) === "string")

  if (letters.length === 5 && allLettersValid) {
    if (localWord === goalWord) {
      return "You guessed the correct word!"
    }

    const matchingLetters = goalWordLetters.map((gwl) => letters.flatMap((l) => l === gwl))
    console.log("matchingLetters: ", matchingLetters[0])

    return "Valid"
  }
}
