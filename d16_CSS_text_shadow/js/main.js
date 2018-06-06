const hero = document.querySelector('.hero')
const text = hero.querySelector('h1')

const walk = 100

function shadow(e){
    // const width = hero.offsetWidth
    // const height = hero.offsetHeight   pode ser subistituido por
    const { offsetWidth: width, offsetHeight: height } = hero

    let {offsetX: x, offsetY: y} = e //é a msm coisa que ter e.offsetX = x e e.offsetY = y

    if(this !== e.target){ //this = div.hero
        x = x + e.target.offsetLeft
        y = y + e.target.offsetTop
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2))
    const yWalk = Math.round((y / height * walk) - (walk / 2))

    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 red,
        ${xWalk * -1}px ${yWalk}px 0 green,
        ${yWalk}px ${xWalk * -1}px 0 blue,
        ${yWalk * -1}px ${xWalk}px 0 yellow
    `
    
}

hero.addEventListener('mousemove', shadow)