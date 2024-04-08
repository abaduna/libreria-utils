type ABCInNumber = Record<string, number>
const abcInNumber: ABCInNumber = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25
}
export function converStrinToNumber(s: string): number {
  let totalValue: number = 0
  const lowerCaseS = s.toLowerCase()

  for (const later in abcInNumber) {
    if (later === lowerCaseS) {
      totalValue = abcInNumber[later]
      break
    }
  }
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
  for (const later in abcInNumber) {
    if (abcInNumber[later] === n) {
      codedLetter = later
      break
    }
  }
  return codedLetter
}
export function quantumEncryption(
  word: string,
  dicionary: number[],
  mode: string
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
