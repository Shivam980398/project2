
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        // Add your code here to handle the registration process
        // For example, send data to server, validate input, etc.
        
        // After handling registration, redirect to the homepage
        location.href = 'index.html';
    });
