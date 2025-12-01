/**
 * Функція, яка об'єднує масиви 'values' з масиву об'єктів в один плоский масив.
 * Використовує метод flatMap().
 * @param {Array<Object>} dataArray - Масив об'єктів, кожен з яких містить властивість values.
 * @returns {Array<number>} Єдиний масив усіх значень.
 */
const flattenValues = (dataArray) => {
    // flatMap() спочатку викликає функцію відображення (map) для кожного елемента,
    // а потім згладжує результат на один рівень.
    const allValues = dataArray.flatMap(item => {
        // Для кожного об'єкта ми повертаємо масив, що знаходиться у властивості 'values'.
        return item.values;
    });

    return allValues;
};

// Вхідний масив об'єктів
const data = [
    { id: 1, values: [1, 2, 3] },
    { id: 2, values: [4, 5, 6] },
    { id: 3, values: [7, 8, 9] },
];

console.log("--- Оригінальний масив об'єктів ---");
console.log(data);

// Викликаємо функцію та отримуємо результат
const result = flattenValues(data);

console.log("\n--- Згладжений масив значень ---");
console.log(result); 

// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Альтернативний спосіб без flatMap (для сумісності зі старими браузерами):
// const resultAlternative = data.map(item => item.values).flat();
// console.log("\n--- Альтернативний спосіб (map().flat()) ---");
// console.log(resultAlternative);