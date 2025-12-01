/**
 * Функція для підрахунку кількості кожного тега у масиві твітів.
 * @param {Array<Object>} tweets - Масив об'єктів твітів, кожен з яких має властивість 'tags'.
 * @returns {Object} Об'єкт, де ключі - це назви тегів, а значення - їхня кількість.
 */
const countTags = (tweets) => {
    // Використовуємо reduce() для ітерації по масиву твітів та накопичення результату в об'єкті.
    const tagsCount = tweets.reduce((accumulator, tweet) => {
        
        // Для кожного твіта ітеруємо по його масиву тегів.
        // Це внутрішня ітерація (forEach або for...of).
        tweet.tags.forEach(tag => {
            // Перевіряємо, чи існує цей тег вже у нашому об'єкті-акумуляторі.
            if (accumulator.hasOwnProperty(tag)) {
                // Якщо існує, збільшуємо його лічильник на 1.
                accumulator[tag] += 1;
            } else {
                // Якщо не існує, ініціалізуємо лічильник значенням 1.
                accumulator[tag] = 1;
            }
        });

        // Повертаємо оновлений об'єкт-акумулятор для наступної ітерації.
        return accumulator;
        
    }, {}); // Початкове значення акумулятора - порожній об'єкт {}

    return tagsCount;
};

// Вхідний масив
const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

console.log("--- Оригінальний масив твітів ---");
console.log(tweets);

// Викликаємо функцію та отримуємо результат
const tagFrequencies = countTags(tweets);

console.log("\n--- Об'єкт з кількістю кожного тега ---");
console.log(tagFrequencies); 

// Очікуваний результат: {js: 3, nodejs: 3, html: 2, css: 2, react: 2}