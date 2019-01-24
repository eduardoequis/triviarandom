let estudiantes = ["maria", "jose", "Carlos", "Mati", "Ana"]
let conceptos = ["Backend", "Front-end", "<BODY>", "<FOOTER>", "<NAV>", "<DIV>", "una clase", "un ID", "<a>", "Wireframe", "href", "HTML", "CSS", "<Title>", "<p>"] // Hay 15 preguntas.

let nombre = document.getElementById("nombre")
let pregunta = document.getElementById("pregunta")


function generadorRandom(array, elementoHTML) {

    if (array.length !== 0) {

        let indexRandom = Math.floor(Math.random() * array.length)
    
        elementoHTML.innerText = array[indexRandom]
        array.splice(indexRandom, 1);

    } else {
        elementoHTML.innerText = "Se acabó"
    }
  
}

document.getElementById("boton").addEventListener("click", function(){
    generadorRandom(estudiantes, nombre)
    generadorRandom(conceptos, pregunta)
})