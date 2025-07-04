🎬 Movie Explorer
A sleek and interactive React app to search and explore movies using the OMDB API. Features animated backgrounds, pagination, type filtering, and responsive movie cards.

=>Demo
Live Demo on Netlify

=>Features
Search movies by title

Filter by type: movie, series, episode, or all

Paginated results with Previous and Next buttons

Responsive movie cards with poster, title, and year

Animated floating bubbles background for immersive UI

Error handling for invalid or empty searches

=?Technologies Used
React (Functional Components & Hooks)

Tailwind CSS for styling and responsiveness

OMDB API for movie data

Custom CSS animations for background effects

=>Getting Started
Prerequisites
Node.js installed (v14+ recommended)

npm or yarn package manager

=>Installation
git clone https://github.com/yourusername/movie-explorer.git
cd movie-explorer
npm install
Run Locally
npm start
Open http://localhost:3000 to view the app in your browser.

=>API Key
This app uses the OMDB API which requires a free API key.

Go to OMDB API

Register and get your free API key

Replace the API key in /services/api.js or your API service file with your key

=>Folder Structure
movie-explorer/
├── public/
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   ├── SearchBar.jsx
│   │   └── TypeFilter.jsx
│   ├── pages/
│   │   └── SearchPage.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   └── index.js
├── package.json
└── tailwind.config.js


