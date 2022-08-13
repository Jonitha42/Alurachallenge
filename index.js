let input = document.querySelector("input");
let encriptar = document.getElementById("encriptar");
let desencriptar = document.getElementById("desencriptar");
let copiar = document.getElementById("btn-copy");
let answer = document.getElementById("answer");
let aleatorio = document.getElementById("aleatorio");



// FUNCION PARA ENCRIPTAR EL MENSAJE
function encriptarFn() {
  let frase = input.value;
  let fraseEncriptadaarr = [];

  for (let i = 0; i < frase.length; i++) {
    let letra;
    switch (frase[i]) {
      case "a":
        letra = "ai";
        break;
      case "e":
        letra = "enter";
        break;
      case "i":
        letra = "imes";
        break;
      case "o":
        letra = "ober";
        break;
      case "u":
        letra = "ufat";
        break;
      default:
        letra = frase[i];
        break;
    }
    fraseEncriptadaarr.push(letra);
  }
  frase = fraseEncriptadaarr.join("");
  answer.innerHTML = frase;
  copiar.style.display = "block";

  document.getElementById("message-card").style.display = "none";
  document.getElementById("message-answer").style.display = "flex";

  return fraseEncriptadaarr;
}

// FUNCION PARA DESENCRIPTAR EL MENSAJE
function desencriptarFn() {
  let frase = input.value.toLowerCase();

  let contador = 0;
  while (contador < frase.length) {
    if (frase.includes("ai")) {
      frase = frase.replace("ai", "a");
    }
    if (frase.includes("enter")) {
      frase = frase.replace("enter", "e");
    }
    if (frase.includes("imes")) {
      frase = frase.replace("imes", "i");
    }
    if (frase.includes("ober")) {
      frase = frase.replace("ober", "o");
    }
    if (frase.includes("ufat")) {
      frase = frase.replace("ufat", "u");
    }
    contador++;
  }
  // console.log(frase);
  answer.innerHTML = frase;
  copiar.style.display = "block";

  document.getElementById("message-card").style.display = "none";
  document.getElementById("message-answer").style.display = "flex";
}



function validarCampo(campo) {
  let regEx = /^[a-z]/gm;

  if (regEx.test(campo)) {
    input.classList.remove("error");
    input.classList.add("correcto");
    document.querySelector(".text-error").style.display = "none";
  } else {
    input.classList.add("error");
    input.classList.remove("correcto");
    document.querySelector(".text-error").style.display = "block";
  }
}

encriptar.addEventListener("click", (event) => {
  event.preventDefault();
  validarCampo(input.value);

  input.value = "";
  input.value.focus();
});

desencriptar.addEventListener("click", (event) => {
  event.preventDefault();
  validarCampo(input.value);

  input.value = "";
  input.value.focus();
});

encriptar.onclick = encriptarFn;

desencriptar.onclick = desencriptarFn;



// FUNCION COPIAR EL MENSAJE
function copiarFn() {
  let content = document.getElementById("answer").innerText;
  content.select;
  navigator.clipboard.writeText(content);
}

copiar.onclick = copiarFn;
