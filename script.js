// script.js

// Получаем элементы
const scannerOverlay = document.getElementById('scanner-overlay');
const mainContent = document.querySelector('.main-content');
const scanButton = document.getElementById('scan-button');
const sections = document.querySelectorAll('section');
const digitalClock = document.getElementById('digital-clock');

// Обработчик для кнопки "Получить доступ"
scanButton.addEventListener('click', () => {
    scannerOverlay.style.display = 'none';
    mainContent.classList.add('active');
});

// Функция для переключения секций
function showSection(sectionId) {
    sections.forEach(section => {
        section.classList.remove('active');
    });
    const targetSection = document.getElementById(sectionId);
    targetSection.classList.add('active');

    // Добавляем класс active для кнопки
    document.querySelectorAll('.content-header button').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.content-header button[onclick="showSection('${sectionId}')"]`).classList.add('active');
}

// Функция для обновления часов
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    digitalClock.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

// Логика для выпадающих списков во вкладке INV
const skillGroupHeaders = document.querySelectorAll('#stack .skill-group-header');
skillGroupHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isActive = content.classList.contains('active');

        // Закрываем все группы
        document.querySelectorAll('#stack .skill-group-content').forEach(group => {
            group.classList.remove('active');
        });
        document.querySelectorAll('#stack .skill-group-header').forEach(h => {
            h.classList.remove('active');
        });

        // Если группа не была активна, открываем её
        if (!isActive) {
            content.classList.add('active');
            header.classList.add('active');
        }  
    });
});
