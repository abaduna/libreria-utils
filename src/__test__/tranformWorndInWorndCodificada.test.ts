import { describe, expect, it } from 'vitest'

import { moveNWord } from '../TransformWordinWordCodifig'

describe('moveNPalabra', () => {
  it(' Transform [a,a,a] y [1,1,1] in [bbb]', () => {
    const result = moveNWord('aaa', [1, 1, 1])
    expect(result).toEqual('bbb')
  })
})
