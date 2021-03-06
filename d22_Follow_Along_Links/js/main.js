const triggers = document.querySelectorAll('a')
const highlight = document.createElement('span')

highlight.classList.add('highlight')
document.body.appendChild(highlight) //adiciona o elemento no body

function highlightLink(){
    const linkCoords = this.getBoundingClientRect() //retorna a posição do elemento na tela e seu tamanho
    highlight.style.width = `${linkCoords.width}px`
    highlight.style.height = `${linkCoords.height}px`
    highlight.style.transform = `translate(
        ${linkCoords.left + window.scrollX}px, ${linkCoords.top + window.scrollY}px
    )`

}

triggers.forEach(a => a.addEventListener('mouseenter',highlightLink))