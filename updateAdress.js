document.addEventListener('DOMContentLoaded', function () {
    const updateAddressForm = document.getElementById('updateAddressForm');

    updateAddressForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(updateAddressForm);

        
        fetch('/api/UserUpdateConteoller/addressUpdate', {
            method: 'PUT',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                alert('Address updated successfully!');
                // Обновление информации о пользователе после успешного обновления адреса
                getUserInfo();
            } else {
                alert('Failed to update address. Please try again.');
            }
        })
        .catch(error => console.error('Error updating address:', error));
    });
});
