 
function calcular(resposta) {
 for (var i = 1; i <= numero; i++)
        resposta *= i;
 return resposta;
}


var numero = prompt("Digite o número: ");
    var resposta = 1;
    alert("O fatorial é: " + calcular(resposta));
