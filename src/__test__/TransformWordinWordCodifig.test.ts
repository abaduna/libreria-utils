import { describe, expect } from 'vitest'

import { moveNWord } from '../TransformWordinWordCodifig'

describe('moveNPalabra', () => {
  // @ts-expect-error should accept any value
  it('debería transformar [a,a,a] y [1,1,1] en [b,b,b]', () => {
    const resultado = moveNWord('aaa', [1, 1, 1])
    expect(resultado).toEqual('bbb')
  })
})