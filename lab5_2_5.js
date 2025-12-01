/**
 * Функція сортує масив рядків у порядку алфавіту (лексикографічно).
 * Метод sort() модифікує оригінальний масив.
 * @param {Array<string>} arr - Масив рядків.
 * @returns {Array<string>} Відсортований масив.
 */
const sortStringsAlphabetically = (arr) => {
    // Метод sort() без функції порівняння сортує рядки за алфавітом.
    arr.sort();
    return arr;
};

// Вхідний масив
const stringArray = ['banana', 'orange', 'apple', 'pear'];

console.log("--- Оригінальний масив ---");
console.log(stringArray);

// Викликаємо функцію. Зверніть увагу, що stringArray буде змінено.
const sortedArray = sortStringsAlphabetically(stringArray);

console.log("\n--- Відсортований масив ---");
console.log(sortedArray); 

// Очікуваний результат: ["apple", "banana", "orange", "pear"]