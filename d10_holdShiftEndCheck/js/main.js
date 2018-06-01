const checkboxes = document.querySelectorAll('.inbox [type="checkbox"]')

let lastChecked

function handleCheck(e){
    //verifica se a tecla shift está pressionada
    //e se o checkbox foi marcado e para de marcar caso já esteja marcado

    let inBetween = false

    if(e.shiftKey && this.checked){
        //percorre o array de checkbox formado entre o primeiro e o ultimo elemento marcado
        checkboxes.forEach(checkbox => {
            console.log(checkbox)
            if(checkbox === this || checkbox === lastChecked){ //1º this recebe o primeiro click
                inBetween = !inBetween
                console.warn('área de seleção')
            }
            if(inBetween){
                checkbox.checked = true
            }
        })
    }

    lastChecked = this //2º this recebe o segundo click
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))