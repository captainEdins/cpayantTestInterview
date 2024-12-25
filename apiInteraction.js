import fetch from "node-fetch";

// Async function to fetch data from a public API
async function fetchData() {
    try {
        // Make a GET request to the API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        // Check if the response status is OK (200)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response
        const data = await response.json();

        // Extract specific data (e.g., titles of the posts)
        const titles = data.map(post => post.title);

        console.log('Titles of the posts:');
        console.log(titles);
    } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error.message);
    }
}

// Call the function
fetchData();