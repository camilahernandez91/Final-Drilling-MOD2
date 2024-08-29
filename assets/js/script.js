$(document).ready(function () {

    // LINKS 
    $('.linkPortafolio,.linkContacto').on({
        mouseenter: function () {
            $(this).css("color", "rgb(81, 173, 109)");
        },
        mouseleave: function () {
            $(this).css("color", "rgb(138, 206, 158)")
        }
    })

    // FORMULARIO CONTACTO
    $('form').on('submit', function (event) {
        event.preventDefault();
        $('.cambio').text('¡ESTAMOS EN CONTACTO!')

    })

    // BOTON CONTACTO
    $('.botonContacto').on({
        mouseenter: function () {
            $(this).css("background-color", "rgb(81, 173, 109)");
        },
        mouseleave: function () {
            $(this).css("background-color", "rgb(138, 206, 158)")
        }
    })

})
