export default function esUnCuil(campo) {
  const cuil = campo.value.replace(/\-/g, "");
  
    if(repeticiones(cuil)){
        console.log('Hay repeticiones');
    }else{
        if(ordenCuil(cuil) && validarDigito(cuil)){
            console.log('Cuil Valido');
            campo.setCustomValidity("Cuil Valido")
        }else{
            console.log('Cuil No Valido');
            campo.setCustomValidity("Cuil No Valido")
        }
    }
}

function repeticiones(cuil) {
  const numeroRepetido = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
  ];
  return numeroRepetido.includes(cuil);
}

function ordenCuil(cuil) {
  let primeros = cuil.substr(0, 2);
  let repetidos = ['20', '23', '24', '27', '30', '33', '34'];

  return repetidos.includes(primeros);
}


function validarDigito(cuil){
    let acumulador = 0
    const factores = [5,4,3,2,7,6,5,4,3,2]

    for (let i = 0; i < 10; i++) {
        acumulador += parseInt(cuil[i], 10) * factores[i]
    }

    const validadorTeorico = 11 - (acumulador % 11)
    
    if(validadorTeorico === 11){
        validadorTeorico = 0
    }else if(validadorTeorico === 10){
        validadorTeorico = 9
    }
    

    const digitoVerificador = parseInt(cuil[10],10)

    return digitoVerificador == validadorTeorico

}