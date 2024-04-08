"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveNWord = exports.converNumberToString = exports.moveNPlace = exports.converStrinToNumber = void 0;
var abcInNumber = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25
};
function converStrinToNumber(s) {
    var totalValue = 0;
    var lowerCaseS = s.toLowerCase();
    for (var later in abcInNumber) {
        if (later === lowerCaseS) {
            totalValue = abcInNumber[later];
            break;
        }
    }
    return totalValue;
}
exports.converStrinToNumber = converStrinToNumber;
function moveNPlace(s, n) {
    var numberOriginal = converStrinToNumber(s);
    return numberOriginal + n;
}
exports.moveNPlace = moveNPlace;
function converNumberToString(n) {
    var letraCodificada = '';
    for (var later in abcInNumber) {
        if (abcInNumber[later] === n) {
            letraCodificada = later;
            break;
        }
    }
    return letraCodificada;
}
exports.converNumberToString = converNumberToString;
function moveNWord(word, dicionary) {
    if (typeof word !== 'string') {
        return '';
    }
    var palabraToArry = word.split('');
    var plabraCodificada = [];
    for (var i = 0; i < palabraToArry.length; i++) {
        var numeberToPalabra = moveNPlace(palabraToArry[i], dicionary[i]);
        var letraCodificada = converNumberToString(numeberToPalabra);
        plabraCodificada.push(letraCodificada);
    }
    return plabraCodificada.join('');
}
exports.moveNWord = moveNWord;
console.log(moveNWord('aaa', [1, 1, 1]));
