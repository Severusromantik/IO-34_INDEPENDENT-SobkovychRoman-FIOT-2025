// --- Допоміжна функція для виводу масиву в консоль ---
function printArrayToConsole(label, arr) {
    console.log(`\n--- ${label} ---`);
    arr.forEach((element, index) => {
        if (Array.isArray(element)) {
            // Якщо елемент є масивом (це рядок матриці), використовуємо join()
            console.log(`Елемент ${index} (Рядок): [${element.join(', ')}]`);
        } else {
            // Якщо елемент не є масивом (це вставлене число 25), виводимо його без join()
            console.log(`Елемент ${index} (Число): ${element}`);
        }
    });
}

// 1. Оголошення та ініціалізація двовимірного масиву
const ROWS = 3;
const COLS = 3;
const MIN_VAL = -50; // Для від'ємних чисел
const MAX_VAL = 50;  // Для додатніх чисел

let twoDArray = [];

for (let i = 0; i < ROWS; i++) {
    let row = [];
    for (let j = 0; j < COLS; j++) {
        // Генерація псевдовипадкових чисел (від -50 до 50)
        const randomValue = Math.floor(Math.random() * (MAX_VAL - MIN_VAL + 1)) + MIN_VAL;
        row.push(randomValue);
    }
    twoDArray.push(row);
}

// Вивід початкового масиву
printArrayToConsole("Початковий двовимірний масив", twoDArray);

// --- Завдання 1: Зберегти перший і останній елементи ---
// Перший елемент масиву: twoDArray[0][0]
const firstElement = twoDArray[0][0];

// Останній елемент масиву: twoDArray[ROWS-1][COLS-1]
const lastElement = twoDArray[ROWS - 1][COLS - 1];

console.log("\n--- Збереження елементів ---");
console.log(`Перший елемент: ${firstElement} (twoDArray[0][0])`);
console.log(`Останній елемент: ${lastElement} (twoDArray[${ROWS - 1}][${COLS - 1}])`);


// --- Завдання 2: Вставити 25 після другого елемента масиву ---
// Вставляємо '25' після елемента з індексом 1, тобто на позицію 2.
const VALUE_TO_INSERT = 25;
twoDArray.splice(2, 0, VALUE_TO_INSERT); 


// Вивід масиву після вставки
printArrayToConsole(`Масив після вставки ${VALUE_TO_INSERT} після другого елемента (на індекс 2)`, twoDArray);

// Демонстрація, що вставлений елемент тепер - це число, а не масив-рядок
console.log("\n--- Перевірка вставленого елемента ---");
console.log(`Елемент на індексі 2: ${twoDArray[2]}`);
console.log(`Тип елемента на індексі 2: ${typeof twoDArray[2]}`);