var dataDigitada = prompt("Digite a data: "); 
var dias = dataDigitada.split("/")[0];
var meses = dataDigitada.split("/")[1];
var anos = dataDigitada.split("/")[2];
var formatoAmericano = new Date(anos, meses - 1, dias);
var hoje = new Date();
diferenca = Math.floor(hoje.getTime() - formatoAmericano.getTime());
var dia  = 1000 * 60 * 60 * 24;

var diasResposta = Math.floor(diferenca / dia);
var mesesResposta = Math.floor(diasResposta / 31);
var anosResposta = Math.floor(mesesResposta/ 12);
 
//alert("Foram: " + anosResposta + " anos " + mesesResposta + " meses  e " + diasResposta);
alert(diferenca);
