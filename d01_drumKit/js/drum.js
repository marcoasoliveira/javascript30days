function playSound(e){

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) //relaciona o audio à tecla
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`) //relaciona a div à tecla
    
    if(!audio) 
        return;

    audio.currentTime = 0; // retorna ao início do audio, assim podemos apertar 
                            //a msm tecla várias vezes seguidas ou mais de uma tecla sem 
                            //que o som tenha acabado
    audio.play() //para reproduzir o audio

    key.classList.add('playing')
}

function removeTransition(e){
    if(e.propertyName !== 'transform')
        return; // pula caso não seja uma transição/transformação do elemento
    
    this.classList.remove('playing') //remove a classe da tecla após a animação 
}

const keys = document.querySelectorAll('.key')

keys.forEach(key => key.addEventListener('transitionend', removeTransition))
//Pega o array de divs criado em keys e adiciona um "escutador" de evento que dispara ao final da transição CSS
// quando a transição acaba, executa a classe removeTransition, que remove a classe playing da div

window.addEventListener('keydown', playSound)
//captura o evento sempre que uma tecla for pressionada e executa a classe playSound, responsável pelo áudio