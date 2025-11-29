// 1. Оголошення функції getShippingMessage

function getShippingMessage(country, price, deliveryFee) {
    // 1.1. Обчислення загальної вартості замовлення
    // Важливо: price і deliveryFee вже є числами завдяки parseInt/parseFloat
    const totalPrice = price + deliveryFee;

    // 1.2. Формування повідомлення за допомогою шаблонного рядка
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}

// 2. Логіка обробки натискання кнопки
document.addEventListener('DOMContentLoaded', () => {
    // Отримуємо посилання на HTML-елементи
    const countryInput = document.getElementById('country');
    const priceInput = document.getElementById('price');
    const deliveryFeeInput = document.getElementById('deliveryFee');
    const calculateButton = document.getElementById('calculateButton');
    const resultsContainer = document.getElementById('results-container');

    // Присвоюємо обробник події натискання кнопки
    calculateButton.addEventListener('click', () => {
        // Зчитуємо значення з полів введення
        const country = countryInput.value.trim();
        const price = parseFloat(priceInput.value); // Перетворюємо на число з плаваючою точкою
        const deliveryFee = parseFloat(deliveryFeeInput.value); // Перетворюємо на число з плаваючою точкою

        // Валідація введених даних
        if (!country || isNaN(price) || isNaN(deliveryFee) || price < 0 || deliveryFee < 0) {
            resultsContainer.textContent = "Помилка: Будь ласка, введіть коректні дані для всіх полів.";
            resultsContainer.style.color = 'red';
            console.error("Некоректні вхідні дані.");
            return; 
        }
        
        // Викликаємо функцію з отриманими параметрами
        const shippingMessage = getShippingMessage(country, price, deliveryFee);

        // Виводимо результат у консоль та на сторінку
        console.log("--- Результат розрахунку ---");
        console.log(shippingMessage);
        
        resultsContainer.textContent = shippingMessage;
        resultsContainer.style.color = '#343a40'; // Повертаємо нормальний колір
    });
});