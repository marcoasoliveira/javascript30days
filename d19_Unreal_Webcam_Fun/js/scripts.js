const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo(){
    navigator.mediaDevices.getUserMedia({video: true, audio: false}) //solicita o uso da camera sem audio
        .then(localMediaStream => { //promise, se o uso for autorizado executa o bloco abaixo
            console.log(localMediaStream)
            video.src = window.URL.createObjectURL(localMediaStream) //cria uma url para exibir o video na tela
            video.play()
        })
        .catch(erro => {
            console.error('Ops! Temos um problema:', err)
        })
}

function paintToCanvas(){
    const width = video.videoWidth
    const height = video.videoHeight

    canvas.width = width
    canvas.height = height

    setInterval( () => {
        ctx.drawImage(video, 0, 0, width, height)

        //pega os pixels da imagem
        let pixels = ctx.getImageData(0, 0, width, height) //recebe o mapa de pixels(RGBa) da imagem
    
        //pixels = redEffect(pixels)
        //pixels = rgbSplit(pixels)
        pixels = greenScreen(pixels)


        //aplica a imagem filtrada na tela
        ctx.putImageData(pixels, 0, 0)
    }, 16)

}

function takePhoto(){
    //toca o som de foto
    snap.currentTime = 0
    snap.play()

    //pega dados fora do canvas
    let shotNumber = 0
    const data = canvas.toDataURL('image/jpeg') //gera uma representação em texto base64 da foto
    const link = document.createElement('a')
    link.href = data 
    link.setAttribute('download',`myPic${shotNumber}.jpeg`)
    link.innerHTML = `<img src="${data}" alt="myPic${shotNumber}">`
    strip.insertBefore(link, strip.firstChild)
    shotNumber++

}

function redEffect(pixels){
    for (let i = 0; i < pixels.data.length; i += 4) { //4 pois cada pixel é composto de 4 posições no array(RGBa)
        pixels.data[i + 0] += 100 //Red
        pixels.data[i + 1] -= 50 //Green
        pixels.data[i + 2] *= 0.5 //Blue
    }
    return pixels
}

function rgbSplit(pixels){
    for (let i = 0; i < pixels.data.length; i += 4) { //4 pois cada pixel é composto de 4 posições no array(RGBa)
        pixels.data[i - 150] = pixels.data[i + 0]
        pixels.data[i + 100] = pixels.data[i + 1]
        pixels.data[i - 150] = pixels.data[i + 2] 
    }
    return pixels
}

function greenScreen(pixels) {
    const levels = {};
  
    document.querySelectorAll('.rgb input').forEach((input) => {
      levels[input.name] = input.value;
    });
  
    for (i = 0; i < pixels.data.length; i = i + 4) {
      red = pixels.data[i + 0];
      green = pixels.data[i + 1];
      blue = pixels.data[i + 2];
      alpha = pixels.data[i + 3];
  
      if (red >= levels.rmin
        && green >= levels.gmin
        && blue >= levels.bmin
        && red <= levels.rmax
        && green <= levels.gmax
        && blue <= levels.bmax) {
        // take it out!
        pixels.data[i + 3] = 0;
      }
    }
  
    return pixels;
  }



getVideo()

video.addEventListener('canplay', paintToCanvas)