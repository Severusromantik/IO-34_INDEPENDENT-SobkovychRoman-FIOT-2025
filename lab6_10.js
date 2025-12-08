// Функція для генерації випадкового кольору у hex-форматі
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  // 1. Отримуємо посилання на елементи DOM
  const controls = document.getElementById('controls');
  const input = controls.querySelector('input');
  const createButton = controls.querySelector('[data-create]');
  const destroyButton = controls.querySelector('[data-destroy]');
  const boxesContainer = document.getElementById('boxes');
  
  // Початковий розмір для першого елемента
  const INITIAL_SIZE = 30;
  // Крок збільшення розміру
  const SIZE_INCREMENT = 10;
  
  /**
   * Створює колекцію елементів <div>.
   * @param {number} amount - Кількість елементів для рендеру.
   */
  function createBoxes(amount) {
      // 1. Очищуємо стару колекцію перед створенням нової
      destroyBoxes(); 
  
      const fragment = document.createDocumentFragment();
      let currentSize = INITIAL_SIZE;
      
      // 2. Створюємо елементи у циклі
      for (let i = 0; i < amount; i++) {
          const box = document.createElement('div');
          
          // Встановлюємо розміри
          box.style.width = `${currentSize}px`;
          box.style.height = `${currentSize}px`;
          
          // Встановлюємо випадковий колір фону
          box.style.backgroundColor = getRandomHexColor();
          
          // Додаємо елемент у фрагмент
          fragment.appendChild(box);
          
          // Збільшуємо розмір для наступного елемента
          currentSize += SIZE_INCREMENT;
      }
  
      // 3. Додаємо всі елементи з фрагмента в DOM за один раз (для оптимізації)
      boxesContainer.appendChild(fragment);
  }
  
  /**
   * Очищає вміст div#boxes, видаляючи всі створені елементи.
   */
  function destroyBoxes() {
      // Найшвидший спосіб очистити вміст DOM-елемента
      boxesContainer.innerHTML = ''; 
  }
  
  /**
   * Обробник події для кнопки Create.
   */
  function handleCreateClick() {
      const amount = Number(input.value);
  
      // Валідація: перевіряємо, чи значення в межах від 1 до 100
      if (amount >= 1 && amount <= 100) {
          
          // 1. Рендеримо колекцію
          createBoxes(amount);
          
          // 2. Очищаємо значення в інпуті
          input.value = '';
          
      } else {
          alert("Будь ласка, введіть число від 1 до 100 включно.");
          input.value = ''; // Очищаємо невірне значення
      }
  }
  
  // 3. Додаємо слухачі подій
  createButton.addEventListener('click', handleCreateClick);
  destroyButton.addEventListener('click', destroyBoxes);
  
  console.log("Скрипт динамічної колекції завантажено.");