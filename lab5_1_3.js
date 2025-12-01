// Початковий об'єкт з назвами медикаментів та датами придатності
const medicines = {
    Агалгін: new Date("2022-05-01"),
    Ношпа: new Date("2025-07-02"),
    Альфахолін: new Date("2024-12-21"),
    Аспірин: new Date("2022-08-15"),
    Аспаркам: new Date("2024-04-18"),
};

// Встановлюємо поточну дату для порівняння
// Оскільки ми не можемо гарантувати, коли користувач запустить код, 
// для відтворення результату використовуємо фіксовану дату (Наприклад, 1 грудня 2025 року)
// Якщо потрібно використовувати актуальну поточну дату, замість цього використовуйте new Date()
const currentDate = new Date("2025-12-01"); 
console.log(`Поточна дата для порівняння: ${currentDate.toLocaleDateString('uk-UA')}`);
console.log("---------------------------------------------------------");

// 1. Отримання масиву ключ-значення та фільтрація
// Використовуємо Object.entries() для перетворення об'єкта на масив пар [назва, дата]
const validMedicines = Object.entries(medicines)
    // 2. Фільтрація: залишаємо лише ті, термін зберігання яких ще не пройшов
    // [name, expiryDate] => expiryDate.getTime() > currentDate.getTime()
    .filter(([name, expiryDate]) => expiryDate.getTime() > currentDate.getTime())
    
    // 3. Сортування: сортуємо за датою придатності у хронологічному порядку (від найближчої до найвіддаленішої)
    // [name1, date1], [name2, date2] => date1 - date2
    .sort(([name1, date1], [name2, date2]) => date1.getTime() - date2.getTime())

    // 4. Мапування: отримуємо масив лише назв препаратів
    // [name, expiryDate] => name
    .map(([name, expiryDate]) => name);

// Виведення результату
console.log("Масив медикаментів з чинним терміном зберігання, відсортований за датою:");
console.log(validMedicines); 

// Додатковий лог для демонстрації, які саме терміни пройшли
const expiredMedicines = Object.entries(medicines)
    .filter(([name, expiryDate]) => expiryDate.getTime() <= currentDate.getTime())
    .map(([name, expiryDate]) => `${name} (Термін до: ${expiryDate.toLocaleDateString('uk-UA')})`);

if (expiredMedicines.length > 0) {
    console.log("\nМедикаменти з простроченим терміном (були відфільтровані):");
    console.log(expiredMedicines);
}