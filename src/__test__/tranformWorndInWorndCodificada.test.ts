import { describe, expect, it } from 'vitest'

import { moveNWord } from '../TransformWordinWordCodifig'

describe('moveNPalabra', () => {
  it(' Transform [a,a,a] y [1,1,1] in [bbb]', () => {
    const result = moveNWord('aaa', [1, 1, 1])
    expect(result).toEqual('bbb')
  })
  it(' Transform [] y [1,1,1] in [bbb]', () => {
    const result = moveNWord('', [1])
    expect(result).toEqual('')
  })
  it(' Transform [1,1,1] y [1,1,1] in [bbb]', () => {
    // @ts-expect-error we want to test the undefined case
    const result = moveNWord(1, [1])
    expect(result).toEqual('')
  })
})
