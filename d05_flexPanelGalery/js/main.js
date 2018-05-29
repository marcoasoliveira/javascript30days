const panels = document.querySelectorAll('.panel')


function toggleOpen(){
    this.classList.toggle('open')
}

function toggleActive(e){  //passa um evento pois trata-se de um evento multiplo
    console.log(e.propertyName) //retorna flex-grow e font-size
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active')
    } 
}

panels.forEach( panel => panel.addEventListener('click', toggleOpen))
panels.forEach( panel => panel.addEventListener('transitionend', toggleActive))