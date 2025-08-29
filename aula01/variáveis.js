// comentario
// Javascript é uma linguagem fracamente tipada!
var texto = "olá" // aspas duplas contém sempre uma string
let texto2 = 'mundo'; // ponto e virgula é opcional
const texto3 = "!" // aspas simples também serve para string!

console.log(texto, texto2 + texto3)
// virgula concatena com espaço, enquanto sinal de + deixa tudo junto

texto = 'hello'
let msg = `${texto} ${texto2} ${texto3}`
// use a crase junto de ${} concatanar
// tambem
console.log(msg)

// texto3 = `teste`
// O exemplo acima mostra que é impossivel reatribuir um novo valor
// a uma constante

let numero = 4
console.log(typeof numero)

let obj = {nome: "Henrique", idade: 17}
console.log(obj)
console.log(typeof obj)
// objeto é sempre um elemento chave/valor

let arr = ['Henrique', 'R.', 'Acciarito']
console.log(arr)
console.log(typeof arr[1])

