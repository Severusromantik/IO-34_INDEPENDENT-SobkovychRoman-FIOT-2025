/**
 * Функція для аналізу структури категорій та виведення результатів у консоль.
 */
function analyzeCategories() {
    
    // 1. Отримуємо колекцію всіх елементів li.item (всіх категорій)
    // document.querySelectorAll повертає NodeList, який підтримує forEach
    const categoryItems = document.querySelectorAll('#categories > .item');

    // 2. Рахуємо та виводимо загальну кількість категорій
    console.log("-----------------------------------------");
    console.log(`Number of categories: ${categoryItems.length}`);
    console.log("-----------------------------------------");

    // 3. Ітеруємо по кожній категорії li.item
    categoryItems.forEach(item => {
        
        // 3.1. Знаходимо заголовок (<h2>) всередині поточного елемента li.item
        // Використовуємо querySelector, щоб знайти елемент лише в межах поточного 'item'
        const titleElement = item.querySelector('h2');
        const categoryName = titleElement ? titleElement.textContent : 'No Title';
        
        // 3.2. Знаходимо всі вкладені елементи <li>
        // Використовуємо querySelectorAll, щоб знайти всі <li>, які є частиною цієї категорії
        const elementsList = item.querySelectorAll('li');
        const elementCount = elementsList.length;

        // 3.3. Виводимо результат для поточної категорії
        console.log(`Category: ${categoryName}`);
        console.log(`Elements: ${elementCount}`);
    });
    
    console.log("-----------------------------------------");
}

// Запускаємо функцію після завантаження DOM
document.addEventListener('DOMContentLoaded', analyzeCategories);