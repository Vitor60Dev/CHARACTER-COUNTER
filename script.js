document.addEventListener("DOMContentLoaded", function () {
  // Selecionar elementos do DOM
  var textarea = document.getElementById("textarea");
  var button = document.getElementById("button");
  var result = document.getElementById("result");

  // Adicionar um ouvinte de evento ao botão "Calcular"
  button.addEventListener("click", function () {
    var text = textarea.value; // Obter o texto do textarea
    var characterCount = text.length; // Calcular a contagem de caracteres
    result.textContent = "Resultado: " + characterCount + " caracteres"; // Exibir o resultado
  });
});
