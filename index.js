let respuesta = prompt("Bienvenido/a a GO KARTS, desea jugar? ESC para salir")


while(respuesta != 'ESC'){

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

    const kart = prompt("Seleccione kart preferido: \n -Kart 1 \n -Kart 2" )
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


    respuesta = prompt("Bienvenido/a a GO KARTS, desea jugar? ESC para salir")

}