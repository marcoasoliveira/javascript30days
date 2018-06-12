const timeNodes = [... document.querySelectorAll('[data-time]')]

const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [mins, secs] = timeCode.split(':') //separa os valores de acordo com :
            .map( str => parseFloat(str)) //remove o zero da frente dos valores
        return (mins * 60) + secs //retorna o timeCode em segundos totais
    })
    .reduce((total, vidSeconds) => total + vidSeconds) //retorna o tempo total em segundos

let secondsLeft = seconds

const hours = Math.floor(secondsLeft / 3600)
secondsLeft = secondsLeft % 3600

const mins = Math.floor(secondsLeft / 60)
secondsLeft = secondsLeft % 60

console.log(hours, mins, secondsLeft)
