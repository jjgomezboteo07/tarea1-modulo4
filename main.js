
const formulario = document.getElementById('Miformulario');
formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    const emailUsuario = document.getElementById('email').value;

    alert(`¡Gracias! Tu consulta ha sido enviada con éxito. Pronto recibirás una respuesta en: ${emailUsuario}`);

    formulario.reset();
});