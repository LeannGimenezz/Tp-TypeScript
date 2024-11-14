type Persona = {
    nombre: string,
    edad: number,
    club?: string
}

let persona: Persona = {
    nombre: "Juan",
    edad: 23,
    club : "Tucuman"
}

console.log("Primer Objeto tipado");

console.log("Nombre: ", persona.nombre);
console.log("Edad: ", persona.edad);    
console.log("Club: ", persona.club);    

let persona2: Persona = {
    nombre: "Pedrin",
    edad: 19
}

console.log("Segundo Objeto tipado");

console.log("Nombre: ", persona2.nombre);
console.log("Edad: ", persona2.edad);