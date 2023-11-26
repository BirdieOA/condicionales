// const CORRECTO = "jab";
const OPCIONES = [
  { nombre: "jab", saludo: "Hola" },
  { nombre: "rosa", saludo: "Juan" },
  {nombre: "martin", saludo: "como estas"},
  {nombre: "pablo", saludo: "tanto tiempo"}
];
document.querySelector(".boton").addEventListener("click", analizar);

//el trim es para que si hay algun tipo de espacio antes o despues del contenido lo elimine por completo
function analizar() {
  const NOMBRE = document.querySelector("#nombre").value.trim();
  const OBJETO=OPCIONES.find(valor=>valor.nombre===NOMBRE)
  console.log(OBJETO);
  

      escribir(OBJETO.saludo);
  //   if (NOMBRE == 5) {
  //     escribir("Hola juan");
  //   } else if (NOMBRE === "rosa") {
  //     escribir("Como estas?");
  //   } else {
  //     escribir("Cualquier cosa");
  //   }

  //cuando sea Igual al valor correcto "jab"
  // (NOMBRE===CORRECTO)
  // ? escribir("Hola")
  // : escribir("Adios")
  //puntos negativos solo puede haber un true y un false

  //   switch (NOMBRE) {
  //     case "jab":
  //       escribir("Hola");
  //       break;
  //     case "rosa":
  //       escribir("Adios");
  //       break;
  //     default:
  //       escribir("Cualquier cosa");
  //   }
}

function escribir(valor) {
  const NOMBRE = (document.querySelector(".caja2").innerHTML = valor);
}
