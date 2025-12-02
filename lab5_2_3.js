const checkAllEven = (arr) => {
    // Використовуємо метод every() для перевірки всіх елементів.
    const isEveryElementEven = arr.every(number => {
        return number % 2 === 0;
    });

    return isEveryElementEven;
};

// Вхідний масив
const numbers = [2, 4, 6, 8, 10];

console.log("--- Оригінальний масив ---");
console.log(numbers);

// Викликаємо функцію
const result = checkAllEven(numbers);

console.log("\n--- Результат перевірки: чи є кожен елемент парним? ---");
console.log(result); 

// Приклад з непарним числом для демонстрації false
const mixedNumbers = [2, 4, 7, 8, 10];
const mixedResult = checkAllEven(mixedNumbers);
console.log(`\nПеревірка масиву [2, 4, 7, 8, 10]: ${mixedResult}`);