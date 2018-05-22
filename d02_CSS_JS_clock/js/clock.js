const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

const dispSecond = document.querySelector('.displaySec')
const dispMin = document.querySelector('.displayMin')
const dispHour = document.querySelector('.displayHour')

function setDate(){
    
    const now = new Date()

    const secondDegrees = ((now.getSeconds() / 60) * 360) + 90 //converte os minutos atuais em posição de rotação
    secondHand.style.transform = `rotate(${secondDegrees}deg)`
    dispSecond.innerHTML = ''
    dispSecond.innerHTML = now.getSeconds()+'s'
    
    const minDegrees = ((now.getMinutes() / 60) * 360) + 90
    minHand.style.transform = `rotate(${minDegrees}deg)`
    dispMin.innerHTML = ''
    dispMin.innerHTML = now.getMinutes()+'m'

    const hourDegrees = ((now.getHours() / 12) * 360) + 90
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
    dispHour.innerHTML = ''
    dispHour.innerHTML = now.getHours()+'h'
}

setInterval(setDate, 1000) //executa a função setDate a cada 1s.