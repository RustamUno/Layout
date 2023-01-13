//Игра времена года
let getMonth = (question) => {
    const month = ['Зима', 'Лето', 'Весна', 'Осень'];
    if (question === '12' || question === '1' || question === '2') {
        alert('Зима');
    } else if (question === '3' || question === '4' || question === '5') {
        alert('Весна');
    } else if (question === '6' || question === '7' || question === '8') {
        alert('Лето');
    } else if (question === '9' || question === '10' || question === '11') {
        alert('Осень');
    } else {
        alert('Неопознанные данные');
    }
}

// Игра запомни слова
let getArray = () => {
    let array = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    array = array.sort(() => Math.random() - 0.5);
    alert(array);
    let element = 0;
    for (let i = 0; i < array.length; i++) {
        element = array[i];
        let questionOne = prompt('Чему равнялся первый элемент массива?');
        let questionTwo = prompt('Чему равнялся последний элемент массива?');
        if (questionOne === element && questionTwo === array[array.length - 1]) {
            alert('Вы правы. Молодец!');
            break;
        } else if (questionOne === element || questionTwo === array[array.length - 1]) {
            alert('Вы были близко!');
            break;
        } else {
            alert('Вы ответили не верно.');
            break;
        }
    }
}

// Курсовая работа.
//Игра в загадку
let showAnswer = (ques, ans, help) => {
    let counts = 3;
    if (ques === ans[0] || ques === ans[1]) {
        alert('Вы угадали, поздравляю!');
    } else {
        counts--;
        ques = prompt(`Неверно. У Вас осталось ${counts}.
        Подсказка: ${help[0]}`).toLowerCase();
        if (ques === ans[0] || ques === ans[1]) {
            alert('Вы угадали, поздравляю!');
        } else {
            counts--;
            ques = prompt(`Осталось ${counts} попытки.
            Подсказка: ${help[1]}`).toLowerCase();
            if (ques === ans[0] || ques === ans[1]) {
                alert('Вы угадали, наконец, поздравляю!');
            } else {
                counts--;
                alert('Ничего, в следующий раз вспомните');
            }
        }
    }
}
