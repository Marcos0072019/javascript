
let pilha = [];

function atualizarPilha() {
  const lista = document.getElementById("pilhaDePratos");
  lista.innerHTML = ""; 
 
  for (let i = pilha.length - 1; i >= 0; i--) {
    const item = document.createElement("li");
    item.textContent = pilha[i];
    lista.appendChild(item);
  }
}

function colocarPrato() {
  const input = document.getElementById("pratoInput");
  const nomePrato = input.value.trim();

  if (nomePrato === "") {
    alert("Digite o nome do prato!");
    return;
  }

  pilha.push(nomePrato); 
  input.value = "";
  atualizarPilha(); 
}

function retirarPrato() {
  if (pilha.length === 0) {
    alert("A pilha está vazia!");
    return;
  }

  const pratoRemovido = pilha.pop()
  alert(`Prato "${pratoRemovido}" retirado da pilha.`);
  atualizarPilha()
}
