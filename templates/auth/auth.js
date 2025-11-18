  document.getElementById('login').addEventListener('click', function() {
        document.querySelector('.auth-login').style.display = 'block';  
        document.querySelector('.auth-signup').style.display = 'none'; 
    });

    document.getElementById('signup').addEventListener('click', function() {
        document.querySelector('.auth-signup').style.display = 'block'; 
        document.querySelector('.auth-login').style.display = 'none';   
    });