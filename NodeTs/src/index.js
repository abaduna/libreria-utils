"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveNPalabra = exports.converNumberToString = exports.moveNPlace = exports.converStrinToNumber = void 0;
var abcInNumber = [
    ["a", 1],
    ["b", 2],
    ["c", 3],
    ["d", 4],
    ["e", 5],
    ["f", 6],
    ["g", 7],
    ["h", 8],
    ["i", 9],
    ["j", 10],
    ["k", 11],
    ["m", 12],
    ["n", 13],
    ["o", 14],
    ["p", 15],
    ["q", 16],
    ["r", 17],
    ["s", 18],
    ["t", 19],
    ["u", 20],
    ["v", 21],
    ["w", 22],
    ["x", 23],
    ["y", 24],
    ["z", 25],
];
function converStrinToNumber(s) {
    var totalValue = 0;
    var lowerCaseS = s.toLowerCase();
    for (var _i = 0, abcInNumber_1 = abcInNumber; _i < abcInNumber_1.length; _i++) {
        var later = abcInNumber_1[_i];
        if (later[0] === lowerCaseS) {
            totalValue = later[1];
        }
        return totalValue;
    }
}
exports.converStrinToNumber = converStrinToNumber;
function moveNPlace(s, n) {
    var numberOriginal = converStrinToNumber(s);
    //nunca va a pasar
    if (numberOriginal === undefined) {
        return;
    }
    return numberOriginal + n;
}
exports.moveNPlace = moveNPlace;
function converNumberToString(n) {
    var letraCodificada = "";
    for (var _i = 0, abcInNumber_2 = abcInNumber; _i < abcInNumber_2.length; _i++) {
        var later = abcInNumber_2[_i];
        if (later[1] === n) {
            letraCodificada = later[0];
        }
    }
    return letraCodificada;
}
exports.converNumberToString = converNumberToString;
function moveNPalabra(palabra, dicionario) {
    var palabraToArry = palabra.split("");
    var plabraCodificada = [];
    for (var i = 0; i < palabraToArry.length; i++) {
        console.log(palabraToArry[i], dicionario[i]);
        var numeberToPalabra = moveNPlace(palabraToArry[i], dicionario[i]);
        if (typeof numeberToPalabra === 'undefined') {
            return;
        }
        var letraCodificada = converNumberToString(numeberToPalabra);
        plabraCodificada.push(letraCodificada);
    }
    return plabraCodificada.join("");
}
exports.moveNPalabra = moveNPalabra;
console.log(moveNPalabra("aaa", [24, 23, 22]));
// console.log(`converStrinToNumber`,converStrinToNumber("a"));
// console.log(`moveNPlace`,moveNPlace("a",1));
// console.log("converNumberToString",converNumberToString(1));
