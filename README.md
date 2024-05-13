## Utulis-Criptografia

### mode funciones
vigenere =>  Is a method of encrypting alphabetic text where each letter of the plaintext is encoded with a different Caesar cipher, whose increment is determined by the corresponding letter of another text, the key.<br>
quantumEncryption => Resistant to quantum attacks<br>
cesarEncryption => One of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence<br>

### funcion 
### vigenere,cesarEncryption,quantumEncryption,Dicionarygenerator
### example  vigenere
vigenere("key oh te word","meesage","encrypt")<br>
vigenere("key oh te word","XJ^^F`P","decrypt")<br>
### example  quantumEncryption
const dicionario = Dicionarygenerator("secet Key very long more that the text")<br>
quantumEncryption("meesage",dicionario,"encrypt")<br>
quantumEncryption("vqi",dicionario,"decrypt")<br>
### example  cesarEncryption
cesarEncryption("meesage",key of number,"encrypt")<br>
cesarEncryption("ipab",1,"decrypt")<br>