/**
 * Перевіряє правильність закриття дужок: (), {} та [].
 * Використовує структуру даних Стек (Stack).
 * * @param {string} str - Рядок коду для перевірки.
 * @returns {boolean} true, якщо дужки коректно збалансовані, інакше false.
 */
const checkBrackets = (str) => {
    // 1. Ініціалізація Стека (використовуємо масив як Стек)
    const stack = []; 
    
    // 2. Визначення пар дужок для швидкої перевірки
    const map = {
        '(': ')',
        '{': '}',
        '[': ']',
    };

    // 3. Ітерація по кожному символу рядка
    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        // 3.1. Якщо символ є ВІДКРИВАЮЧОЮ дужкою
        if (map.hasOwnProperty(char)) {
            // Додаємо його до Стека (push)
            stack.push(char);
        } 
        
        // 3.2. Якщо символ є ЗАКРИВАЮЧОЮ дужкою
        else if (Object.values(map).includes(char)) {
            // Перевіряємо, чи Стек порожній. 
            if (stack.length === 0) {
                return false; // Помилка: немає відповідної відкритої дужки
            }
            
            // Дістаємо останню відкриту дужку зі Стека (pop)
            const lastOpenBracket = stack.pop(); 
            
            // Перевіряємо, чи дістана відкрита дужка відповідає поточній закритій дужці
            if (map[lastOpenBracket] !== char) {
                return false; // Помилка: неправильний тип закритої дужки
            }
        }
        
    }

    // 4. Фінальна перевірка
    // Якщо Стек порожній, це означає, що всі відкриті дужки були коректно закриті.
    // Якщо Стек не порожній, деякі відкриті дужки залишилися незакритими.
    return stack.length === 0;
};


console.log("--- Перевірка коректних рядків ---");
console.log(`({})[]: ${checkBrackets("({})[]")}`);         
console.log(`(a + b) * {c[d]}: ${checkBrackets("(a + b) * {c[d]}")}`); 
console.log(`function fn() { return true; }: ${checkBrackets("function fn() { return true; }")}`);
console.log(`[]{}(): ${checkBrackets("[]{}(())")}`);        


console.log("\n--- Перевірка некоректних рядків ---");
console.log(`([]: ${checkBrackets("([]")}`);             
console.log(`{[)}: ${checkBrackets("{[)}")}`);           
console.log(`))}: ${checkBrackets("))")}`);             
console.log(`{}: ${checkBrackets("{")}`);                
console.log(`[a]b(c{d}: ${checkBrackets("[a]b(c{d")}`);  