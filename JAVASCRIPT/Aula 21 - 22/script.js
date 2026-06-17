const carros = ["Uno", "Fusca", "Escort", "Gol"];

const conteudo = document.getElementById("conteudo");

var dados;
var i;

dados = "";
i = 0;

function criaSecao(titulo, dados) {
  let secao = document.createElement("div");
  secao.innerHTML = "<h2>" + titulo + "</h2>" + dados;
  conteudo.appendChild(secao);
}

dados = "";
i = 0;
while (i < 4) {
  dados += "<p>" + carros[i] + "</p>";
  i++;
}
criaSecao("Loop while", dados);

dados = "";
i = 0;
while (i < carros.length) {
  dados += "<p>" + carros[i] + "</p>";
  i++;
}
criaSecao("Loop while melhorado", dados);

dados = "";
i = 0;
do {
  dados += "<p>" + carros[i] + "</p>";
  i++;
} while (i < carros.length);
criaSecao("Loop while invertido", dados);

dados = "";
for (i = 0; i < carros.length; i++) {
  dados += "<p>" + carros[i] + "</p>";
}
criaSecao("Loop for", dados);

dados = "";
for (let carro of carros) {
  dados += "<p>" + carro + "</p>";
}
criaSecao("Loop for of", dados);

dados = "";
carros.forEach(function (carro) {
  dados += "<p>" + carro + "</p>";
});
criaSecao("Loop forEach", dados);
