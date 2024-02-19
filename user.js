document.addEventListener('DOMContentLoaded', function () {
    // Получение информации о пользователе при загрузке страницы
    getUserInfo();



});



async function getUserInfo(userRef) {
    
    const token = sessionStorage.getItem('token');
    // Ваш код для отправки запроса на получение информации о пользователе
    // Замените URL на свой, и используйте соответствующие методы (GET, POST, и т.д.)
    const response = await fetch('https://localhost:7236/api/UserUpdateConteoller/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })        
        .catch(error => console.error('Error fetching user information:', error));

        if (!response.ok) {
            throw new Error('Failed to get user data');
        }

        const userData = await response.json();
        console.log(userData);    
}

function displayUserInfo(user) {
    // Вывод информации о пользователе на страницу
    const userInfoContainer = document.getElementById('userInfo');
    userInfoContainer.innerHTML = `
        <p><strong>User ID:</strong> ${user.userId}</p>
        <p><strong>Username:</strong> ${user.userName}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <!-- Добавьте другие поля пользователя, которые вы хотите отобразить -->
    `;
}