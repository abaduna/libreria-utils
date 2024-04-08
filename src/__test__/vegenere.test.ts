import { describe, expect, it } from 'vitest'

import { vigenere } from '../vigenere'

describe('vigenere', () => {
  it('vigenere "aaa", "secret", "encrypt" in tfdsfu este', () => {
    const result = vigenere('aaa', 'secret', 'encrypt')
    expect(result).toEqual('TFDSFU')
  })
  it(' vigenere 2 in 2 params', () => {
    // @ts-expect-error we want to test the undefined case
    const result = vigenere(1, 'secret', 'encrypt')
    expect(result).toEqual('')
  })
  it('vigenere 1 en 2 params ', () => {
    // @ts-expect-error we want to test the undefined case
    const result = vigenere('aaa', 1, 'encrypt')
    expect(result).toEqual('')
  })
  it(' vigenere 1 en 3 params ', () => {
    // @ts-expect-error we want to test the undefined case
    const result = vigenere('aaa', 'secret', 1)
    expect(result).toEqual('')
  })
  it(' vigenere decrtypt to secret ', () => {
    const result = vigenere('aaa', 'TFDSFU', 'decrypt')
    expect(result).toEqual('secret')
  })
  it(' cesarEncryption [a,a,a] y 1 in bbb', () => {
    // @ts-expect-error we want to test the undefined case
    const result = vigenere('aaa', 1, 'decrypt')
    expect(result).toEqual('')
  })
  it(' cesarEncryption [a,a,a] y 1 in bbb', () => {
    // @ts-expect-error we want to test the undefined case
    const result = vigenere('aaa', 'tfdsfu', 1)
    expect(result).toEqual('')
  })
  it(' cesarEncryption [a,a,a] y 1 in bbb', () => {
    // @ts-expect-error we want to test the undefined case
    const result = vigenere(1, 'tfdsfu', 'decrypt')
    expect(result).toEqual('')
  })
})
