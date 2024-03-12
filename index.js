const titulo = document.getElementById("titulo")
const h1 = document.createElement("h1")
h1.id = 'titulo'
h1.innerText = '¡Bienvenidos a GO KARTS!'
titulo.appendChild(h1)

const footer = document.getElementById("footer")
const p = document.createElement("p")
p.id = 'desarrollado'
p.innerText = 'Desarrollado por Juan Cruz Di Vanni'
footer.appendChild(p)


const pista =  {
    cantidadVueltas: 5,
    ubicacion: 'Buenos Aires',
    dificultad: 'Dificil'
}
console.log(pista);

const karts = {
    color: 'verde',
    motor: '100cc',
    ruedas: 4
}
console.log(karts);

const pilotos = []

const inputPiloto1 = document.querySelector("#piloto1")
const inputPiloto2 = document.querySelector("#piloto2")
const confirmarPilotos = document.querySelector("#confirmarPilotos")

inputPiloto1.addEventListener("input", (event) =>{
    pilotos.piloto1 = event.target.value
})

inputPiloto2.addEventListener("input", (event) =>{
    pilotos.piloto2 = event.target.value
})

//console.log(pilotos)

confirmarPilotos.addEventListener("click", () =>{
    pilotos.push({pilotos})
    pilotos.forEach((pilotos) =>{
        console.log(pilotos)
    }
    )
    const span = document.createElement("span")
    span.innerText = "¡Hora de correr pilotos!"
    container.appendChild(span)
})

kart1.addEventListener("click", () =>{
    

})

//for(let i=0; i < 1; i++ ){
//    const piloto1 = prompt("¡Bienvenidos a GO KARTS!, ingrese nombre del primer piloto:")
//    const piloto2 = prompt("Ingrese nombre del segundo piloto:")
//    pilotos.push({ piloto1: piloto1,piloto2: piloto2 })
//}

//pilotos.forEach((piloto)=>{
//    console.log(piloto)
//})

//let respuesta = prompt("¿Comenzar a correr? escribir: \n - 1 para empezar \n - 2 para salir")

/* if((respuesta == '2') || (respuesta !== '1')){
    alert("¡Gracias por venir!")
} */

/* while(respuesta === '1'){
    const velocidad1 = Math.floor(Math.random() * (10 + 1));
    const velocidad2 = Math.floor(Math.random() * (10 + 1));
    function correr(){
        if(velocidad1 > velocidad2){
            alert("¡Ganador Kart 1!")
        }else if(velocidad1 < velocidad2){
            alert("¡Ganador Kart 2!")
        }else if(velocidad1 == velocidad2){
            alert("¡Es un empate!")
        }                
    } */

/*     const kart = prompt("Seleccione kart preferido escribiendo 1 o 2: \n -Kart 1 \n -Kart 2" )
    if((kart == '1') || (kart == '2')){
    switch(kart){
        case '1':
            alert("Seleccionaste Kart 1, ¡Hora de correr!")
            correr();
            break;
        case '2':
            alert("Seleccionaste Kart 2, ¡Hora de correr!")
            correr();
            break;
    }
    }else{
        alert("Favor de seleccionar un número de kart correcto")
    }
 */

/*     respuesta = prompt("¿Desea seguir corriendo? escribir: \n - 1 para empezar \n - 2 para salir")

    if((respuesta == '2') || (respuesta !== '1')){
        alert("¡Gracias por venir!")
    }

} */


