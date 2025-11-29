// --- 1. Функція генерації масиву ---
function generateArray(size) {
    const arr = [];
    const MIN_VAL = 1;
    const MAX_VAL = 100;
    
    for (let i = 0; i < size; i++) {
        // Генеруємо випадкове ціле число від MIN_VAL до MAX_VAL
        arr.push(Math.floor(Math.random() * (MAX_VAL - MIN_VAL + 1)) + MIN_VAL);
    }
    return arr;
}


// --- 2. Функція переміщення мінімального елемента на початок ---
function moveMinToStart(arr) {
    if (arr.length === 0) {
        return arr;
    }

    // 2.1. Знаходимо мінімальний елемент та його індекс
    let minVal = arr[0];
    let minIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minVal) {
            minVal = arr[i];
            minIndex = i;
        }
    }

    // 2.2. Якщо мінімальний елемент вже на початку, повертаємо масив
    if (minIndex === 0) {
        return arr;
    }

    // 2.3. Зсув елементів вправо для звільнення місця на початку
    // Починаємо зсув від minIndex до 1
    for (let i = minIndex; i > 0; i--) {
        arr[i] = arr[i - 1];
    }

    // 2.4. Записуємо мінімальний елемент на початок 
    arr[0] = minVal;

    return arr;
}


// --- 3. Функція сортування методом вибору (за зменшенням) ---
function selectionSortDescending(arr) {
    const n = arr.length;
    // Створюємо копію, щоб не змінювати оригінальний масив безпосередньо
    const sortedArr = [...arr];

    for (let i = 0; i < n - 1; i++) {
        // Знаходимо індекс максимального елемента у підмасиві, що залишився (від i до n-1)
        let maxIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (sortedArr[j] > sortedArr[maxIndex]) {
                maxIndex = j;
            }
        }

        // Міняємо знайдений максимальний елемент місцями з поточним елементом (на позиції i)
        if (maxIndex !== i) {
            [sortedArr[i], sortedArr[maxIndex]] = [sortedArr[maxIndex], sortedArr[i]]; // Обмін
        }
    }
    return sortedArr;
}


// --- 4. Логіка обробки форми ---
document.addEventListener('DOMContentLoaded', () => {
    const arraySizeInput = document.getElementById('arraySize');
    const processArrayButton = document.getElementById('processArrayButton');
    const resultsContainer = document.getElementById('results-container');

    processArrayButton.addEventListener('click', () => {
        const size = parseInt(arraySizeInput.value);

        if (isNaN(size) || size <= 0) {
            resultsContainer.innerHTML = `<p style="color: red;">Помилка: Введіть коректну кількість елементів (число більше 0).</p>`;
            return;
        }

        // 1. Генерація масиву
        let originalArray = generateArray(size);
        // Створюємо копію для першої операції, щоб зберегти originalArray для виводу
        let arrayAfterMinMove = [...originalArray]; 
        
        // 2. Завдання 1: Переміщення мінімуму на початок
        moveMinToStart(arrayAfterMinMove);

        // 3. Завдання 2: Сортування методом вибору (за зменшенням)
        let sortedArray = selectionSortDescending(originalArray);
        
        // --- Вивід у консоль ---
        console.log("--- Завдання 7: Обробка Масиву ---");
        console.log("1. Вхідний масив:", originalArray);
        console.log("2. Масив після переміщення мінімуму на початок:", arrayAfterMinMove);
        console.log("3. Відсортований масив (за зменшенням):", sortedArray);

        // --- Вивід на сторінку ---
        resultsContainer.innerHTML = `
            <h3>Вхідний масив:</h3>
            <p class="array-output"><strong>[${originalArray.join(', ')}]</strong></p>
            
            <hr>
            
            <h3>Завдання 1: Мінімальний елемент на початку</h3>
            <p>Мінімальний елемент знайдено та переміщено на початок масиву, елементи зсунуто вправо:</p>
            <p class="array-output-modified"><strong>[${arrayAfterMinMove.join(', ')}]</strong></p>

            <hr>

            <h3>Завдання 2: Сортування методом вибору (зменшення)</h3>
            <p>Масив упорядковано у порядку зменшення:</p>
            <p class="array-output-sorted"><strong>[${sortedArray.join(', ')}]</strong></p>
        `;
    });
});