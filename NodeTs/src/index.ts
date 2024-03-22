export function generatorDicionary(word:string) {

  let dicionary = []
  for (let i = 0; i < word.length*2; i++) {
   let numerRandon =Math.floor(Math.random() * (25 - 1 + 1)) + 1
    dicionary.push(numerRandon)
    
  }

  return dicionary
}

console.log(generatorDicionary("artu"));
