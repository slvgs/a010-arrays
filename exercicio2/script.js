const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "

//Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
const array1 = [10, 15, 67, 30]
console.log("Quantidade de item:", array1.length)

// Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
const array2 = ["codar", "celular", "valorant", "SPFC"]
const primeiroarray = array1[0]
console.log("Primeiro item 1 array:", primeiroarray)
const segundoarray = array2[1]
console.log("Segundo item do segundo array:", segundoarray)
const array3 = [30, 40, "celular", "exercito", 2>5, true]
const terceiroarray = array3[2]
console.log("Terceiro item do terceiro array", terceiroarray)

//Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.
console.log("tem SPFC na segunda array?", array2.includes("SPFC"))
console.log("Tem \"35\" na terceira array?", array3.includes(35))