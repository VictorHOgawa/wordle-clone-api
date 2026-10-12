export const scoringFunction = (guess: string, answer: string) => {
  let answerLetters: string[] = [];
  answerLetters = answer.split('')

  let checks: string[] = ["", "", "", "", ""];

  // Green checks have to run fully first to "use" up all of the individual letters, in case of duplicates for example
  for (let i = 0; i < guess.length; i++) {
    if (answerLetters[i] === guess[i]) {
      checks[i] = "🟩"
      answerLetters[i] = "";
    }
  }

  for (let i = 0; i < guess.length; i++) {
    if (checks[i] === "🟩") { continue }

    let indexOf = answerLetters.indexOf(guess[i]);
    if (indexOf !== -1) {
      checks[i] = "🟨"
      answerLetters[indexOf] = ""
    } else {
      checks[i] = "⬜"
    }
  }

  return checks.join("")
}
