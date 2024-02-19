
// login.js
const signupForm =  document.getElementById('signupForm');

  
signupForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const signUpData = {
        userName: document.getElementById('userName').value,
        password: document.getElementById('password').value,
        role: 'string',
        personalIndefication: document.getElementById('personalIndefication').value,
        email: document.getElementById('email').value
      };

      await signUp(signUpData);
        
    
    /*const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;
    //alert(userName  + " " + password);
   
    if (userName && password) {

        let userInput = {
            userName: userName,
            password: password
        }

        await userLogin(userInput);

    } else {     
        alert("Please enter both username and password.");      
        console.error('Please enter both username and password.');
    }*/

});



// document.addEventListener('DOMContentLoaded', function () {

        
    //     const userName = document.getElementById('userName').value;
    //     const password = document.getElementById('password').value;
    //     const email = document.getElementById('email').value;
    //     const personalIndefication = document.getElementById('personalIndefication').value;

        
    //     if (userName && password && email && personalIndefication) {
            
    //         console.log('Username:', userName);
    //         console.log('Password:', password);
    //         console.log('Email:', email);
    //         console.log('Personal Indefication:', personalIndefication);

            
    //     } else {
            
    //         console.error('Please fill in all the required fields.');
    //     }

// });


async function signUp(signUpData) {

    try {
        const response = await fetch(`https://localhost:7236/api/Authorization/signup`, {
            method: 'POST',
            body: JSON.stringify(signUpData),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            throw new Error('Failed to signUp');
        }

        await response.json();
        // const { id, userName, email } = userData;
        alert("Congratulations, user is created!");
        // pereinam i puslapi
        window.location.href = '/login.html';
    } catch (error) {
        console.log('Iviko klaida ieinat i sistema:', error.message);
        alert('Atsiprasom papbadykit dar karta.');
    }
}

    