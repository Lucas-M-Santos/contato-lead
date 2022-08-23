var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(
        response => response.json()
    ).then(
        response => alert('Formulário enviado!', response)
    ).catch(
        error => alert('Error: Formulário não enviado.', error.message)
    );
});