const inputTexto = document.querySelector(".input-texto");
const outputTexto = document.querySelector(".output-texto");
const copia = document.querySelector(".copiar");


//*'La letra "e" es convertida para "enter"
//* La letra "i" es convertida para "imes"
//*'La letra "a" es convertida para "ai"
//*'La letra "o" es convertida para "ober"
//*'La letra "u" es convertida para "ufat"


function validarTexto(){
    let textoEscrito = document.querySelector(".input-texto").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;

    }

}


function btnEncriptar(){
    if(!validarTexto()){
        const textoEncriptado = encriptar(inputTexto.value);
        outputTexto.value = textoEncriptado;
        inputTexto.value = "";
        outputTexto.style.backgroundImage = "none";
        copiar.style.display = "block";

    }

}


function encriptar(stringEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptar = stringEncriptar.toLowerCase();
    
    for(let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptar.includes(matrizCodigo[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);

        }

    }

    return stringEncriptar;

}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value);
    outputTexto.value = textoEncriptado;
    inputTexto.value = "";
   
}


function desencriptar(stringDesencriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();
    
    for(let i=0; i < matrizCodigo.length; i++){
        if(stringDesencriptar.includes(matrizCodigo[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);

        }

    }

    return stringDesencriptar;

}


function copiar(){
    outputTexto.select();
    navigator.clipboard.writeText(outputTexto.value)
    outputTexto.value = "";
    alert("Texto Copiado");

}