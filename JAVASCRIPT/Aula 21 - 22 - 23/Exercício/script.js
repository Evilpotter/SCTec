const listaDeCarros = [
  "uno",
  "gol",
  "palio",
  "celta",
  "onix",
  "siena",
  "corsa",
  "fox",
  "ka",
  "prisma",
];

let i = 0;
let continuar = true;

function mostrarProximoCarro() {
  let paragrafo = document.getElementById("texto-carro");
  let botao = document.getElementById("botao-proximo");

  do {
    if (!continuar) {
      break;
    }

    botao.innerText = "Próximo";
    paragrafo.innerText = listaDeCarros[i];
    i++;

    if (i >= listaDeCarros.length) {
      continuar = false;
    }

    break;
  } while (continuar);

  if (!continuar) {
    paragrafo.innerText = "Todos os carros foram exibidos.";
    botao.disabled = true; // Desabilita o botão após exibir todos os carros
    botao.innerHTML = "Fim da lista";
  }
}
