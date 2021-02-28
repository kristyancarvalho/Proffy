// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)


// Executar uma ação
function cloneField() {

    // Duplicar os campos. Que campos??
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    // boolean: true or false

    // pegar os campos, quais campos?
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo, limpar
    fields.forEach(function(field) {
        // pegar o field do momento e limpa ele
        field.value = ""
    })

    // Colocar na página: onde? qual parte da pagina??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}

    