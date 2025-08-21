function analisarNumeros() {
      const entrada = document.getElementById("entrada").value;
      if (!entrada.trim()) {
        alert("Por favor, digite os números separados por vírgula.");
        return;
      }
      const numeros = entrada.split(",").map(n => parseInt(n.trim()));
      if (numeros.some(isNaN)) {
        alert("Certifique-se de digitar apenas números separados por vírgula.");
        return;
      }
      let somaDosPares = 0;
      let contadorDeImpares = 0;
      let maiorNumero = numeros[0];
      let menorNumero = numeros[0];
      for (let i = 0; i < numeros.length; i++) {
        const num = numeros[i];

        if (num % 2 === 0) {
          somaDosPares += num;
        } else {
          contadorDeImpares++;
        }

        if (num > maiorNumero) maiorNumero = num;
        if (num < menorNumero) menorNumero = num;
      }
      const resultado = `
Array analisado: ${numeros.join(', ')}

Soma dos pares: ${somaDosPares}
Quantidade de ímpares: ${contadorDeImpares}
Maior número: ${maiorNumero}
Menor número: ${menorNumero}
      `;
      document.getElementById("saida").innerText = resultado;
    }