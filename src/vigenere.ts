export function vigenere(key: string, str: string, mode: 'decrypt' | 'encrypt'): string {
  const output: string[] = []
  let result = 0
  let outputStr: string = ''
  if (
    typeof key !== 'string' ||
    typeof str !== 'string' ||
    typeof mode !== 'string'
  ) {
    return ''
  } else {
    for (let i = 0; i < str.length; i++) {
      if (mode === 'encrypt') {
        result = (str.charCodeAt(i) + key.charCodeAt(i % key.length)) % 128
        output[i] = String.fromCharCode(result)
      } else if (mode === 'decrypt') {
        if (str.charCodeAt(i) - key.charCodeAt(i % key.length) < 0) {
          result = str.charCodeAt(i) - key.charCodeAt(i % key.length) + 128
        } else {
          result = (str.charCodeAt(i) - key.charCodeAt(i % key.length)) % 128
        }
        output[i] = String.fromCharCode(result)
      } else {
        return ''
      }
    }
    outputStr = output.join('')
    return outputStr
  }
}
