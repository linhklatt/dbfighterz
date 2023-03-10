const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the home page where users can select and create their characters
        document.location.replace('/home');
      } else {
        alert(response.statusText);
        document.location.replace('/login');
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
    
    // Collect values from the signup form
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the home page where users can select and create their characters
        document.location.replace('/home');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  