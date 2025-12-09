/**
 * Функція для генерації випадкового кольору у hex-форматі.
 * @returns {string} Випадковий Hex-колір, наприклад, #FF5733.
 */
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  // Отримуємо посилання на елементи DOM
  const body = document.querySelector('body');
  const changeColorButton = document.querySelector('.change-color');
  const colorSpan = document.querySelector('.color');
  
  /**
   * Обробник події кліку, який змінює колір фону.
   */
  function handleChangeColor() {
      
      // Генеруємо випадковий колір
      const randomColor = getRandomHexColor();
      
      // Змінюємо колір фону <body> через інлайн-стиль
      body.style.backgroundColor = randomColor;
      
      // Задаємо згенероване значення кольору текстовим вмістом для span.color
      colorSpan.textContent = randomColor;
  
      console.log(`Фон змінено на: ${randomColor}`);
  }
  
  // Встановлюємо слухач події на кнопку
  changeColorButton.addEventListener('click', handleChangeColor);
  
  console.log("Скрипт завантажено. Натисніть кнопку для зміни кольору.");