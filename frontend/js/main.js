let globalColor = "";
let endpointUrl = 'http://localhost:3000/notes';

// Método que quita la apariencia de seleccionado al botón de los colores
function resetSelectedClass() {
    globalColor = "";
    $('#texto').css("background-color", "#fafafa");
    $('.colors').removeClass('selected');
}

// Método que se ejecuta al picar alguna de las selecciones de color de las notas
$('.colors').on('click', function () {
    resetSelectedClass();
    $(this).addClass('selected');
    globalColor = $(this).data('color');
    $('#texto').css("background-color", globalColor);
});

// Método que se ejecuta cuando se cambia el texto que hay en la caja de texto de las notas
$('#texto').on('change paste keyup', function () {
    texto = $(this).val();
    if (texto === "") $('#error').show();
    else $('#error').hide();
});

// Método que se ejecuta cuando hacemos click en el botón de agregar
$('#agregar').on('click', function () {

    // Se obtiene el texto de la caja de texto
    let texto = $('#texto').val();

    // Si el texto de la caja está vacío o no hay ningún color seleccionado, manda error
    if (texto === "" || globalColor === "") $('#error').show();
    else {
        $('#error').hide();

        // Nuevo objeto que tendrá los valores de la nota nueva
        let newNota = {
            text: texto,
            color: globalColor
        };

        // Se manda a hacer la petición de tipo POST con la nueva nota
        postNewNote(newNota);

        // Se vacía la caja de texto y se deseleccionan todos los colores
        $('#texto').val("");
        resetSelectedClass();

    }
});

function postNewNote(note) {

    // Se genera nuevo objeto del tipo de petición (ochentera haha xD)
    let request = new XMLHttpRequest();

    // Éste será el callback que se ejecutará al finalizar la petición
    request.onload = () => printNotes();

    // Se abre la petición y se establece la url al que hará la petición, y el método con el que se hará
    request.open('POST', endpointUrl, true);

    /**
     * El protocolo http sólo funciona con strings al momento de transmitir información a través deinternet.
     * Como el objeto de nota, es un objeto como tal, se debe de convertir a string para poderlo enviar.
     * Para lograr eso lo hacemos a través del método stringify, que ofrece la clase JSON de js
     */
    let formattedJsonData = JSON.stringify(note);

    // Se establece una cabecera de la petición que indica que el texto viene con la estrucutra de JSON
    // De no poner esta cabecera, nuestro backend no será capaz de reconocer el texto, ya que él espera un JSON
    request.setRequestHeader("Content-Type", "application/json");

    // Se envía la petición
    request.send(formattedJsonData);

}

function deleteNote(id) {

    // Se genera nuevo objeto del tipo de petición (ochentera haha xD)
    let request = new XMLHttpRequest();

    // Éste será el callback que se ejecutará al finalizar la petición
    request.onload = () => printNotes();

    // Se abre la petición y se establece la url al que hará la petición, y el método con el que se hará
    request.open('DELETE', endpointUrl, true);

    /**
     * El protocolo http sólo funciona con strings al momento de transmitir información a través deinternet.
     * Como el objeto de nota, es un objeto como tal, se debe de convertir a string para poderlo enviar.
     * Para lograr eso lo hacemos a través del método stringify, que ofrece la clase JSON de js
     */
    let formattedJsonData = JSON.stringify({id});

    // Se establece una cabecera de la petición que indica que el texto viene con la estrucutra de JSON
    // De no poner esta cabecera, nuestro backend no será capaz de reconocer el texto, ya que él espera un JSON
    request.setRequestHeader("Content-Type", "application/json");

    // Se envía la petición
    request.send(formattedJsonData);

}

function addDeleteClickListener() {

    // Método que se ejecutará cada que se haga click en el ícono de borrar de cualquier nota
    $('.delete').on('click', function () {

        let id = $(this).data("id");
        deleteNote(id);

    });

}

// Éste método es el encargado de 'imprimir' (agregar al HTML) todas las notas que vengan desde el backend
function printNotes() {

    // Se vacía el contenedor (es un div) de nuestro front
    $('#notas-container').empty();

    // Se inicia un nuevo objeto para la petición
    let request = new XMLHttpRequest();

    // Se indica el método que se quiere usar, y a qué endpoint se hará
    request.open('GET', endpointUrl, true);

    // Callback que se ejecutará al finalizar la petición
    request.onload = () => {

        // Como es un GET, esperamos una lista que incluya todas nuestras notas
        // Pero como viene directo del backend, hay que pasarlo de texto a objeto
        // Para lograr eso ocupamos la función parse, de la clase JSON
        let notesList = JSON.parse(request.responseText);

        // Como lo que esperamos es una lista, podemos hacer un map
        // el map le aplica una función a cada uno de los elementos de la lista
        notesList.map((note) => {

            // Se añadirá el siguiente HTML al contenedor principal
            // Teniendo como atributos el color, el id y el texto
            $('#notas-container').append(`
                 <div class="nota ${note.color}">
                     <span class="delete" data-id="${note._id}"></span>
                     <span class="inner">${note.text}</span>
                 </div>
                 `);

        });

        // Como apenas se generaron las notas, hasta este momento se pueden acoplar los listeners al ícono de borrar
        addDeleteClickListener();

    };

    // Método que se ejecutará en caso de error
    request.onerror = () => {
        console.log('Peldón, me caí, toy chiquito');
    };

    // Se envía la petición
    request.send();

}

// Dispara una petición inicial para poder mostrar las notas que se guardaron anteriormente.
printNotes();