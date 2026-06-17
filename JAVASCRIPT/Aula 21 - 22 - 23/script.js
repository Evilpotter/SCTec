// ============================================================
// DOCUMENTAÇÃO DE LAÇOS DE REPETIÇÃO (LOOPS) EM JAVASCRIPT
// ============================================================
// Este arquivo demonstra os 6 principais tipos de repetição:
//
// 1. WHILE: Executa enquanto condição é verdadeira
// 2. DO-WHILE: Executa uma vez, depois verifica condição
// 3. FOR: Laço tradicional com inicialização, condição e incremento
// 4. FOR...OF: Itera sobre valores de arrays (moderno, ES6)
// 5. FOREACH: Método de array que executa função para cada elemento
// 6. FOR...IN: Itera sobre propriedades (chaves) de objetos
//
// COMPARAÇÃO RÁPIDA:
// - While/Do-While: quando não sabe quantas iterações
// - For: iterações com número conhecido
// - For...of: simples iteração sobre valores
// - forEach: programação funcional
// - For...in: quando precisa das propriedades/chaves do objeto
// ============================================================

const listaCarros1 = ["Uno", "Fusca", "Escort", "Gol"];

const conteudo = document.getElementById("conteudo");

var dados = "";
var i = 0;

function criaSecao(titulo, dados) {
  let secao = document.createElement("div");
  secao.innerHTML = "<h2>" + titulo + "</h2>" + dados;
  conteudo.appendChild(secao);
}

// ========================================
// LAÇO WHILE - Estrutura básica de repetição
// ========================================
// O while executa um bloco enquanto uma condição for VERDADEIRA
// Sintaxe: while (condição) { código }
// - Verifica a condição ANTES de executar
// - Ideal quando não se sabe quantas iterações serão necessárias
// - Necessário incrementar manualmente a variável de controle (i++)
// Exemplo: percorrer array com tamanho conhecido
dados = "";
i = 0;
while (i < 4) {
  dados += "<p>" + listaCarros1[i] + "</p>";
  i++;
}
criaSecao("Loop while", dados);

// ========================================
// LAÇO WHILE - Versão melhorada com .length
// ========================================
// Melhoria: usar listaCarros1.length ao invés de hardcodar o número
// - Mais flexível: se o array mudar de tamanho, o código se adapta automaticamente
// - Reduz erros: evita usar índices fora do intervalo
// - Melhor prática: o código fica mais dinâmico e reutilizável
dados = "";
i = 0;
while (i < listaCarros1.length) {
  dados += "<p>" + listaCarros1[i] + "</p>";
  i++;
}
criaSecao("Loop while melhorado", dados);

// ========================================
// LAÇO DO-WHILE - Executa antes de verificar a condição
// ========================================
// Sintaxe: do { código } while (condição)
// - Diferença IMPORTANTE: executa o código PELO MENOS UMA VEZ antes de testar a condição
// - Verifica a condição DEPOIS de executar o bloco
// - Ideal para: menus, validação de entrada, operações que devem executar pelo menos uma vez
// Exemplo: mesmo resultado do while, mas com estrutura diferente
dados = "";
i = 0;
do {
  dados += "<p>" + listaCarros1[i] + "</p>";
  i++;
} while (i < listaCarros1.length);
criaSecao("Loop while invertido", dados);

// ========================================
// LAÇO FOR - O laço mais utilizado
// ========================================
// Sintaxe: for (inicialização; condição; incremento) { código }
// - Inicialização: cria e inicia a variável de controle (i = 0)
// - Condição: verifica se deve continuar (i < tamanho)
// - Incremento: atualiza a variável (i++) após cada iteração
// - Vantagem: tudo controlado em um só lugar, muito legível
// - Mais compacto que while: menos código repetido
// - Ideal para: iterações com número de passos conhecido
dados = "";
for (i = 0; i < listaCarros1.length; i++) {
  dados += "<p>" + listaCarros1[i] + "</p>";
}
criaSecao("Loop for", dados);

// ========================================
// LAÇO FOR...OF - Itera sobre VALUES (valores)
// ========================================
// Sintaxe: for (let variável of array) { código }
// - Moderna (ES6): introduzida em 2015
// - Itera automaticamente sobre os VALORES do array
// - Não precisa de variável índice (i)
// - Mais simples e legível que for tradicional
// - NÃO dá acesso ao índice (posição) do elemento
// - Ideal para: quando você só precisa dos valores, não da posição
dados = "";
for (let carro of listaCarros1) {
  dados += "<p>" + carro + "</p>";
}
criaSecao("Loop for of", dados);

// ========================================
// LAÇO FOREACH - Método de Array (Functional)
// ========================================
// Sintaxe: array.forEach(function(elemento) { código })
// - Método dos arrays: não é um statement como for/while
// - Executa uma função para CADA elemento do array
// - Passa automaticamente o elemento como parâmetro
// - Sintaxe com função anônima clássica:
dados = "";
listaCarros1.forEach(function (carro) {
  dados += "<p>" + carro + "</p>";
});
criaSecao("Loop forEach", dados);

// ========================================
// LAÇO FOREACH - Com Arrow Function (moderno)
// ========================================
// Sintaxe: array.forEach((elemento) => { código })
// - Arrow Function: sintaxe moderna (ES6)
// - Mais compacta e legível que função tradicional
// - (carro) => é o mesmo que function(carro)
// - Ideal para: código funcional, mais conciso
// - Pode receber 3 parâmetros: elemento, índice, array
dados = "";
listaCarros1.forEach((carro) => {
  dados += "<p>" + carro + "</p>";
});
criaSecao("Loop forEach", dados);

let carro1 = { marca: "Fiat", modelo: "Uno", ano: 1990 };
let carro2 = { marca: "Volkswagen", modelo: "Fusca", ano: 1980 };
let carro3 = { marca: "Ford", modelo: "Escort", ano: 1995 };
let carro4 = { marca: "Volkswagen", modelo: "Gol", ano: 2000 };

let listaCarros2 = [carro1, carro2, carro3, carro4];

// ========================================
// LAÇO FOR...IN - Itera sobre PROPRIEDADES (keys) de objetos
// ========================================
// Sintaxe: for (let propriedade in objeto) { código }
// - Itera sobre as PROPRIEDADES (chaves) do objeto, não valores
// - Acessa valores usando: objeto[propriedade]
// - Funciona com arrays também, mas não é recomendado
// - Ideal para: objetos, quando precisa das chaves
// - Cuidado: a ordem não é garantida em navegadores antigos
// Exemplo: percorrer propriedades de cada objeto dentro de um array
dados = "";
for (let carro of listaCarros2) {
  let propriedades = "";
  for (let prop in carro) {
    propriedades += carro[prop] + " | ";
  }
  dados += "<p>" + propriedades + "</p>";
}
criaSecao("Loop for in", dados);
