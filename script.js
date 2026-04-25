function adicionarTarefa() {
  const input = document.getElementById("tarefa");
  const texto = input.value.trim();

  if (texto === "") {
    alert("Digite uma tarefa");
    return;
  }

  const lista = document.getElementById("lista");
  const item = document.createElement("li");
  item.textContent = texto;

  lista.appendChild(item);
  input.value = "";
}