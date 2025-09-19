// Criando o array com tipo explícito
let cidades: string[] = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Salvador'];

// Função com tipo de parâmetro definido
function listarCidades(arrayDeCidades: string[]): void {
  // Verificando se o array não está vazio
  if (arrayDeCidades.length === 0) {
    console.log('Nenhuma cidade para listar.');
    return;
  }

  // Usando forEach para iterar sobre as cidades
  arrayDeCidades.forEach((cidade, index) => {
    console.log(`${index + 1}. ${cidade}`);
  });
}

// Chamando a função
listarCidades(cidades);
