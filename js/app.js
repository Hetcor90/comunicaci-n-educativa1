document.addEventListener("DOMContentLoaded", function () {
    const botonIngresar = document.querySelector(".btn__ingresar"); // boton ingresar header
    const botonMensajeIngresar = document.querySelector(".btn__ingresar__ingresar"); // boton ingresar formulario
    const mensajeIngresar = document.querySelector(".mensaje"); // boton ingresar formulario
    const botonRegistro = document.querySelector(".btn__registro"); //boton registro
    const mensajeRegistro = document.querySelector(".registro"); //boton registro
    const inputBuscar = document.getElementById("buscar"); // boton buscar

// boton ingresar header
    if (botonIngresar) {
        botonIngresar.addEventListener("click", function () {
            window.location.href = "ingreso.html";
        });
    }

// boton ingresar formulario
    if (botonMensajeIngresar){
        botonMensajeIngresar.addEventListener("click", function (){
            const nuevoH2 = document.createElement("h2");
            nuevoH2.textContent = "Haz iniciado sesión";
            nuevoH2.classList.add("mensaje__ingresar");
            mensajeIngresar.appendChild(nuevoH2);
        });
    }

//boton registro
    if (botonRegistro){
        botonRegistro.addEventListener("click", function (){
            const nuevoH2 = document.createElement("h2");
            nuevoH2.textContent = "Registro exitoso!";
            nuevoH2.classList.add("mensaje__ingresar");
            mensajeRegistro.appendChild(nuevoH2);
        });
    }

// boton buscar
    inputBuscar.addEventListener("keyup", function () {
        let filtro = inputBuscar.value.toLowerCase();
        let contenido = document.body;
        let elementos = contenido.querySelectorAll("section, div"); // Selecciona todos los elementos de la página

        elementos.forEach(i => {
            let textoOriginal = i.textContent; // Obtiene el texto original del elemento
            let textoMinuscula = textoOriginal.toLowerCase();

            if (filtro === "") {
                i.innerHTML = textoOriginal; // Restaura el texto original
            } else if (textoMinuscula.includes(filtro)) {
                let textoResultado = textoOriginal.replace(
                    new RegExp(filtro, "gi"), // Usa "gi" para hacer la búsqueda global e insensible a mayúsculas
                    (coincidencia) => `<span class="resaltado">${coincidencia}</span>`
                );
                i.innerHTML = textoResultado;
            }
        });
    });
});


