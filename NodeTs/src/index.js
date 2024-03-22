"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatorDicionary = void 0;
function generatorDicionary(word) {
    var dicionary = [];
    for (var i = 0; i < word.length * 2; i++) {
        var numerRandon = Math.floor(Math.random() * (25 - 1 + 1)) + 1;
        dicionary.push(numerRandon);
    }
    return dicionary;
}
exports.generatorDicionary = generatorDicionary;
console.log(generatorDicionary("artu"));
