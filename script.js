// Обновленная функция регистрации для нового дизайна
function registerMagicUser(e) {
    e.preventDefault();
    
    const name = document.getElementById('unicornName').value.trim();
    const surname = document.getElementById('unicornSurname').value.trim();
    const grade = document.getElementById('unicornGrade').value;
    const letter = document.getElementById('unicornLetter').value.trim().toUpperCase();
    const birth = document.getElementById('unicornBirth').value;
    const unicornType = document.getElementById('unicornType').value;
    
    if (!name || !surname || !grade) {
        alert('✨ Пожалуйста, заполни обязательные поля волшебства!');
        return;
    }
    
    // Валидация буквы класса (только одна буква)
    if (letter && !/^[А-ЯЁ]$/.test(letter)) {
        alert('✨ Пожалуйста, введите одну русскую букву для класса (А, Б, В и т.д.)');
        document.getElementById('unicornLetter').focus();
        return;
    }
    
    // Создаем волшебного пользователя
    magicUser = {
        magicName: name,
        magicSurname: surname,
        fullMagicName: `${name} "${getUnicornNickname()}" ${surname}`,
        magicGrade: letter ? `${grade}${letter}` : `${grade}`,
        unicornType: unicornType || 'rainbow',
        birthDate: birth,
        registrationDate: new Date().toLocaleDateString('ru-RU'),
        magicTests: [],
        unicornColor: getRandomUnicornColor()
    };
    
    // Сохраняем в localStorage
    localStorage.setItem('magicUnicornUser', JSON.stringify(magicUser));
    
    // Закрываем портал с анимацией
    const portal = document.getElementById('unicornPortal');
    portal.style.display = 'none';
    showMagicTests();
    updateUnicornBadge();
    
    // Добавляем обработчики тестов
    document.querySelectorAll('.start-magic-test').forEach(btn => {
        btn.addEventListener('click', function() {
            const testId = this.dataset.test;
            startMagicTest(testId);
        });
    });
    
    // Показываем успешную регистрацию с анимацией
    showMagicConfetti();
}

// Остальной код в script.js остается без изменений
// ... (все остальные функции из предыдущего script.js)