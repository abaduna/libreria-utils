type AbcNumberPair = [string, number]
const abcInNumber: AbcNumberPair[] = [
  ['a', 1],
  ['b', 2],
  ['c', 3],
  ['d', 4],
  ['e', 5],
  ['f', 6],
  ['g', 7],
  ['h', 8],
  ['i', 9],
  ['j', 10],
  ['k', 11],
  ['m', 12],
  ['n', 13],
  ['o', 14],
  ['p', 15],
  ['q', 16],
  ['r', 17],
  ['s', 18],
  ['t', 19],
  ['u', 20],
  ['v', 21],
  ['w', 22],
  ['x', 23],
  ['y', 24],
  ['z', 25]
]
export function converStrinToNumber(s: string) {
  let totalValue: number = 0
  const lowerCaseS = s.toLowerCase()
  for (const later of abcInNumber) {
    if (later[0] === lowerCaseS) {
      totalValue = later[1]
    }

    return totalValue
  }
}
export function moveNPlace(s: string, n: number) {
  const numberOriginal: number = converStrinToNumber(s) as number

  return (numberOriginal as number) + n
}
export function converNumberToString(n: number) {
  let letraCodificada: string = ''
  for (const later of abcInNumber) {
    if (later[1] === n) {
      letraCodificada = later[0]
    }
  }
  return letraCodificada
}
export function moveNWord(palabra: string, dicionario: number[]) {
  const palabraToArry = palabra.split('')
  const plabraCodificada: string[] = []
  for (let i = 0; i < palabraToArry.length; i++) {
    const numeberToPalabra = moveNPlace(palabraToArry[i], dicionario[i])

    const letraCodificada = converNumberToString(numeberToPalabra as number)
    plabraCodificada.push(letraCodificada)
  }
  return plabraCodificada.join('')
}
