const input = document.getElementById("birth")

input.addEventListener("input", (event) => {
    validarFecha(event.target)
})

function validarFecha(input){
    const fechaInput = new Date(input.value);
    let msg = "";
    if(!MayorDeEdad(fechaInput)){
        msg = "Debes tener al menos 18 años de edad para enviar el formulario" 
        input.setCustomValidity(msg);  
        input.reportValidity() // Agregar esta línea para mostrar el mensaje de validación personalizado
    };
}


function MayorDeEdad(fechaInput){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fechaInput.getUTCFullYear() + 18, //se agrega el + 18 para sumar 18 años a la fecha actual
        fechaInput.getUTCMonth(), 
        fechaInput.getUTCDate()
    );
    return diferenciaFechas < fechaActual;
}