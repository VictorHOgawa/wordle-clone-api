type CheckTypes = "correct" | "present" | "absent" | "";

export const scoringFunction = (guess: string, answer: string) => {
  const normalizeString = (string: string) => {
    return string.toLowerCase().normalize("NFKD").replace(/\p{M}/gu, "");
  };

  const normalizedGuess = normalizeString(guess);
  const normalizedAnswer = normalizeString(answer);

  if (normalizedGuess.length !== normalizedAnswer.length) {
    throw new Error(`The word must be ${normalizedAnswer.length} letters long`);
  }

  const answerLetters = normalizedAnswer.split("");

  const checks: CheckTypes[] = Array(normalizedAnswer.length).fill("");

  // Green checks have to run fully first to "use" up all of the individual letters, in case of duplicates for example
  for (let i = 0; i < normalizedGuess.length; i++) {
    if (answerLetters[i] === normalizedGuess[i]) {
      checks[i] = "correct";
      answerLetters[i] = "";
    }
  }

  for (let i = 0; i < normalizedGuess.length; i++) {
    if (checks[i] === "correct") {
      continue;
    }

    const indexOf = answerLetters.indexOf(normalizedGuess[i]);
    if (indexOf !== -1) {
      checks[i] = "present";
      answerLetters[indexOf] = "";
    } else {
      checks[i] = "absent";
    }
  }
  return checks;
};
