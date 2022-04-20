let btnEncript = document.getElementById("encrypt");
let btnDecrypt = document.getElementById("decrypt");
let btnCopiar = document.getElementById("copy");
let input = document.querySelector(".input-text");
let resultado = document.getElementById("show-msg");
let msgVazioBold = document.querySelector(".empty-result-bold");
let msgVazio = document.querySelector(".empty-result");
// let imgVazio = document.querySelector(".img_lupa");

btnEncript.addEventListener("click", function () {
  validaTexto(criptografa);
});

btnDecrypt.addEventListener("click", function () {
  validaTexto(descriptografa);
});

+btnCopiar.addEventListener("click", function () {
  this.classList.add("btnCopiado");
  navigator.clipboard.writeText(resultado.textContent);
  this.textContent = "Texto copiado!";
});

function validaTexto(funcao) {
  if (input.value == "") { //input.value vazio
    resultado.textContent = "";
    msgVazioBold.style.display = "block";
    msgVazio.style.display = "block";
    imgVazio.style.display = "block";
    btnCopiar.style.display = "none";
    return;
  }

  else {
    for (let i = 0; i < input.value.length; i++) {
      if (input.value.charCodeAt(i) < 97 || input.value.charCodeAt(i) > 122) {
        if (input.value.charCodeAt(i) == 32) continue;
        if (input.value.charCodeAt(i) == 231) continue;
        //input.value com caracteres inválidos
        alert("Não use caracteres inválidos!");
        input.value = "";
        return;
      }
    }
  }

  //input.value válido
  msgVazioBold.style.display = "none";
  msgVazio.style.display = "none";
  imgVazio.style.display = "none";
  btnCopiar.style.display = "block";


  resultado.textContent = funcao(input.value);
  btnCopiar.classList.remove("btn_copiado");
  btnCopiar.textContent = "Copiar";
  input.value = "";
}

function criptografa(texto) {
  let resultado = texto;

  resultado = resultado.replaceAll("e", "enter");
  resultado = resultado.replaceAll("i", "imes");
  resultado = resultado.replaceAll("a", "ai");
  resultado = resultado.replaceAll("o", "ober");
  resultado = resultado.replaceAll("u", "ufat");

  return resultado;
}

function descriptografa(texto) {
  let resultado = texto;

  resultado = resultado.replaceAll("ai", "a");
  resultado = resultado.replaceAll("enter", "e");
  resultado = resultado.replaceAll("imes", "i");
  resultado = resultado.replaceAll("ober", "o");
  resultado = resultado.replaceAll("ufat", "u");

  return resultado;
}
