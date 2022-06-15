var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
}


// Desafios:

// 1. Tente implementar os eventos usando o métido 'addEventListener'.
// 2. Crie condicionais que desabilitam o botão de incrementar ou decrementar quando 'count' chegar a um determinado valor (ex.: 0 <= count =< 10).
// 3. Mude a cor do texto em CURRENT_NUMBER para vermelho quando o número for negativo