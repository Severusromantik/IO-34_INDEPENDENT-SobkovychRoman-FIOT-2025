// Початковий об'єкт з назвами медикаментів та датами придатності
const medicines = {
    Агалгін: new Date("2022-05-01"),
    Ношпа: new Date("2025-07-02"),
    Альфахолін: new Date("2024-12-21"),
    Аспірин: new Date("2022-08-15"),
    Аспаркам: new Date("2024-04-18"),
};

// Встановлюємо поточну дату для порівняння
console.log(`Поточна дата для порівняння: ${currentDate.toLocaleDateString('uk-UA')}`);
console.log("---------------------------------------------------------");

// 1. Отримання масиву ключ-значення та фільтрація
// Використовуємо Object.entries() для перетворення об'єкта на масив пар [назва, дата]
const validMedicines = Object.entries(medicines)
    // 2. Фільтрація: залишаємо лише ті, термін зберігання яких ще не пройшов
    .filter(([name, expiryDate]) => expiryDate.getTime() > currentDate.getTime())
    
    // 3. Сортування: сортуємо за датою придатності у хронологічному порядку (від найближчої до найвіддаленішої)
    .sort(([name1, date1], [name2, date2]) => date1.getTime() - date2.getTime())

    // 4. Мапування: отримуємо масив лише назв препаратів
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