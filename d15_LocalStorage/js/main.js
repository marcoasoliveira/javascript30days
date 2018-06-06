const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || []; //se não tiver nada no LocalStorage, cria
                                                               //um array vazio
function addItem(e){
    e.preventDefault();
    
    const text = (this.querySelector('[name=item]')).value //seleciona o input do form que disparou o evento
                                                           //().value para atribuir o valor inserido no input
    const item = {
        text,  //no ES6 não é necessário escrever text: text, pois o identificador e a varável tem o msm nome
        done: false
    }
    console.warn(item)
    items.push(item)
    populateList(items, itemsList)

    localStorage.setItem('items', JSON.stringify(items)) //utiliza-se o stringify pois o localstorage
                                                         //não identifica o objeto, apenas string
    this.reset() //para apagar o form
}

function populateList(plates = [], platesList){ //passa um obj vazio caso um não seja passado.
    platesList.innerHTML = plates.map( (plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done? 'checked' : ''}>
                <label for="item${i}">${plate.text}</label>

            </li>
        `
    }).join('')
}

function toggleDone(e){
    if(!e.target.matches('input')) return; //caso o target não seja do tipo input, nada será executado
    
    const el = e.target
    const index = el.dataset.index
    items[index].done = !items[index].done
    localStorage.setItem('items', JSON.stringify(items))
    populateList(items, itemsList)
}


addItems.addEventListener('submit', addItem)
itemsList.addEventListener('click', toggleDone)

populateList(items, itemsList) //Popula a lista com os elementos do localStorage ao carregar a página