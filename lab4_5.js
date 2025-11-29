
// 1. Оголошення функції makeTransaction

function makeTransaction(quantity, pricePerDroid, customerCredits) {
    // 1.1. Оголошуємо та обчислюємо загальну суму замовлення
    const totalPrice = quantity * pricePerDroid;

    // 1.2. Додаємо перевірку, чи зможе клієнт оплатити замовлення
    if (totalPrice > customerCredits) {
        // Якщо сума до сплати перевищує кількість кредитів
        return "Insufficient funds!";
    } else {
        // В іншому випадку
        // Використовуємо шаблонний рядок для формування повідомлення
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    }
}


// 2. Логіка обробки форми
document.addEventListener('DOMContentLoaded', () => {
    // Отримуємо посилання на HTML-елементи
    const quantityInput = document.getElementById('quantity');
    const pricePerDroidInput = document.getElementById('pricePerDroid');
    const customerCreditsInput = document.getElementById('customerCredits');
    const makeTransactionButton = document.getElementById('makeTransactionButton');
    const resultsContainer = document.getElementById('results-container');

    // Обробник події натискання кнопки
    makeTransactionButton.addEventListener('click', () => {
        // Зчитуємо та перетворюємо значення на число
        const quantity = parseInt(quantityInput.value);
        const pricePerDroid = parseFloat(pricePerDroidInput.value);
        const customerCredits = parseFloat(customerCreditsInput.value);

        // Валідація введених даних
        if (isNaN(quantity) || isNaN(pricePerDroid) || isNaN(customerCredits) || quantity < 0 || pricePerDroid < 0 || customerCredits < 0) {
            resultsContainer.textContent = "Помилка: Будь ласка, введіть коректні числові дані.";
            resultsContainer.style.color = '#dc3545'; 
            return;
        }

        // Викликаємо функцію з отриманими параметрами
        const transactionMessage = makeTransaction(quantity, pricePerDroid, customerCredits);

        // Виводимо результат у консоль
        console.log("--- Результат транзакції ---");
        console.log(transactionMessage);
        
        // Виводимо результат на сторінку
        resultsContainer.textContent = transactionMessage;
        
        // Встановлюємо колір результату
        if (transactionMessage === "Insufficient funds!") {
            resultsContainer.style.color = '#dc3545'; // Червоний для помилки
        } else {
            resultsContainer.style.color = '#28a745'; // Зелений для успіху
        }
    });
});