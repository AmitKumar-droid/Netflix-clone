// Define the OMDb API URL and your API key
const apiKey = 'cd75a899';  // Replace with your actual API key
const apiUrl = 'https://www.omdbapi.com/';

// Handle "Get Started" button click
function getStarted() {
    const email = document.getElementById('email').value;
    if (email) {
        alert('Sign up initiated for ' + email);
        // Implement actual sign up logic here
    } else {
        alert('Please enter a valid email address.');
    }
}

// Handle "Sign Out" button click
function signOut() {
    alert('Signed out successfully!');
    // Implement actual sign-out logic here
}

// Function to search movies or web series
function searchMovies() {
    const query = document.getElementById('search-bar').value;
    
    if (query === '') {
        document.getElementById('search-results').innerHTML = '';
        return;
    }

    const url = `${apiUrl}?s=${query}&apikey=${apiKey}`;
    
    // Fetch data from OMDb API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                displaySearchResults(data.Search);
            } else {
                document.getElementById('search-results').innerHTML = '<p>No results found</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Display search results dynamically
function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById('search-results');
    searchResultsContainer.innerHTML = '';  // Clear previous results

    results.forEach(item => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('list-item');
        
        const movieImage = document.createElement('img');
        movieImage.src = item.Poster !== 'N/A' ? item.Poster : 'assets/images/default-poster.jpg'; // Fallback image if no poster
        movieElement.appendChild(movieImage);
        
        const movieTitle = document.createElement('span');
        movieTitle.textContent = item.Title;
        movieElement.appendChild(movieTitle);
        
        searchResultsContainer.appendChild(movieElement);
    });
}
// Toggle FAQ answers
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        
        // Toggle the visibility of the answer
        answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
    });
});

