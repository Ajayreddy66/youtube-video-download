document.getElementById('linkForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const link = document.getElementById('link').value;
    const endpoint = 'https://your-api-endpoint.com/submit'; // Replace with your endpoint

    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ link: link }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // You can add more code here to handle the response, e.g., showing a success message
    })
    .catch((error) => {
        console.error('Error:', error);
        // You can add more code here to handle the error, e.g., showing an error message
    });
});
