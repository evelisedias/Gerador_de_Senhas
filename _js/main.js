// Espera o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", function() {
  var gerarSenhaBtn = document.getElementById('gerarSenha');

  function gerarSenha(event) {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário

    var primeiraOpcao = document.querySelector('input[name="option"]:checked');
    var outraOpcao = document.querySelector('input[name="options"]:checked');
    var tamanhoInput = document.getElementById('tamanho');
    var newPasswordInput = document.getElementById('newPassword');

    // Mapeia os valores correspondentes às opções selecionadas
    var Numeral = '0123456789';
    var Maiusculo = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var Minusculo = 'abcdefghijklmnopqrstuvwxyz';
    var Outros = '!@#$%^&*()';

    var tamanho = tamanhoInput.value;
    var senha = '';
    var outrasOpcoes = '';

// criando senha aleatória de acordo com as opções marcadas
if (outraOpcao) {
  var opcoesSelecionadas = document.querySelectorAll('input[name="options"]:checked');

  // Adiciona a primeira opção à senha
  if (primeiraOpcao) {
    if (primeiraOpcao.value === 'Numeral') {
      senha += Numeral.charAt(Math.floor(Math.random() * Numeral.length));
    } else if (primeiraOpcao.value === "Maiusculo") {
      senha += Maiusculo.charAt(Math.floor(Math.random() * Maiusculo.length));
    } else if (primeiraOpcao.value === "Minusculo") {
      senha += Minusculo.charAt(Math.floor(Math.random() * Minusculo.length));
    } else if (primeiraOpcao.value === "Outros") {
      senha += Outros.charAt(Math.floor(Math.random() * Outros.length));
    }
  }

  while (senha.length < tamanho) {
    var opcao = opcoesSelecionadas[Math.floor(Math.random() * opcoesSelecionadas.length)].value;

    if (opcao.includes("Numeral1")) {
      senha += Numeral.charAt(Math.floor(Math.random() * Numeral.length));
    }
    if (opcao.includes("Maiusculo1")) {
      senha += Maiusculo.charAt(Math.floor(Math.random() * Maiusculo.length));
    }
    if (opcao.includes("Minusculo1")) {
      senha += Minusculo.charAt(Math.floor(Math.random() * Minusculo.length));
    }
    if (opcao.includes("Outros1")) {
      senha += Outros.charAt(Math.floor(Math.random() * Outros.length));
    }
  }

  senha = senha.slice(0, tamanho); // Limita a senha ao tamanho especificado
}


    newPasswordInput.value = senha; // Atribui o valor de senha à newPasswordInput
    console.log(newPasswordInput.value);
  }

  // Adiciona o event listener ao botão gerarSenhaBtn
  gerarSenhaBtn.addEventListener('click', gerarSenha);
});
