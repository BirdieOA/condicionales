const CORRECTO="jab";
document.querySelector(".boton").addEventListener("click",analizar);

//el trim es para que si hay algun tipo de espacio antes o despues del contenido lo elimine por completo
function analizar() {
    const NOMBRE=document.querySelector("#nombre").value.trim();

    //cuando sea Igual al valor correcto "jab"
    (NOMBRE===CORRECTO)
    ? escribir("Hola")
    : escribir("Adios")
}

function escribir(valor){
    const NOMBRE= document.querySelector(".caja2").innerHTML= valor;
}