import {
  converNumberToString,
  moveNPlace,
  moveNPlaceReverse
} from './quantumEncryption'

export function cesarEncryption(
  word: string,
  encryption: number,
  mode: 'decrypt' | 'encrypt'
): string {
  if (typeof word !== 'string') {
    return ''
  } else {
    if (mode === 'encrypt') {
      const WordToArry = word.split('')
      const CodedWord: string[] = []
      for (let i = 0; i < WordToArry.length; i++) {
        const numeberToLetter = moveNPlace(WordToArry[i], encryption)

        const codedLetter = converNumberToString(numeberToLetter)
        CodedWord.push(codedLetter)
      }
      return CodedWord.join('')
    } else if (mode === 'decrypt') {
      const WordToArry = word.split('')
      const CodedWord: string[] = []
      for (let i = 0; i < WordToArry.length; i++) {
        const numeberToLetter = moveNPlaceReverse(WordToArry[i], encryption)

        const codedLetter = converNumberToString(numeberToLetter)
        CodedWord.push(codedLetter)
      }
      return CodedWord.join('')
    } else {
      return ''
    }
  }
}
