# javascript30days

Atividades propostas no desafio de `Vanilla JS` do curso de __Javascript__ do site [javascript30](https://javascript30.com/).

Este arquivo apresenta minhas anotações durante o desenvolvimento das atividades, como forma de __fixação e compartilhamento__ de conhecimento.

Cada atividade estará em uma pasta separada dentro deste repositório devidamente identificada pelo dia e título. 

## Dia 1 - DrumKit

- `<kbd>` tag html para identificar inputs do teclado.

- Unidade __vh__ (css), medida na proporção 1/100 em relação à altura do viewport, ou seja, uma tela com 900px de altura, 1vh = 9px. O mesmo vale para __vw__ em relação a largura do viewport.

- Unidade __rem__ (css), é indicado para desenvolvimento responsivo. Ao ser definido um tamanhou de fonte no body (`ex.: 14px`), ao definir um outro tamanho com `rem (ex.: 1.2rem)` em um elemento filho, teremos (*14px x 1.2 = 16.8px*). __Obs.:__ Utilizando rem no css de um elemento, ele define que a métrica utilizada será sempre a mesma (em relação ao body), independente da posição do elemento no grid. Utilizando __em__ a métrica é sempre em relação ao elemento pai do elemento em questão.

- Os valor utilizados nos `data-key` de cada div são os valores correspondentes aos [key codes](http://keycode.info/) de cada tecla. Esses valores são universais e independem de plataforma.

- Utilizamos *key events* para disparar eventos e alterar as classes das divs.

## Dia 2 - CSS + JS Clock

- construção de relógio utilizando `new Date()` para receber a hora atual e através disso, atualizar o atributo de rotação dos ponteiros.

- coloquei um mostrador a mais em baixo, com a hora "digital".

- `transition-time-function: cubic-belzier()` faz a animação de "tremida" do ponteiro quando realiza o movimento.

## Dia 3 - Variáveis CSS + JS 

- são estabelecidas as variáveis dentro da tag `:root` no CSS.

- convenciona-se que a escrita de uma variável segue o exemplo: `--nomeDaVariável`

- para definir o valor de uma propriedade como sendo o valor de uma variável, utiliza-se `var(variável)`, como por exemplo:  *padding: var(--spacing)*

- a propriedade `dataset` captura os valores utilizados no atributo `data-` do html, como no exemplo utilizamos *data-sizing*, no javascript capturamos como `dataset.sizing`.

- `.style.setProperty` altera o valor de um atributo no css.

## Dia 4 - arrayCardio - day 1

- Neste arquivo foram utilizados os métodos de array `.filter(), .map(), .reduce(), .sort()` e a combinação entre eles para gerar um novo array de acordo com o pedido em cada item.

- __Filter()__: recebe uma função que deve devolver `true` caso uma condição seja atendida.

`array.filter( linha => linha.item >= 10 && linha.item < 20)` *retornará todos os itens entre 10 e 19*

- __Map()__: recebe uma função que devolve um array com o mesmo tamanho do original mas com os itens solicitados

`array.map( linha => linha.a + ' ' + linha.b)` *retornará um array contendo a concat "a b" de cada index*

- __Sort()__: recebe uma função que faz a comparação a-b e devolve um array ordenado

`array.sort( (a,b) => a.item > b.item? 1 : -1)` *retornará um array ordenado do maior para o menor*

- __Reduce()__: recebe duas variáveis, uma representando o total e outra o array, e devolve o total conforme o solicitado. O valor inicial de *total* deve ser passado após a função como segundo parâmetro do reduce.

`array.reduce( (total, linha) => {`
    `return total + (linha.itemB - linha.itemA) `
`},0)`

- os métodos podem ser combinados.

- trabalhando com separação de strings, podemos utilizar `.split()` que recebe como atributo o caracter que será a __flag__ de separação. `nomeCompleto.split(', ')` irá separar a string presente na variável em várias partes sempre que houver uma (,) acompanhada de espaço.

## Dia 5 - Flex Panel Galery

- Inicialmente as divs estavam dispostas uma a baixo da outra, mas utilizando `display: flex` elas passam a ficar lado a lado. [flexbox](https://flexbox.io/)

- Utilizando `flex:1` nas propriedades de `panel`, os paineis ficam igualmente distribuidos na tela sempre que houver um espaço extra.

- Quando um dos paineis tiver `flex:5`, esse ocupará 5x mais espaço que os demais (do espaço disponível)

- Utilizando `.panel > *:first-child` e `.panel > *:last-child` definimos as propriedades para o primeiro e ultimo elementos dentro de panel.

- `.classList.toggle()` adiciona a classe recebida como parâmetro caso o elemento não a tenha e remove caso ela já exista.

## Dia 6 - Ajax type Ahead

- Realizar o `fetch()` em uma fonte de dados retorna uma __Promise__.

- A estrutura do fetch segue a ordem:

`fetch(origemDados)`
    `.then()` <--- função a ser executada caso a promisse retorne OK
    `.catch()` <--- função a ser executada caso algum erro aconteça

- Realizar o `.push` de um array para dentro de outro array, coloca todos os valores dentro de um único index do array que recebe o push. [{1,2,3,4...}, 1, 2, 3...]. para evitar que isso aconteça, utilizamos o __spread__ dentro do push. `arrayA.push(...arrayB)`.

- `.match()` procura uma string correspondente ao atributo passado (com expressão regular) em um array ou string. 

- Utilizando `keyup` em `.addEventListener`, o evento será disparado a cada tecla pressionada.

- `.join()` transforma um array com itens multiplos em uma única string.

## Dia 7 - Array Cardio - day 2

- `.some()` realiza um teste no array e verifica se __ALGUM__ dos itens atende a uma condição.

- `.every()` realiza um teste no array e verifica se __TODOS__ os itens atendem a uma condição

- `.find()` realiza um teste no array e retorna o __primeiro valor__ que atenda a uma condição

- `.findIndex()` semelhante ao método `.find()` mas retorna a __posição__ no array, do primeiro item que atende a condição.

- `.slice(x, y)` retorna uma cópia do array com os __elementos entre os indices x__ e __y__.

## Dia 8 - Fun with HTML5 Canvas

- Canvas é semelhante ao __paint__ do windows, mas o desenho não é feito no __elemento canvas__ no HTML, mas no contexto dele, que pode ser __2d ou 3d__. `canvas.getContext('2d')` por exemplo.

- __Guia para contexto do canvas:__ [MDN Canvas 2D](https://developer.mozilla.org/pt-BR/docs/Web/API/CanvasRenderingContext2D)

## Dia 9 - 14 Must Know Dev Tools Tricks

- No __Google Chrome__, para saber os atributos que o `JS` está modificando, abra a *ferramenta de desenvolvimento* ou clique na opção de *inspecionar elemento*, e no elemento que sofre a alteração, abra as opções (click oposto) e depois: `break on\ attribute modifications`. Quando a função JS dispara, ela é pausada pelo navegador e uma nova aba é aberta na inspeção, exibindo a função responsável.

- É possível realizar alteração de estilo também no console. Exemplo:

    + expressão regular: `console.log('Hello!')`
    + texto interpolado: `console.log('Hello Im a %s string','💩')` <-- %s é trocado pelo 💩 no console
    + estilizado: `console.log('%c Hello','font-size: 50px; background: red')` <-- o %c atribui ao texto o estilo passado.

- Podemos também utilizar outros displays no console, como __console.warn()__, __console.error()__, __console.info()__, __console.assert()__, 

- Podemos também agrupar mensagens no console, utilizando `console.group('${variávelX}')` para abrir o grupo e `console.groupEnd('${variávelX}')`.

- Além disso, temos `console.count('texto')`, para contar quantas vezes esse texto foi exibido no console e `console.time('texto')` para contar quanto tempo levou entre a chamada e o encerramento `console.timeEnd('texto')`.

- Use `console.table()` para exibir arrays no console de maneira organizada em tabela.
