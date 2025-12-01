/**
 * Функція-коллбек: логує об'єкт продукту в консоль.
 * @param {object} product - Об'єкт товару зі властивістю id.
 */
function logProduct(product) {
    console.log("--- Викликано logProduct ---");
    console.log("Створений продукт:", product);
}

/**
 * Функція-коллбек: логує загальну вартість товару (price * quantity).
 * @param {object} product - Об'єкт товару, що має властивості price та quantity.
 */
function logTotalPrice(product) {
    console.log("--- Викликано logTotalPrice ---");
    // Перевіряємо, чи є необхідні властивості для розрахунку
    if (product && typeof product.price === 'number' && typeof product.quantity === 'number') {
        const totalPrice = product.price * product.quantity;
        console.log(`Загальна вартість товару "${product.name || 'Без назви'}": ${totalPrice.toFixed(2)} грн`);
    } else {
        console.log("Помилка: Об'єкт продукту не містить price та/або quantity.");
    }
}

/**
 * Створює об'єкт товару, додаючи унікальний ідентифікатор (id), 
 * і викликає коллбек, передаючи йому створений об'єкт.
 * * @param {object} obj - Об'єкт товару без id.
 * @param {function} callback - Функція, яка буде викликана зі створеним об'єктом.
 */
function createProduct(obj, callback) {
    console.log("Викликано createProduct...");
    
    // Створення унікального ідентифікатора (простий приклад на основі часу)
    const uniqueId = Date.now().toString(36) + Math.random().toString(36).substring(2, 5);
    
    // Створення нового об'єкта товару з доданим id
    const newProduct = {
        ...obj, // Копіюємо всі властивості з вхідного об'єкта
        id: uniqueId // Додаємо унікальний id
    };
    
    // Перевіряємо, чи є коллбек функцією, і викликаємо його
    if (typeof callback === 'function') {
        callback(newProduct);
    } else {
        console.warn("Попередження: Коллбек не є функцією або не був наданий.");
    }
}


// ----------------------------------------------------------------------
// Приклади використання функцій
// ----------------------------------------------------------------------

// 1. Товар для демонстрації logProduct
const productData1 = {
    name: "Ноутбук Dell",
    price: 35000.00,
    quantity: 1,
    category: "Електроніка"
};

console.log("\n*** Приклад 1: Використання logProduct ***");
createProduct(productData1, logProduct);

// 2. Товар для демонстрації logTotalPrice
const productData2 = {
    name: "Ручка гелева",
    price: 15.50,
    quantity: 10,
    category: "Канцтовари"
};

console.log("\n*** Приклад 2: Використання logTotalPrice ***");
createProduct(productData2, logTotalPrice);

// 3. Використання двох коллбеків послідовно
console.log("\n*** Приклад 3: Послідовне використання двох коллбеків ***");
const productData3 = {
    name: "Фарба акрилова",
    price: 120.75,
    quantity: 5
};

// Створимо продукт і передамо коллбек, який викличе обидві функції
createProduct(productData3, (createdProduct) => {
    logProduct(createdProduct);
    logTotalPrice(createdProduct);
});