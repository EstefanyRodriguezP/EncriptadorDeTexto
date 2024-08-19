const textoA = document.getElementById("textoIngresado");
const textoB = document.getElementById("textoMostrado");

function botonEncriptar() {
  const textoEncriptado = encriptacion(textoA.value);
  textoB.value = textoEncriptado;
  textoA.value = "";
}

function encriptacion(stringEncriptado) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptado = stringEncriptado
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptado.includes(matrizCodigo[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  console.table(matrizCodigo);
  return stringEncriptado;
}

function botonDesencriptar() {
  const textoDesencriptado = desencriptacion(textoA.value);
  textoB.value = textoDesencriptado;
  textoA.value = "";
}

function desencriptacion(stringDesencriptado) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptado = stringDesencriptado
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptado.includes(matrizCodigo[i][1])) {
      stringDesencriptado = stringDesencriptado.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptado;
}

function copiarAlPortapapeles() {
  let inputText = document.getElementById("textoMostrado");
  inputText.select();
  inputText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(inputText.value);
  alert("¡El texto ha sido copiado!");
}
