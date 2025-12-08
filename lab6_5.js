// 1. Отримуємо посилання на елемент, який потрібно перевірити
const placeElement = document.getElementById('place');

/**
 * Обробник події кліку на глобальному об'єкті window.
 * * @param {Event} event - Об'єкт події.
 */
function handleWindowClick(event) {
    // 2. Використовуємо метод contains()
    // event.target — це елемент, на який безпосередньо було здійснено клік.
    // placeElement.contains(event.target) перевіряє:
    // чи є placeElement предком елемента, на який клікнули, 
    // або чи є він сам цим елементом.
    const isClickedInside = placeElement.contains(event.target);

    // 3. Виведення результату в консоль згідно з умовою
    console.log(`Клік всередині зеленого прямокутника? ${isClickedInside}`);
    
    // Додатково: логуємо елемент, на який клікнули, для повноти
    console.log(`Елемент, на який клікнули: ${event.target.tagName} (ID: ${event.target.id || 'N/A'})`);
    console.log("-----------------------------------------");
}

// 4. Додаємо слухач кліку на window.
// Це реалізує делегування подій на найвищому рівні.
window.addEventListener('click', handleWindowClick);

console.log("Скрипт завантажено. Клікайте де завгодно на сторінці.");