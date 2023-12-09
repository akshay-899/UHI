document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorText = document.getElementById('errorText');
  
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const aadharNumber = document.getElementById('aadharNumber').value;
  
      // Simulating database check, replace this with your actual database check
      const validAadharNumbers = ['123456789', '987654321098']; // Sample valid Aadhar numbers
  
      if (validAadharNumbers.includes(aadharNumber)) {
        // Redirect to main page (replace this with actual redirection logic)
        console.log('Login successful, redirecting to main page');
        window.location.href = '/main'; // Redirect to your main page
      } else {
        errorText.textContent = 'Invalid Aadhar number. Please try again.';
      }
    });
  });
  