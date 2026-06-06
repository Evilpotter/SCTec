function saudacao() {
  let idioma = document.getElementById("idioma").value;
  let mensagem;
  switch (idioma) {
    case "pt":
      mensagem = "Olá!";
      break;
    case "en":
      mensagem = "Hello!";
      break;
    case "es":
      mensagem = "¡Hola!";
      break;
    case "fr":
      mensagem = "Bonjour!";
      break;
  }
  document.getElementById("saudacao").innerHTML = mensagem;
}
