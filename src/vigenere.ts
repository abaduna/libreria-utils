export function vigenere(key: string, str: string, mode: string): string {
  if (
    typeof key !== 'string' ||
    typeof str !== 'string' ||
    typeof mode !== 'string'
  ) {
    return ''
  } else {
    const output: string[] = []
    let result = 0
    let outputStr: string = ''

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
