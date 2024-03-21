let btnEncriptar = document.querySelector("#btn-encriptar");
let btnDesencriptar = document.querySelector("#btn-desencriptar");
let btnCopiar = document.querySelector("#btn-copiar");
const reglas = { "e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"};

btnEncriptar.addEventListener("click",function ()  {
    encriptar(1);
})

btnDesencriptar.addEventListener("click", function(){
    encriptar(2);    
})

function encriptar (fun) {
    let Encriptado = "";
    let mensaje = document.querySelector("#msg");
    let textoIngresar = document.querySelector("#input-texto");
    let textoIngresado = textoIngresar.value;
    
    if (validarTexto (textoIngresado) == true) {        
        for (const obj in reglas) {
            if (fun ==1){
                Encriptado = textoIngresado.replaceAll(obj,reglas[obj]);
            }
            else{
                Encriptado = textoIngresado.replaceAll(reglas[obj],obj);
            }
            textoIngresado = Encriptado;        
        }
    }    
    mensaje.value = Encriptado;
    textoIngresar.value = "";
}

btnCopiar.addEventListener("click",function(){        
    let copiar = document.querySelector("#msg");
    let copiado = copiar.value;
    let inicio = document.querySelector("#input-texto");    
    inicio.value = copiado;
    copiar.value = "";
});

function validarTexto (texto) {    
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let mayusculas = /[A-Z]/g;  
    let vacio="";  
      
    if(texto.match(mayusculas)||texto.match(caracteres)){
        alert("No se permite caracteres especiales, ni mayusculas");
        return false; 
    }else if(texto==vacio){
        alert("Ingrese un texto");
        return false;
    }else {
        return true;
    }
}












