// 1. Отримуємо посилання на елементи DOM
const inputField = document.getElementById('dataInput');
const showButton = document.getElementById('showMeBtn');

/**
 * Обробник події кліку.
 * Витягує значення з поля введення та логує його в консоль.
 */
function handleShowMeClick() {
    // 2. Отримуємо поточне значення з поля введення
    const inputValue = inputField.value;

    // 3. Виводимо значення у консоль
    console.log("-----------------------------------------");
    console.log("Значення з поля введення:");
    console.log(inputValue);
    console.log("-----------------------------------------");

}

// 4. Встановлюємо слухач події (Event Listener) на кнопку
showButton.addEventListener('click', handleShowMeClick);

console.log("Скрипт завантажено. Введіть текст і натисніть кнопку.");