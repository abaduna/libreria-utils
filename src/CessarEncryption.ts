import { converNumberToString, moveNPlace } from './TransformWordinWordCodifig'

export function cesarEncryption(word: string, encryption: number): string {
  if (typeof word !== 'string') {
    return ''
  } else {
    const WordToArry = word.split('')
    const CodedWord: string[] = []
    for (let i = 0; i < WordToArry.length; i++) {
      const numeberToLetter = moveNPlace(WordToArry[i], encryption)

      const codedLetter = converNumberToString(numeberToLetter)
      CodedWord.push(codedLetter)
    }
    return CodedWord.join('')
  }
}
