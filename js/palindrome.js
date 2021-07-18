var palavra = prompt("Digite a palavra: ");
    
    var N = palavra.length;
    var ok = true;
    for (var i = 0; i < N / 2; i++) {
        if (palavra[i] != palavra[N - i - 1]) {
            ok = false;
        }
    }
    if (ok)
        alert("É uma palindrome\n");
    else    
        alert("Não é uma palindrome\n");
