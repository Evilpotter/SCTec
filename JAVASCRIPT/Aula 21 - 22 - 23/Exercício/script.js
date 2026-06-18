// 1. ESTRUTURA DE DADOS (A nossa "lista de materiais")
// Criação de um Array (lista) que armazena os nomes dos carros como textos (strings).
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

// 2. VARIÁVEIS DE CONTROLO DE ESTADO
// 'i' é o índice do array. Começa em 0 porque em programação a contagem das listas começa sempre no zero.
let i = 0;
// 'continuar' é uma variável booleana (true/false) que serve de interruptor para saber se a lista ainda tem carros.
let continuar = true;

// 3. FUNÇÃO PRINCIPAL
// Esta função será executada sempre que o utilizador clicar no botão "Próximo" no HTML.
function mostrarProximoCarro() {
  // Captura os elementos do HTML utilizando o ID de cada um para podermos modificá-los.
  let paragrafo = document.getElementById("texto-carro"); // Onde o nome do carro vai aparecer
  let botao = document.getElementById("botao-proximo"); // O botão que o utilizador clica

  // Início do ciclo do...while (executa o bloco de código e depois avalia a condição)
  do {
    // Se a variável 'continuar' for falsa (!continuar significa "não continuar"), sai imediatamente do ciclo.
    if (!continuar) {
      break;
    }

    // Altera o texto do botão para "Próximo"
    botao.innerText = "Próximo";

    // Altera o texto do parágrafo para o carro que está na posição 'i' da lista
    paragrafo.innerText = listaDeCarros[i];

    // Incrementa o valor de 'i' em 1 (i = i + 1) para que, no próximo clique, mostre o carro seguinte
    i++;

    // Verifica se o índice 'i' ultrapassou o tamanho máximo da lista de carros
    if (i > listaDeCarros.length) {
      continuar = false; // Desliga o interruptor, indicando que a lista terminou
    }

    // Força a saída do ciclo do...while. Isso faz com que o ciclo corra apenas uma vez por clique.
    break;
  } while (continuar); // O ciclo continuaria se a condição fosse verdadeira e não houvesse o 'break' acima

  // 4. VERIFICAÇÃO DE FIM DE LISTA
  // Se o interruptor 'continuar' for falso, significa que já passámos por todos os carros
  if (!continuar) {
    paragrafo.innerText = "Todos os carros foram exibidos."; // Atualiza o texto do ecrã
    botao.disabled = true; // Propriedade que desativa o botão, impedindo novos cliques
    botao.innerHTML = "Fim da lista"; // Altera o texto do botão para indicar o fim
  }
}
