# IMDB Clone

A React-based web application that replicates core features of IMDB, allowing users to browse top-rated movies, manage a personal watchlist, and explore movie details. Built with modern web technologies for a responsive and interactive user experience.

## Features

- **Browse Top-Rated Movies**: View a curated list of top-rated movies fetched from The Movie Database (TMDB) API.
- **Movie Details**: See movie posters, titles, ratings, popularity, and genres.
- **Watchlist Management**: Add movies to a personal watchlist stored locally in the browser.
- **Search Functionality**: Search through your watchlist by movie title.
- **Category Filtering**: Filter watchlist movies by genre categories.
- **Sorting Options**: Sort watchlist by movie ratings in ascending or descending order.
- **Pagination**: Navigate through multiple pages of movie results.
- **Responsive Design**: Optimized for desktop and mobile devices using Tailwind CSS.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Vite**: Fast build tool and development server.
- **Axios**: HTTP client for API requests.
- **React Router**: Client-side routing for navigation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **FontAwesome**: Icon library for UI elements.
- **TMDB API**: External API for movie data.
- **Local Storage**: Browser storage for persisting watchlist data.

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- TMDB API key (sign up at [themoviedb.org](https://www.themoviedb.org/) to get one)

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd imdb_clone
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up TMDB API key**:
   - The API key is hardcoded in the `Movies.jsx` component for simplicity.
   - In a production app, consider using environment variables.

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to `http://localhost:5173` (or the port shown in the terminal).

## Usage

- **Home Page**: Browse top-rated movies. Click the heart icon to add/remove movies from your watchlist.
- **Watchlist Page**: View your saved movies in a table format. Use the search bar to find specific movies, filter by category, or sort by rating.

## Project Structure

```
imdb_clone/
├── public/
│   ├── vite.svg
│   └── movie_logo.png
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Banner.jsx
│   │   ├── MovieCard.jsx
│   │   ├── Movies.jsx
│   │   ├── Navigation.jsx
│   │   ├── Pagination.jsx
│   │   └── WatchList.jsx
│   ├── Utility/
│   │   └── Category.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## API Integration

The app integrates with The Movie Database (TMDB) API to fetch movie data. The API endpoint used is:
```
https://api.themoviedb.org/3/movie/top_rated
```

Note: The API key is currently embedded in the code. For security in production, use environment variables.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes. Please respect TMDB's API terms of service.
