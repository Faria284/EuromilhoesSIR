document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('genKey');

    // Adiciona eventos ao botão
    button.addEventListener('click', geneNewBet);
});

// Função para gerar números aleatórios
function genRandomNumbers(count, min, max) {
    const numbers = new Set();
    while (numbers.size < count) {
        numbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return Array.from(numbers);
}

//------------------------------JSON--------------------------------//
function genJSONBet(){
    let numbers = genRandomNumbers(5, 1, 50);
    let stars = genRandomNumbers(2, 1, 12);

    let newBet = {
        timeStamp: new Date(),
        numbers: numbers,
        stars: stars
    }

    console.log(newBet);
    return newBet;  // Retorna o objeto diretamente
}

function geneNewBet(){
    let bet = genJSONBet(); // Não precisa converter em JSON

    console.log(bet);

    // Acessa os números e estrelas do objeto bet
    const numbers = bet.numbers; 
    const stars = bet.stars; 

    // Atualiza a exibição dos números
    const theOlNumbers = document.querySelector('.bet.numbers');
    if (theOlNumbers) {
        theOlNumbers.innerHTML = ""; // Limpar conteúdo anterior
        numbers.forEach(number => {
            const li = document.createElement('li');
            li.textContent = number;
            li.classList.add('number');
            theOlNumbers.appendChild(li);
        });
    } else {
        console.error('Elemento .bet.numbers não encontrado'); // Outro Log
    }

    // Atualiza a exibição das estrelas
    const theOlStars = document.querySelector('.bet.stars');
    if (theOlStars) {
        theOlStars.innerHTML = ""; // Limpar conteúdo anterior
        stars.forEach(star => {
            const li = document.createElement('li');
            li.textContent = star;
            li.classList.add('star');
            theOlStars.appendChild(li);
        });
    } else {
        console.error('Elemento .bet.stars não encontrado'); // Outro Log
    }
}
