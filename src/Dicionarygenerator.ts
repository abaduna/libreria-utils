export function Dicionarygenerator(word: string): number[] {
  const dicionary: number[] = []
  if (typeof word !== 'string') {
    return dicionary
  }
  for (let i = 0; i < word.length * 2; i++) {
    const numerRandon: number = Math.floor(Math.random() * 25) + 1
    dicionary.push(numerRandon)
  }

  return dicionary
}
