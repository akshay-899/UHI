// main_page_script.js
document.addEventListener('DOMContentLoaded', () => {
    // Mock user data
    const userData = {
      name: 'akshay',
      dateOfBirth: '1990-05-15',
      bloodGroup: 'AB+',
      sugarLevel: 'Normal',
      // Add other user details as needed
    };
  
    displayUserInfo(userData);
  });
  
  function displayUserInfo(userData) {
    // Display user information on the page
    const nameElement = document.getElementById('name');
    const dobElement = document.getElementById('dob');
    const bloodGroupElement = document.getElementById('bloodGroup');
    const sugarLevelElement = document.getElementById('sugarLevel');
  
    // Display user information on the page
    nameElement.textContent = `Name: ${userData.name}`;
    dobElement.textContent = `Date of Birth: ${userData.dateOfBirth}`;
    bloodGroupElement.textContent = `Blood Group: ${userData.bloodGroup}`;
    sugarLevelElement.textContent = `Sugar Level: ${userData.sugarLevel}`;
  }
  