
// 1. Оголошення функції makeArray
function makeArray(firstArray, secondArray, maxLength) {
    // 1.1. Створення нового масиву шляхом об'єднання двох масивів
    const newArray = firstArray.concat(secondArray);

    // 1.2. Перевірка довжини
    if (newArray.length > maxLength) {
        // Якщо довжина перевищує maxLength, повертаємо копію обрізаного масиву
        // Використовуємо slice(0, maxLength)
        const slicedArray = newArray.slice(0, maxLength);
        
        // Вивід у консоль 
        console.log(`[makeArray] Довжина масиву (${newArray.length}) перевищує maxLength (${maxLength}). Повернуто обрізаний масив: ${slicedArray}`);
        
        return slicedArray;
    } else {
        // В іншому випадку, повертаємо весь новий масив
        
        // Вивід у консоль
        console.log(`[makeArray] Довжина масиву (${newArray.length}) не перевищує maxLength (${maxLength}). Повернуто повний масив: ${newArray}`);
        
        return newArray;
    }
}


// 2. Логіка обробки форми
document.addEventListener('DOMContentLoaded', () => {
    // Отримуємо посилання на HTML-елементи
    const firstArrayInput = document.getElementById('firstArray');
    const secondArrayInput = document.getElementById('secondArray');
    const maxLengthInput = document.getElementById('maxLength');
    const processArrayButton = document.getElementById('processArrayButton');
    const resultsContainer = document.getElementById('results-container');

    // Функція для перетворення рядка на масив (розділення комою та обрізання пробілів)
    const stringToArray = (str) => {
        if (str.trim() === '') return [];
        return str.split(',').map(item => item.trim());
    };

    // Обробник події натискання кнопки
    processArrayButton.addEventListener('click', () => {
        // Зчитуємо та перетворюємо значення
        const firstArray = stringToArray(firstArrayInput.value);
        const secondArray = stringToArray(secondArrayInput.value);
        const maxLength = parseInt(maxLengthInput.value);

        // Валідація введених даних
        if (isNaN(maxLength) || maxLength < 0) {
            resultsContainer.textContent = "Помилка: Максимальна довжина має бути невід'ємним числом.";
            resultsContainer.style.color = '#dc3545';
            return;
        }

        // Викликаємо функцію з отриманими параметрами
        const finalArray = makeArray(firstArray, secondArray, maxLength);

        // Виводимо результат на сторінку
        const totalLength = firstArray.length + secondArray.length;
        
        resultsContainer.innerHTML = `
            <p><strong>Об'єднана довжина:</strong> ${totalLength}</p>
            <p><strong>Максимальна довжина (maxLength):</strong> ${maxLength}</p>
            <p><strong>Фінальний масив:</strong> [${finalArray.join(', ')}]</p>
            <p style="color: ${finalArray.length < totalLength ? '#dc3545' : '#28a745'};">
                ${finalArray.length < totalLength ? 'Масив був обрізаний.' : 'Повернуто повний масив.'}
            </p>
        `;
        resultsContainer.style.color = '#343a40'; // Загальний колір тексту
    });
});