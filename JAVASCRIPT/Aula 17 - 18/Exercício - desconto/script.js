function calcularDesconto() {
  /*const valorProduto = parseFloat(document.getElementById("valorProduto").value);*/
  const valorProduto = document.getElementById("valorProduto").value;
  const porcentagemDesconto = document.getElementById(
    "porcentagemDesconto",
  ).value;
  const valorComDesconto =
    "R$ " +
    (valorProduto - (valorProduto * porcentagemDesconto) / 100).toFixed(2);
  console.log("Valor do produto: ", valorComDesconto);
  if (
    valorProduto > 0 &&
    porcentagemDesconto >= 0 &&
    porcentagemDesconto <= 100
  ) {
    document.getElementById("resultado").innerHTML =
      `Valor com desconto: ${valorComDesconto}`;
    alert(`O valor do produto com desconto é: ${valorComDesconto}`);
  }
}
