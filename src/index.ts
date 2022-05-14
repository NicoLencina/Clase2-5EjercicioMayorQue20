//accedo al rotulo de html por el id y lo edito
rotulo1.innerHTML =
  "Escriba el numero que desea verificar si es mayor o no a 20:";
let dato = document.getElementById("dato");
let button = document.getElementById("button");

//Cuando el usuario de click da la orden de realizar las operaciones logica
button.addEventListener("click", () => {
  let valorIngresado: number = Number(dato.value);
  if (valorIngresado > 20) {
    console.log("El número es mayor a 20: " + valorIngresado);
  }
  if (valorIngresado == 20) {
    console.log("El número igual a 20: " + valorIngresado);
  }
  if (valorIngresado < 20) {
    console.log("El número es menor a 20: " + valorIngresado);
  }
});
