document.addEventListener('DOMContentLoaded', function () {
    const updateImageForm = document.getElementById('updateImageForm');

    updateImageForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(updateImageForm);

        // Отправка запроса на обновление изображения
        fetch('/api/UserUpdateConteoller/image/update', {
            method: 'PUT',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                alert('Image updated successfully!');
                // Обновление информации о пользователе после успешного обновления изображения
                getUserInfo();
            } else {
                alert('Failed to update image. Please try again.');
            }
        })
        .catch(error => console.error('Error updating image:', error));
    });
});
