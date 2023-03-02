function importar() {
  const input = document.getElementById("file");
  const file = input.files[0];
  const reader = new FileReader();
  reader.onload = function (event) {
    const resultado = event.target.result;
    const nomes = resultado.replace(/\s+/g, ',').split(',');
    document.getElementById("names").value = nomes.join(", ");
  }
  reader.readAsText(file, 'utf8');
}

function sortear() {
  const nomes = document.getElementById("names").value.split(",");
  const indice = Math.floor(Math.random() * nomes.length);
  const resultado = nomes[indice].trim();

  // Oculta a seção de dados e exibe a seção de transição
  document.getElementById("dados").style.display = "none";
  document.getElementById("transicao").style.display = "block";

  // Define um temporizador para simular o processamento do sorteio
  setTimeout(function () {
    // Oculta a seção de transição e exibe o resultado do sorteio
    document.getElementById("transicao").style.display = "none";
    document.getElementById("resultado").innerText = `O nome sorteado é: ${resultado}`;
    document.getElementById("dados").style.display = "block";
  }, 3000); // tempo de espera de 3 segundos (3000 milissegundos)
};
