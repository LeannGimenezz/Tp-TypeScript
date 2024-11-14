"use strict";
let persona = {
    nombre: "Octavio",
    edad: 21,
    club: "Boca"
};
let persona2 = {
    nombre: "Lean",
    edad: 27,
    club: "Rosario Central"
};
function hincha(persona) {
    console.log(`${persona.nombre} es fanatico de ${persona.club}`);
}
hincha(persona);
hincha(persona2);