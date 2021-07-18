
function palindrome(palavra) {
    var N = palavra.length;
    var ok = true;
    palavra = palavra.toLowerCase();
    for (var i = 0; i < N / 2; i++) {
        if (palavra[i] != palavra[N - i - 1]) {
            ok = false;
        }
    }
    return ok;
}

var palavra = prompt("Digite a palavra: "); 
    if (palindrome(palavra))
        alert("É uma palindrome\n");
    else    
        alert("Não é uma palindrome\n");
