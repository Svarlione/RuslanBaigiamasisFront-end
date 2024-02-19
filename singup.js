

document.addEventListener('DOMContentLoaded', function () {
    
    const signupForm = document.getElementById('signupForm');

    
    signupForm.addEventListener('submit', function (event) {
        
        event.preventDefault();

        
        const userName = document.getElementById('userName').value;
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value;
        const personalIndefication = document.getElementById('personalIndefication').value;

        
        if (userName && password && email && personalIndefication) {
            
            console.log('Username:', userName);
            console.log('Password:', password);
            console.log('Email:', email);
            console.log('Personal Indefication:', personalIndefication);

            
        } else {
            
            console.error('Please fill in all the required fields.');
        }
    });
});
