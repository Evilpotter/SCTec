function verificarAprovacao() {
  let nota = document.getElementById("nota").value;
  console.log("nota inserida: ", nota);
  if (nota >= 7) {
    document.getElementById("resultado").innerHTML = "Aprovado";
    alert("Parabéns! Você foi aprovado!");
  } else {
    document.getElementById("resultado").innerHTML = "Reprovado";
    alert("Infelizmente, você foi reprovado. Tente novamente!");
  }
}
