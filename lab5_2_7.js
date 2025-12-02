/**
 * Клас Calculator, який дозволяє виконувати послідовні арифметичні
 * операції над числом
 */
class Calculator {
    // Приватне поле для зберігання поточного результату
    #result = 0;

    /**
     * Конструктор. Ініціалізує результат нулем.
     */
    constructor() {
        this.#result = 0;
    }

    /**
     * Встановлює початкове значення для обчислень.
     */
    number(value) {
        if (typeof value !== 'number') {
            throw new Error("Значення має бути числом.");
        }
        this.#result = value;
        return this;
    }

    /**
     * Додає value до поточного значення.
     */
    add(value) {
        if (typeof value !== 'number') {
            throw new Error("Значення має бути числом.");
        }
        this.#result += value;
        return this;
    }

    /**
     * Віднімає value від поточного значення.
     */
    subtract(value) {
        if (typeof value !== 'number') {
            throw new Error("Значення має бути числом.");
        }
        this.#result -= value;
        return this;
    }

    /**
     * Множить поточне значення на value.
     */
    multiply(value) {
        if (typeof value !== 'number') {
            throw new Error("Значення має бути числом.");
        }
        this.#result *= value;
        return this;
    }

    /**
     * Ділить поточне значення на value.
     */
    divide(value) {
        if (typeof value !== 'number') {
            throw new Error("Значення має бути числом.");
        }
        if (value === 0) {
            throw new Error("Неможливо виконати ділення на нуль.");
        }
        this.#result /= value;
        return this;
    }

    /**
     * Повертає поточний результат усіх операцій.
     */
    getResult() {
        return this.#result;
    }
}


const calc = new Calculator();

try {
    const result = calc
        .number(10)      // Встановлюємо початкове значення 10
        .add(5)          // Додаємо 5 (15)
        .subtract(3)     // Віднімаємо 3 (12)
        .multiply(4)     // Множимо на 4 (48)
        .divide(2)       // Ділимо на 2 (24)
        .getResult();    // Отримуємо результат

    console.log("Очікуваний результат (24):", result);

    console.log("\n--- Додатковий приклад ---");
    const result2 = new Calculator()
        .number(100)
        .divide(20)      // 5
        .subtract(10)    // -5
        .getResult();
        
    console.log("Додатковий результат (-5):", result2);

    console.log("\n--- Приклад ділення на нуль ---");
    new Calculator().number(10).divide(0);
} catch (error) {
    console.error(`[Перехоплена помилка]: ${error.message}`);
}