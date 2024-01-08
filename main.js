const sentenceElement = document.getElementById('sentence');
const bart = document.getElementById('bart');
const confirmButton = document.getElementById('confirm');
const passButton = document.getElementById('pass');
const firstQuestionContainer = document.querySelector('.first-question');
const ciucciati = document.getElementById('ciucciati');
const secondQuestionContainer = document.querySelector('.second-question');
const numberElement = document.getElementById('number');
const pizza = document.getElementById('pizza');
const blackboard = document.querySelector('.blackboard');


passButton.addEventListener('click', function() {
    firstQuestionContainer.classList.add('d-none');
    secondQuestionContainer.classList.remove('d-none');
    passButton.classList.add('d-none');
    confirmButton.classList.remove('d-none')
});


confirmButton.addEventListener('click', function(){
    const sentence = sentenceElement.value.trim();
    let hasError = false;
    console.log(sentence);
    const number = parseInt(numberElement.value);
    console.log(number);

    if (!sentence || isNaN(number) || number === 0) {
        hasError = true;
    }
    
    if (hasError) {
        firstQuestionContainer.classList.add('d-none');
        secondQuestionContainer.classList.add('d-none');
        pizza.classList.add('d-none');
        confirmButton.classList.add('d-none');
        passButton.classList.add('d-none');
        ciucciati.classList.remove('d-none');
        return;
    }  
    

    
    secondQuestionContainer.classList.add('d-none');
    confirmButton.classList.add('d-none');
    pizza.classList.remove('d-none');

    for (let i = 0; i < number; i++){
        let text = document.createElement('span')
        text.append(sentence);
        blackboard.appendChild(text);
        
    }

});


bart.addEventListener('click', function(){
    firstQuestionContainer.classList.remove('d-none');
    passButton.classList.remove('d-none');
    secondQuestionContainer.classList.add('d-none');
    ciucciati.classList.add('d-none');
    pizza.classList.add('d-none');
    sentenceElement.value = '';
    numberElement.value = '';
    blackboard.innerHTML = ''
});

