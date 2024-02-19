// login.js


    
    const loginForm =  document.getElementById('loginForm');

  
    loginForm.addEventListener('submit', async function (event) {
        
        event.preventDefault();
        
        const userName = document.getElementById('userName').value;
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
        }

    });


async function userLogin(userInput) {

    try {
        const response = await fetch(`https://localhost:7236/api/Authorization/login`, {
            method: 'POST',
            body: JSON.stringify(userInput),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            throw new Error('Failed to log in');
        }

        const userData = await response.json();
        // const { id, userName, email } = userData;
        const { token } = userData;

        sessionStorage.setItem('token', token); 

        // pereinam i puslapi
        window.location.href = '/user.html';
    } catch (error) {
        console.log('Iviko klaida ieinat i sistema:', error.message);
        alert('Atsiprasom papbadykit dar karta.');
    }
}

