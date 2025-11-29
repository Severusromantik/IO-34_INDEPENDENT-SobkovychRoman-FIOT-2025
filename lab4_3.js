// 1. Оголошення та ініціалізація користувачів і паролів
const users = {
    "User1": "pass1",
    "User2": "pass2",
    "User3": "pass3"
};

let username = null; 
let password = null; 
let greeting = ''; 
const maxAttempts = 3; 
let loginAttempts = 0;

// Функція для приведення рядка до стандартного вигляду (обрізання пробілів)
const sanitizeInput = (input) => {
    return input ? input.trim() : input;
};


// Цикл запитів
while (username === null || username === '' && loginAttempts < maxAttempts) {
    username = prompt(`Введіть логін (User1, User2 або User3) - Спроба ${loginAttempts + 1}/${maxAttempts}:`);
    username = sanitizeInput(username); // Обрізаємо пробіли

    if (username === null) {
        // Якщо натиснуто Cancel
        greeting = 'Введення скасовано. Будь ласка, оновіть сторінку.';
        break; 
    }

    if (username === '') {
        // Якщо введено порожній рядок
        loginAttempts++;
        alert("Порожнє введення. Будь ласка, введіть логін.");
    } else if (users.hasOwnProperty(username)) {
        // Якщо логін знайдено, виходимо з циклу для запиту пароля
        break;
    } else {
        // Якщо логін не знайдено
        alert("Логін не знайдено. Спробуйте ще раз.");
        loginAttempts++;
    }

    if (loginAttempts >= maxAttempts) {
        greeting = "Перевищено максимальну кількість спроб введення логіну. I don't know you";
        username = null; 
        break;
    }
}

// 2. Перевірка пароля та фінальний результат
if (users.hasOwnProperty(username)) {
    // Логін знайдено, запитуємо пароль
    let passwordAttempts = 0;
    const maxPasswordAttempts = 3;
    let isAuthenticated = false;

    while (passwordAttempts < maxPasswordAttempts) {
        password = prompt(`Введіть пароль для користувача ${username}: - Спроба ${passwordAttempts + 1}/${maxPasswordAttempts}:`);
        password = sanitizeInput(password);

        if (password === null) {
            greeting = 'Введення пароля скасовано. Будь ласка, оновіть сторінку.';
            break;
        }

        if (password === users[username]) {
            // Пароль співпадає
            greeting = `Hello, ${username}`;
            isAuthenticated = true;
            break;
        } else {
            // Пароль не співпадає
            passwordAttempts++;
            alert("Невірний пароль. Спробуйте ще раз.");
        }
    }

    if (!isAuthenticated && passwordAttempts >= maxPasswordAttempts) {
        greeting = "Перевищено максимальну кількість спроб введення пароля. I don't know you";
    } else if (!isAuthenticated && password !== null) {
         // Якщо користувач натиснув Cancel при вводі пароля
         // greeting вже встановлено вище
    } else if (!isAuthenticated && username !== null) {
        // Забезпечення виводу "I don't know you" у випадку, якщо логін знайдено, але пароль не пройшов перевірку і не було Cancel
        greeting = greeting || "I don't know you";
    }
} else if (username !== null && username !== '' && !greeting) {
    // Цей блок спрацює, якщо логін не знайдено і не було Cancel, і не було перевищено спроби
    greeting = "I don't know you (Недійсний логін).";
}


// 3. Вивід результату
console.log(`--- Результат Автентифікації ---`);
console.log(`Введений логін: ${username || 'Нічого не введено/Скасовано'}`);
console.log(`Фінальне повідомлення: ${greeting}`);

// Вивід фінального повідомлення через alert
alert(greeting);