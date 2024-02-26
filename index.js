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

for(let i=0; i < 1; i++ ){
    const piloto1 = prompt("¡Bienvenidos a GO KARTS!, ingrese nombre del primer piloto:")
    const piloto2 = prompt("Ingrese nombre del segundo piloto:")
    pilotos.push({ piloto1: piloto1,piloto2: piloto2 })
}

console.log(pilotos)

let respuesta = prompt("¿Comenzar a correr? escribir SI para empezar o NO para salir")

if((respuesta == 'NO') || (respuesta !== 'SI')){
    alert("¡Gracias por venir!")
}

while(respuesta === 'SI'){
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
    }

    const kart = prompt("Seleccione kart preferido escribiendo 1 o 2: \n -Kart 1 \n -Kart 2" )
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


    respuesta = prompt("¿Desea seguir corriendo? escribir SI para empezar o NO para salir")

    if((respuesta == 'NO') || (respuesta !== 'SI')){
        alert("¡Gracias por venir!")
    }

}

