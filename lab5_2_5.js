const sortStringsAlphabetically = (arr) => {
    // Метод sort() без функції порівняння сортує рядки за алфавітом.
    arr.sort();
    return arr;
};

// Вхідний масив
const stringArray = ['banana', 'orange', 'apple', 'pear'];

console.log("--- Оригінальний масив ---");
console.log(stringArray);

// Викликаємо функцію. 
const sortedArray = sortStringsAlphabetically(stringArray);

console.log("\n--- Відсортований масив ---");
console.log(sortedArray); 

