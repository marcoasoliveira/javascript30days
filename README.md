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

## Dia 10 - Hold Shift to Check Multiple Checkboxes

- Código que verifica se a tecla shift está pressionada para fazer a marcação de multiplos checkboxes.

- `.checked` é um atributo que retorna true ou false na verificação de estado checkbox no JS, mas também pode receber uma atribuição de valor (true ou false).

- `.shiftKey` foi utilizado para verificar o estado da tecla shift.

## Dia 11 - Custom HTML5 Video Player

- O elemento video pode ter seu estado validado pelo atributo `.paused`, que retorna true ou false e podemos executar o __play__ ou __pause__ do vídeo com os métodos `play() e pause()`.

- Podemos também trabalhar com o tempo de vídeo já percorrido e avançar ou retroceder através do atributo `.currentTime`.

- Utilizamos no elemento __button__ o atributo `data-skip`. O atributo data recebe um valor que será passado quando solicitado. *Skip* foi o nome dado ao tipo de dado.

- `.currentTime` trabalha com valores do tipo __float__, sendo assim foi necessário realizar o "parse" dos dados recebidos de `data-skip`.

- Podemos acessar as propriedades do video utilizando `video[propriedade]`, como por exemplo (`video[this.name]`) que acessará a propriedade de nome igual ao do elemento que disparou a função.

- O evento `timeupdate` é disparado conforme o progresso do vídeo, assim atualiza o atributo `flexbasis` da progressBar.

- A função `scrub()` redefine o tempo de vídeo atual através do evento disparado pela barra de progresso. O calculo é feito levando em consideração a __posição do click no EIXO X__ (`e.offsetX`), a __largura da barra de progresso__ (progress.offsetWidth) e a __duração do vídeo__ (`video.duration`).

## Dia 12 - Key Sequence Detection (KONAMI CODE)

- Detecção de uma sequência de teclas pressionadas na tela para a realização de uma função (normalmente um easter egg).

- Tem esse nome em referência aos __cheat codes__ utilizados pela Konami, como por exemplo o famoso *Juiz Cachorro*.

- Utilizamos o método `.splice` para limitar o tamanho do array para que tivesse o mesmo tamanho que a palavra escolhida como *secretCode*. O sinal de menos na frente do `secreteCode.lenght` informa que a remoção dos itens adicionais deve ser feita na ordem (__primeiro que entra, primeiro que sai__) e tiramos 1 do valor do lenght pois a quantidade de indices de um array começa em zero, terminando um número a menos que a quantidade de itens. O segundo parametro informa a quantidade de itens a serem removidos.

- Para validar o código, realizamos um `join` e verificamos `include` se dentro da string formada, consta a palavra chave.

## Dia 13 - Slide in on scroll

- A função `debounce` recebe uma função como parâmetro e determina a frequência com a qual esta será executada impondo um tempo de espera.

- Na função `checkSlide` são realizadas as verificações dos pontos de base e meio das imagens em relação ao scroll da tela. Através desta verificação a classe `active` é adicionada ou removida.

## Dia 14 - Object and Arrays - Reference VS Copy

- Quando atribuimos que a variável `age2` recebe o valor de `age`, ela recebe uma "cópia" do valor de `age` naquele instante, assim, quando mudamos o valor de `age` no momento seguinte, essa mudança não afeta `age2` que continua exibindo o primeiro valor.

- Quando atribuimos que `team` receberá o valor do __array__ `players`, estamos fazendo uma __REFERÊNCIA DIRETA__ ao array original, assim, quando alteramos o valor presente em `team[3]`, a alteração será refletida no array original também.

- Podemos copiar o array utilizando `.slice()`, assim qualquer alteração realizada não será refletida no array original.

- Outras soluções para a cópia do array, seriam a utilização do `spread` ou atribuir um array vazio contatenado com o array players, ou ainda, utilizando `Array.from()`.

- _O mesmo tipo de problema ocorre com objetos_.

- Quando atribuímos um objeto à uma variável, estamos fazendo uma referência.

- Para fazer uma cópia de um objeto, podemos utilizar `Object.assign()`.

- __A cópia de um objeto só é realizada em primeiro nível__. Objetos que possuem outros objetos internamente, só são copiados na primeira camada. Os objetos internos ainda permanecem como referências ao objeto original.

- Uma alternativa para esse tipo de caso seria a utilização do esquema abaixo:

`const dev2 = JSON.parse(JSON.stringify(wes))`

- Assim, temos uma cópia *string* do objeto e realizamos o parse dessa string JSON. Desse jeito temos uma cópia do objeto e dos objetos internos.

## Dia 15 - LocalStorage and Event Delegation

