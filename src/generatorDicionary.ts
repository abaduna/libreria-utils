export function generatorDicionary(word: string): number[] {
  const dicionary: number[] = []
  for (let i = 0; i < word.length * 2; i++) {
    const numerRandon: number = Math.floor(Math.random() * 25) + 1
    dicionary.push(numerRandon)
  }

  return dicionary
}
