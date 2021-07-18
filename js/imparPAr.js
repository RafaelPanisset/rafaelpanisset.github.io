 
 
function calcular(resposta) {
  if (numero % 2 == 0)
     return true;
  else
     return false;
}

var numero = prompt("Digite o valor: ");
    if (calcular(2))
        alert("O número é par\n");
    else    
        alert("O número é impar\n");
