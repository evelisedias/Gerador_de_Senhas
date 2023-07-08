// Obtém os elementos HTML
const primeiroOpcao = document.querySelectorAll('#primeiro input[type="radio"]');
const outrosOpcao = document.querySelectorAll('#outros input[type="radio"]');
const tamanhoInput = document.getElementById('tamanho');
const newPasswordInput = document.getElementById('newPassword');
const gerarSenhaBtn = document.getElementById('gerarSenha');

// Mapeia os valores correspondentes às opções selecionadas
const primeiroMap = {
  Numeral: '0123456789',
  Maiusculo: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  Minusculo: 'abcdefghijklmnopqrstuvwxyz',
  Outros: '!@#$%^&*()'
};

const outrosMap = {
  Numeral1: '0123456789',
  Maiusculo1: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  Minusculo1: 'abcdefghijklmnopqrstuvwxyz',
  Outros1: '!@#$%^&*()'
};

// Função para gerar um caractere aleatório
function caractereAleatorio(caracteres) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    return caracteres[randomIndex];
  }

// Gera uma senha aleatória
function gerarSenha(event) {
  event.preventDefault(); // Evita o comportamento padrão do formulário de atualizar a página
  
  let senha = '';
  
  // Verifica a opção selecionada na primeira escolha
  const primeiroSelecionado = Array.from(primeiroOpcao).find(opcao => opcao.checked);
  const primeiroValor = primeiroMap[primeiroSelecionado.value];
  
  // Verifica a opção selecionada nas outras escolhas
  const outrosSelecionados = Array.from(outrosOpcao)
    .filter(opcao => opcao.checked)
    .map(opcao => outrosMap[opcao.value])
    .join('');
  
  const todosCaracteres =  outrosSelecionados;
  
  // Obtém o tamanho da senha
  const tamanho = parseInt(tamanhoInput.value);
  
    // Insere o primeiro caractere como o primeiro da senha
  senha += primeiroValor;
  
  // Gera os caracteres aleatórios para as posições de 1 a 7
  for (let i = 1; i < tamanho; i++) {
    senha += caractereAleatorio(todosCaracteres);
  }
  

  // Exibe a senha gerada
  newPasswordInput.value = senha;
}

// Associa a função de geração de senha ao evento de clique no botão "Gerar"
gerarSenhaBtn.addEventListener('click', gerarSenha);