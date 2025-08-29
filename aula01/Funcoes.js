let n1 = 2;
let n2 = 5;
//Pascal Case = NomeVariavel (primeira letra da palavra
// é sempre maiuscula)
// Camel Case = NomeVariavel (primeira letra da palavra é
// minuscula e o restante começa com maiuscula)
// Kebab Case = nome-variavel (tanto faz se começa com
// maiuscula ou minuscula, o importante é separar por
// hifen)
// Snake Case = nome_variavel (tanto faz se começa com
// maiuscula ou minuscula, o importante é separar por 
// underline)

function Soma () {
    console.log(5 + 12)
};
Soma();
// funçao simples que nao recebe parãmetros

function SomaComParametros(v1, v2){
    let resultado = v1 + v2;
    return resultado;
}
console.log(SomaComParametros(n1, n2));