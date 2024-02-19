document.addEventListener('DOMContentLoaded', function () {
    const updateUserForm = document.getElementById('updateUserForm');

    updateUserForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(updateUserForm);

       //atnaujina info Userio
        fetch('/api/UserUpdateConteoller/userUpdate', {
            method: 'PUT',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                alert('User information updated successfully!');
                // atsinaujina jei viskas ok
                getUserInfo();
            } else {
                alert('Failed to update user information. Please try again.');
            }
        })
        .catch(error => console.error('Error updating user information:', error));
    });
});
