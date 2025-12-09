// 1. Отримуємо посилання на елементи DOM
const inputField = document.getElementById('secretInput');
const toggleButton = document.getElementById('toggleBtn');

// Зберігаємо стан (видимий чи прихований). Початковий стан - видимий (false)
let isHidden = false; 

/**
 * Обробник події, який перемикає тип поля введення та назву кнопки.
 */
function handleToggle() {
    // 2. Інвертуємо поточний стан
    isHidden = !isHidden; 

    if (isHidden) {
        // Зміна типу поля введення на 'password'
        // Введена інформація стає зірочками
        inputField.type = 'password'; 
        
        // Зміна кнопки
        toggleButton.textContent = 'Розкрити';
        // Додаємо клас або атрибут для стилізації, якщо потрібно
        toggleButton.setAttribute('data-state', 'hidden'); 
        
    } else {
        // Зміна типу поля введення назад на 'text'
        inputField.type = 'text'; // Введена інформація стає видимою

        // Зміна кнопки
        toggleButton.textContent = 'Приховати';
        toggleButton.removeAttribute('data-state'); 
    }
    
    // Щоб зберегти фокус на полі після зміни типу
    inputField.focus(); 
}

// 3. Встановлюємо слухач події кліку на кнопку
toggleButton.addEventListener('click', handleToggle);

console.log("Скрипт завантажено. Тепер приховується лише вміст поля введення.");