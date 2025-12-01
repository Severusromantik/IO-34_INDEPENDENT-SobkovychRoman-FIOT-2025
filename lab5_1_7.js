/**
 * Клас Client для створення об'єктів з приватними властивостями #login та #email.
 * Доступ та зміна цих властивостей можливі лише через публічні геттери та сеттери.
 */
class Client {
    // 1. Оголошення приватних полів (private class fields)
    #login;
    #email;

    /**
     * Конструктор класу Client
     * @param {string} login - Вхідний логін
     * @param {string} email - Вхідний email
     */
    constructor(login, email) {
        // Використовуємо сеттери для ініціалізації, щоб скористатися логікою валідації (якщо вона є)
        this.login = login; 
        this.email = email;
        console.log(`Створено нового клієнта: ${this.#login}`);
    }

    // 2. Геттер для доступу до приватного поля #login
    get login() {
        // Повертає значення приватного поля
        return this.#login; 
    }

    // 3. Сеттер для зміни приватного поля #login
    set login(newLogin) {
        // Можна додати логіку валідації, наприклад, перевірку на порожній рядок
        if (typeof newLogin === 'string' && newLogin.trim() !== '') {
            this.#login = newLogin.trim();
        } else {
            console.error("Помилка: Логін має бути непорожнім рядком.");
        }
    }

    // 4. Геттер для доступу до приватного поля #email
    get email() {
        return this.#email;
    }

    // 5. Сеттер для зміни приватного поля #email
    set email(newEmail) {
        // Приклад простої валідації формату email
        if (typeof newEmail === 'string' && newEmail.includes('@') && newEmail.trim() !== '') {
            this.#email = newEmail.trim();
        } else {
            console.error("Помилка: Email має бути коректним.");
        }
    }

    /**
     * Публічний метод для демонстрації роботи
     */
    getClientInfo() {
        return `Логін: ${this.#login}, Email: ${this.#email}`;
    }
}

// ----------------------------------------------------------------------
// Приклади використання
// ----------------------------------------------------------------------

const user1 = new Client("user_ivan", "ivan@example.com");

console.log("\n--- Інформація про Клієнта 1 (через публічний метод) ---");
console.log(user1.getClientInfo());

console.log("\n--- Доступ до властивостей через Геттери ---");
console.log(`Логін: ${user1.login}`); // Викликає геттер login()
console.log(`Email: ${user1.email}`); // Викликає геттер email()

console.log("\n--- Зміна властивостей через Сеттери ---");
user1.login = "new_ivan_login"; // Викликає сеттер login(newLogin)
user1.email = "ivan.new@corp.com"; // Викликає сеттер email(newEmail)

console.log(`Новий логін (після зміни): ${user1.login}`);
console.log(`Новий email (після зміни): ${user1.email}`);

