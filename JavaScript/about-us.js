function toggleVisibility(id) {
    const element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

document.getElementById('newsletterForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (name && email) {
        document.getElementById('submissionStatus').textContent = `Thank you, ${name}! You're now subscribed.`;
    } else {
        document.getElementById('submissionStatus').textContent = "Please provide both name and email.";
    }
});

// Counter functionality
let count = 0;
function incrementCounter() {
    count++;
    document.getElementById('counter').textContent = count;
}

document.getElementById('newsletterForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;
    const rating = document.querySelector('input[name="rating"]:checked') ? document.querySelector('input[name="rating"]:checked').value : '';

    const formData = {
        name: name,
        email: email,
        comment: comment,
        rating: rating
    };

    fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle response data here if needed
        console.log('Form submission successful:', data);
    })
    .catch(error => {
        // Handle errors here
        console.error('There was a problem with form submission:', error);
    });
});

document.getElementById('learnMoreBtn').addEventListener('click', function () {
    alert('Get More Information!'); // You can replace this with your desired action
});