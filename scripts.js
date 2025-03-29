console.log(document.title);

// Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

const titleChange1 = document.getElementById("gen-1");
titleChange1.innerText = "Generasión 1 Pokimon";

// Cambia el color de fondo de la primera generación de Pokimon.
const cambiarColorGen1 = document.querySelector(
  ".infocard-list.infocard-list-pkmn-lg"
);
cambiarColorGen1.style.background = "red";

// Imprime por consola la URL de la página.
let value;
console.log((value = document.URL));

// Imprime por consola el dominio de la página.

console.log((value = document.domain));
// Imprime todos los nodos de imagen.

console.log(document.querySelectorAll(".infocard-lg-img"));
// Premium:

// Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying
