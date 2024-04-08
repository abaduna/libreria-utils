import { describe, expect, it } from 'vitest'

import { quantumEncryption } from '../quantumEncryption'

describe('moveNPalabra', () => {
  it(' Transform [a,a,a] y [1,1,1] in [bbb]', () => {
    const result = quantumEncryption(
      'secreto',
      [1, 1, 1, 1, 1, 1, 1],
      'decrypt'
    )
    expect(result).toEqual('rdbqdsn')
  })
  it(' Transform [] y [1,1,1] in [bbb]', () => {
    const result = quantumEncryption('', [1], 'decrypt')
    expect(result).toEqual('')
  })
  it(' Transform [1,1,1] y [1,1,1] in [bbb]', () => {
    // @ts-expect-error we want to test the undefined case
    const result = quantumEncryption(1, [1], 'decrypt')
    expect(result).toEqual('')
  })
  it(' Transform [1,1,1] y [1,1,1] in [bbb]', () => {
    const result = quantumEncryption(
      'rdbqdsn',
      [1, 1, 1, 1, 1, 1, 1],
      'encrypt'
    )
    expect(result).toEqual('secreto')
  })
  it(' Transform [] y [1,1,1] in [bbb]', () => {
    const result = quantumEncryption('', [1], 'encrypt')
    expect(result).toEqual('')
  })
  it(' Transform [1,1,1] y [1,1,1] in [bbb]', () => {
    // @ts-expect-error we want to test the undefined case
    const result = quantumEncryption(1, [1], 'encrypt')
    expect(result).toEqual('')
  })
  it(' Transform [1,1,1] y [1,1,1] in [bbb]', () => {
    const result = quantumEncryption('rdbqdsn', [1, 1, 1, 1, 1, 1, 1], 'blabla')
    expect(result).toEqual('')
  })
})
