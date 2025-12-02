/**
 * Обробляє масив продуктів, додаючи унікальний ID та застосовуючи знижку 20%.
 * @param {Array<Object>} productsArray - Масив об'єктів товарів, кожен з яких має { name, price }.
 * @returns {Array<Object>} Новий масив об'єктів з властивостями { id, name, price (зі знижкою) }.
 */
const applyDiscountAndAddId = (productsArray) => {
    // Коефіцієнт знижки
    const discountFactor = 0.8;
    
    // Використовуємо map() для перетворення кожного об'єкта в новий масив
    const modifiedProducts = productsArray.map((product, index) => {
        
        // 1. Додаємо унікальний ID. Для простоти використовуємо індекс + 1.
        const uniqueId = index + 1; 
        
        // 2. Обчислюємо нову ціну зі знижкою 20%
        const discountedPrice = product.price * discountFactor;
        
        // 3. Повертаємо новий об'єкт
        return {
            id: uniqueId,
            name: product.name,
            // Округляємо ціну до двох знаків після коми
            price: parseFloat(discountedPrice.toFixed(2)) 
        };
    });
    
    return modifiedProducts;
};

// Вхідний масив
const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
];

console.log("--- Оригінальний масив фруктів ---");
console.log(fruits);

// Викликаємо функцію
const discountedFruits = applyDiscountAndAddId(fruits);

console.log("\n--- Новий масив (ID додано, знижка 20% застосована) ---");
console.log(discountedFruits);
