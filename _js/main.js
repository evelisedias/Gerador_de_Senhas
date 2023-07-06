function gerarSenha(){
    //Possibilidades de senha
    var numeral = "0123456789";
    var maiusculo = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var minusculo = "abcdefghijklmnopqrstuvwxyz";
    var outros = "!@#$%^&*()_+";

    //Importando dados do html
    var tamanhoSenha = document.getElementById("tamanho").value;
    var primeiroDig = document.getElementById("primeiro").value;
    var outrosDig = document.getElementById("outros").value;

    //construindo lógica para primeira opcao
    var opcoes = [];
    if (primeiroDig === "Numeral"){
        opcoes.push(numeral);
    }else if (primeiroDig === "Maíusculo"){
        opcoes.push(maiusculo);
    }else if (primeiroDig === "Minúsculo"){
        opcoes.push(minusculo);
    }else if (primeiroDig === "Outros"){
        opcoes.push(outros);
    }

    if (opcoes.length === 0) {
        alert("Selecione uma opção para o primeiro caractere!");
        return;
    }

    //outros caracteres
    var outrasOpcoes = [];
    if (outrosDig.includes("Numeral")){
        outrasOpcoes.push(numeral)
    }
    if (outrosDig.includes("Maíusculo")){
        outrasOpcoes.push(maiusculo)
    }
    if (outrosDig.includes("Minúsculo")){
        outrasOpcoes.push(minusculo)
    }
    if (outrosDig.includes("Outros")){
        outrasOpcoes.push(outros)
    }

    if (outrasOpcoes.length === 0) {
        alert("Selecione pelo menos uma opção para os outros caracteres!");
        return;
    }

    var senha = "";

    senha += opcoes[0].charAt(Math.floor(Math.random() * opcoes[0].length));

    for (var i=1; i < tamanhoSenha; i++){
        var opcao = outrasOpcoes[Math.floor(Math.random() * outrasOpcoes.length)];
        
        senha += opcao.charAt(Math.floor(Math.random() * opcao.length))
        console.log(senha);
    }

    document.getElementById("newPassword").value = senha;
    console.log(senha);
}