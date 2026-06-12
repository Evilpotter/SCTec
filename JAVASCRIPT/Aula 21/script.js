const carros = ["Uno", "Fusca", "Escort", "Gol"];

const conteudo = document.getElementById("conteudo");

let dados = "";
let i = 0;

while (i < 4) {
  dados += "<p>" + carros[i] + "</p>";
  i++;
}

const secao = document.createElement("div");
secao.innerHTML = "<h2>Loop while</h2>" + dados;
conteudo.appendChild(secao);
