import { describe, expect, it } from 'vitest'

import { cesarEncryption } from '../CessarEncryption'

describe('cesarEncryption', () => {
  it(' cesarEncryption [a,a,a] y 1 in bbb', () => {
    const result = cesarEncryption('aaa', 1, 'encrypt')
    expect(result).toEqual('bbb')
  })
  it(' Transform [] y [1,1,1] in [bbb]', () => {
    const result = cesarEncryption('', 1, 'encrypt')
    expect(result).toEqual('')
  })
  it(' Transform [1,1,1] y [1,1,1] in [bbb]', () => {
    // @ts-expect-error we want to test the undefined case
    const result = cesarEncryption(1, 1, 'encrypt')
    expect(result).toEqual('')
  })
  it(' cesarEncryption [a,a,a] y 1 in bbb', () => {
    const result = cesarEncryption('bbb', 1, 'decrypt')
    expect(result).toEqual('aaa')
  })
  it(' Transform [] y [1,1,1] in [bbb]', () => {
    const result = cesarEncryption('', 1, 'decrypt')
    expect(result).toEqual('')
  })
  it(' Transform [1,1,1] y [1,1,1] in [bbb]', () => {
    // @ts-expect-error we want to test the undefined case
    const result = cesarEncryption(1, 1, 'decrypt')
    expect(result).toEqual('')
  })
  it(' Transform (1, 1, "blabla") in ""', () => {
    // @ts-expect-error we want to test the undefined case
    const result = cesarEncryption(1, 1, 'blabla')
    expect(result).toEqual('')
  })
})
