// Definindo a interface Livro
interface Livro {
  titulo: string;
  autor: string;
  anoPublicacao: number;
}

// Criando um objeto que segue a interface Livro
const meuLivro: Livro = {
  titulo: 'Dom Casmurro',
  autor: 'Machado de Assis',
  anoPublicacao: 1899
};

console.log(meuLivro);

