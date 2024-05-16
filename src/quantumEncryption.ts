export function converStrinToNumber(s: string): number {
  let totalValue: number = 0

  totalValue = s.charCodeAt(0)
  return totalValue
}

export function moveNPlace(s: string, n: number): number {
  const numberOriginal: number = converStrinToNumber(s)

  return numberOriginal + n
}

export function moveNPlaceReverse(s: string, n: number): number {
  const numberOriginal: number = converStrinToNumber(s)

  return numberOriginal - n
}
export function converNumberToString(n: number): string {
  let codedLetter: string = ''
  codedLetter = String.fromCharCode(n)
  return codedLetter
}

export function quantumEncryption(
  word: string,
  dicionary: number[],
  mode: 'decrypt' | 'encrypt'
): string {
  if (mode === 'encrypt') {
    if (typeof word !== 'string') {
      return ''
    } else {
      const WordToArry = word.split('')
      const CodedWord: string[] = []
      for (let i = 0; i < WordToArry.length; i++) {
        const numeberToLetter = moveNPlace(WordToArry[i], dicionary[i])

        const codedLetter = converNumberToString(numeberToLetter)
        CodedWord.push(codedLetter)
      }
      return CodedWord.join('')
    }
  } else if (mode === 'decrypt') {
    if (typeof word !== 'string') {
      return ''
    } else {
      const WordToArry = word.split('')
      const CodedWord: string[] = []
      for (let i = 0; i < WordToArry.length; i++) {
        const numeberToLetter = moveNPlaceReverse(WordToArry[i], dicionary[i])

        const codedLetter = converNumberToString(numeberToLetter)
        CodedWord.push(codedLetter)
      }
      return CodedWord.join('')
    }
  } else {
    return ''
  }
}
