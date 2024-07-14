export default function esMayorDeEdad(campo){

    const fechaNacimiento = new Date(campo.value)    
    
    if(!verificarEdad(fechaNacimiento)){
        campo.setCustomValidity("Debes ser mayor de edad")
    }
}


function verificarEdad(fecha){
    const fechaActual = new Date()
    const edad = new Date(fecha.getUTCFullYear()+18, fecha.getUTCMonth(), fecha.getUTCDay()) 

    console.log( fechaActual, edad)

    return fechaActual >= edad
    
}

