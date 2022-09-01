const array2 = ["codar", "celular", "valorant", "SPFC"]
const array1 = [10, 15, 67, 30]
const array3 = [30, 40, "celular", "exercito", 2>5, true]
//Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;
// Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
const nomeDoArrayOriginalCopia1 = array1.slice()
nomeDoArrayOriginalCopia1.push(30)
console.log(nomeDoArrayOriginalCopia1)
console.log(array1)

//Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
const nomeDoArrayOriginalCopia2 = array2.slice()
console.log(nomeDoArrayOriginalCopia2.splice(0,3))
console.log(array2)


//Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
const nomeDoArrayOriginalCopia3 = array3.slice()
console.log(nomeDoArrayOriginalCopia3.splice(1,5))
console.log(array3)
