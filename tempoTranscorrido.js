var dataDigitada = prompt("Digite a data: "); 
var dias = dataDigitada.split("/")[0];
var meses = dataDigitada.split("/")[1];
var anos = dataDigitada.split("/")[2];
var formatoAmericano = new Date(anos, meses, dias);
hoje = new Date();
diferenca = Math.floor(hoje.getTime() - varformatoAmericano.getTime());
dia  = 1000 * 60 * 60 * 24;

dias = Math.floor(diferenca / dia);
meses = Math.floor(dias / 31);
anos = Math.floor(meses/ 12);

alert("Foram: " + anos + " anos " + meses + " e " + dias);
