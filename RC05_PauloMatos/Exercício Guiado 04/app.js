document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');

    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsFound = [];

    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name:'cheeseburger',
            img:'images/cheeseburger.png'
        },
        {
            name:'ice-cream',
            img:'images/ice-cream.png'
        },
        {
            name:'pizza',
            img:'images/pizza.png'
        },
        {
            name:'milkshake',
            img:'images/milkshake.png'
        },
        {
            name:'hotdog',
            img:'images/hotdog.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name:'cheeseburger',
            img:'images/cheeseburger.png'
        },
        {
            name:'ice-cream',
            img:'images/ice-cream.png'
        },
        {
            name:'pizza',
            img:'images/pizza.png'
        },
        {
            name:'milkshake',
            img:'images/milkshake.png'
        },
        {
            name:'hotdog',
            img:'images/hotdog.png'
        }
    ];
    
    function createBoard(){
    cardArray.sort(() => 0.5 - Math.random());
    for (let i = 0; i< cardArray.length; i++)
    {
        var card = document.createElement('img');
        card.setAttribute('src', 'images/card.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }
    }
    function checkForMatch(){
        //imagens das cartas
        var cards = document.querySelectorAll('img');

        //cartas selecionadas
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        //cartas iguais, mesma posição
        if(optionOneId == optionTwoId)
        {
            cards[optionOneId].setAttribute('src', 'images/card.png');
            cards[optionTwoId].setAttribute('src', 'images/card.png');
            alert('Carregou na mesma imagem');
        }
        else
        {
            //cartas iguais, posição diferente
            if(cardsChosen[0] === cardsChosen[1])
            {
                alert('Cartas iguais');
                //mostra o espaço em branco
                cards[optionOneId].setAttribute('src', 'images/white.png');
                cards[optionTwoId].setAttribute('src', 'images/white.png');
                //remove o evento das cartas já encontradas
                cards[optionOneId].removeEventListener('click', flipCard);
                cards[optionTwoId].removeEventListener('click', flipCard);
                //adiciona a lista das cartas já encontradas
                cardsFound.push(cardsChosen);
            }
            //as cartas não são iguais
            else
            {
                cards[optionOneId].setAttribute('src', 'images/card.png');
                cards[optionTwoId].setAttribute('src', 'images/card.png');
                alert('As cartas não são compatíveis, tente novamente');
            }
        }
        //limpa as opções
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsFound.length;

        if(cardsFound.length === cardArray.length/2)
        {
            resultDisplay.textContent = 'Parabéns, encontrou todas as cartas';
        }
    }
    function flipCard(){
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);

        //validação da escolha
        if(cardsChosen.length === 2) { setTimeout(checkForMatch, 100); }
        //o setTimeout foi adicionado para atrasar a validação 100ms
        //para permitir assim ver a segunda carta selecionada
    }
    createBoard();
});