- LocalStorage não interpreta os objetos da forma como o javascript trabalha, então precisamos converter em string utilizando `JSON.stringify`.

- `this.querySelector` aplica a seleção no contexto do elemento que disparou o evento.

- `.matches()` retorna true ou false se um critério for encontrado.

- Aplicar um EventListener a elementos que podem aparecer depois que a DOM for carregada, como por exemplo novos campos de input, fará com que esses campos não sejam capturados pelo listener.

- A solução é tratar o evento conforme presente na função `toggleDone`

## Dia 16 - CSS Text Shadow Mouse Move Effect

- A função `shadow()` é disparada ao mover do mouse, e captura a posição do mouse na tela no eixo X,Y.

- A função possui uma condição de que só serão atribuidos os valores dessa posição se o `e.target` for diferente de `this` (que nesse caso é a div hero).

- A atribuição dentro da condição foi realizada utilizando __desestruturação__ [link MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Atribuicao_via_desestruturacao).

Nesse caso, temos:

`const { offsetWidth: width, offsetHeight: height } = hero` substituindo:

`const width = hero.offsetWidth`
`const height = hero.offsetHeight`

Ou seja, as variáveis *width* e *height* foram declaradas e já recebem o valor dos offset's de hero, diretamente.

O mesmo foi utilizado na declaração das variáveis *x* e *y* que receberam os offset's de `e.target`.

- Para definir a posição da sombra, foram declaradas as variáveis `xWalk` e `yWalk` que recebem o valor do calculo da posição.

- __CSS__: Podem ser atribuidas mais de uma sombra a um elemento.  

## Dia 17 - Sorting Band Names without articles

- A função `strip()` utiliza __regex__ para remover os artigos *A, The, An*, para que eles não influenciem na ordenação.

- Na expressão regex, deve ser colocado o espaço entre os artigos e a palavra seguinte, como no caso foi `a |the |an `.

- `.trim()` remove espaços em branco no início e no fim das strings.

- Como o nome da atividade diz, foi utilizado `.sort()` para ordenar os elementos do array, e mesmo se tratando de strings, a ordenação pode ser realizada com a comparação `a > b`.

- Quando um array é convertido em string, o separador de valores(,) é convertido em string também, então utilizamos `.join('')` para remover o separador.

## Dia 18 - Tally String Times with Reduce

- Métodos como `map()` podem não funcionar em arrays de elementos da DOM, por isso, utilizam-se __spreads__`[...]` ou o método `Array.from()` no document.querySelectorAll. __ex:__ `[... document.querySelectorAll('a')]`

- O array foi modelado 2x com `.map()` para que pudesse chegar aos valores separados de minuto e segundo.

- Foi utilizado `reduce()` para obter a quantidade total de segundos.

- Utilizou-se o __mod__ `%` para calcular os segundos restantes de cada etapa (hora e minuto).

## Dia 19 - Unreal Webcam Fun

- Para a utilização do recurso da webcam, é necessário rodar o __node__.

- A função `getVideo()` é a responsável por solicitar o uso da webcam e possui uma promise que espera a resposta da solicitação.

- A função `paintToCanvas()` exibe a imagem capturada na tela.


## Dia 20 - Reconhecimento de texto por voz

- O código está idêntico ao do vídeo, mas por algum motivo o Firefox não reconhece o `SpeechRecognition`.

- Funcionou perfeitamente no Chrome

- `SpeechRecognition` é uma interface da API Web Speech que faz o reconhecimento da fala.

- Podemos definir qual o __idioma__ que deverá ser reconhecido, através do atributo `.lang`, conforme utilizado em `recognition.lang = 'pt-BR'`.

- A cada pausa na fala, uma nova linha é iniciada.

- Podemos também subistiuir texto por outra coisa através do atributo `.replace`

## Dia 21 - Geolocation based Speedometer and Compass

Este tópico será refeito devido problema na execução.

## Dia 22 - Follow Along Links

Adiciona um "marcador" que aparece quando o mouse é posicionado sobre um link.

- O método `.getBoundingClientRect()` retorna a posição e o tamanho do elemento na tela (viewport)

- A rolagem da tela deve ser compensada, pois a posição do elemento é definida pelas coordenadas iniciais da tela, por isso utilizou-se `linkCoords.left + window.scrollX` para compensar o deslocamento horizontal e `linkCoords.top + window.scrollY` para o vertical.

## Dia 23 - Sintetização de voz e leitura de textos

- `.SpeechSynthesisUtterance()` é o método responsável por carregar a lista de linguagens suportadas.

- Funcionou apenas no google chrome. No firefox, não reconhecia o método.