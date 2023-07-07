window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('gerarSenha').addEventListener('click', function(event) {
      event.preventDefault();
      gerarSenha();
    });
  });

 function gerarSenha() {
    
    // Possibilidades de senha
    var numeral = "0123456789";
    var maiusculo = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var minusculo = "abcdefghijklmnopqrstuvwxyz";
    var outros = "!@#$%^&*()_+";
  
    //Obtendo informações do html

    //primeira opção
    var select = false;
    var radios = documet.getElementByName("option");
    for (var radio of radios){
        if (radio.type === 'radio' && radio.checked)
        {
            alert('Primeira opçao selecionada.');
            selected = true;
        }
    }
 
    if (!selected) {
        alert('Errouuuuu');
    }

   
}