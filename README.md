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