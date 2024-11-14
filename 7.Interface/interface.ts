interface Persona{
    nombre: string,
    edad: number,
    club?: string
}

let persona: Persona = {
    nombre: "Juliano",
    edad: 22,
    club : "River Plate"
}

 

let persona2: Persona = {
    nombre: "Excequiel",
    edad: 32,
    club: "Banfield"
}

function hincha(persona: Persona){
    console.log(`${persona.nombre} es fanatico de ${persona.club}`);
}

hincha(persona);
hincha(persona2);