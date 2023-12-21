// El siguiente código recibe el valor introducido en el formulario y comprueba si es el número premiado o no.

// Paso 1 - Definimos el número premiado (el que queramos entre el 1 y el 10) como una constante.

let numeroPremiado = 5;

// Paso 2 - Extraemos en dos objetos distintos el campo (utilizando su id) y el submit (utilizando si clase).

let numerito = document.querySelector('#numerito');
let submit = document.querySelector('.subcontainer__form__submit');


// Paso 3 - Añadimos un "event listener" al objeto submit para que llame a la función "comprobar" cuando lo pulsemos.

submit.addEventListener('click', () => {
	comprobar()
})


// Paso 4 - Definimos la función "comprobar".

function comprobar() {

    // Paso 4.1 -- Si el VALOR de el objeto campo es igual al número premiado...
    if (numerito.value == numeroPremiado) {

        // Paso 4.1.1 --- ... Mostramos una alerta informando al usuario que ha acertado.
        alert('¡Has acertado!');

        // Paso 4.2 -- Y si no...
    }else {

        // Paso 4.2.1 --- ... Mostramos una alerta informando al usuario que debe volver a intentarlo.
        alert('Intentalo de nuevo');

    }

}

// Todo lo necesario para hacer este ejercicio se vió en la clase 29.