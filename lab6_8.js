// Отримуємо посилання на форму
const loginForm = document.querySelector('.login-form');

/**
 * Обробник події відправлення (submit) форми.
 * @param {Event} event - Об'єкт події.
 */
function handleFormSubmit(event) {
    
    // 1. Запобігаємо перезавантаженню сторінки (стандартна поведінка submit)
    event.preventDefault();

    // 2. Використовуємо властивість elements для доступу до полів
    const formElements = event.currentTarget.elements;
    
    // Змінна для збору даних
    const data = {};
    
    let isFormValid = true;

    // 3. Перевірка на незаповнені поля та збір даних
    for (const element of formElements) {
        
        // Перевіряємо, чи є елемент полем введення (input)
        if (element.tagName === 'INPUT') {
            
            const value = element.value.trim();
            
            // Якщо поле пусте, позначаємо форму як невалідовану
            if (value === '') {
                isFormValid = false;
                break; 
            }
            
            // Збираємо дані: ключ - name, значення - очищене value
            data[element.name] = value;
        }
    }

    // 4. Валідація та подальші дії
    if (!isFormValid) {
        alert('All form fields must be filled in');
        
    } else {     
        // Виводимо об'єкт з даними в консоль
        console.log("--- Форма відправлена успішно ---");
        console.log(data);
        console.log("---------------------------------");
        
        // Очищаємо значення полів форми
        event.currentTarget.reset();
    }
}

// 5. Обробка відправлення форми за подією submit
loginForm.addEventListener('submit', handleFormSubmit);

console.log("Скрипт управління формою логіна завантажено.");