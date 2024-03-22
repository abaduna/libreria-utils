import { describe, expect, test } from 'vitest'

import {moveNPalabra} from "../index"

describe('moveNPalabra', () => {
    // @ts-expect-error should accept any value
    it('debería transformar [a,a,a] y [1,1,1] en [b,b,b]', () => {
      const resultado = moveNPalabra("aaa", [1, 1, 1]);
      expect(resultado).toEqual([ 'b', 'b', 'b' ]);
    });
  });