# Movie Explorer Web App

## Overview

Movie Explorer is a React-based web application that allows users to browse and search for top-rated movies and TV shows. Utilizing TheMovieDB API, the app provides a seamless experience with live search functionality and detailed views of each title.

## Features

- Display top 10 rated TV shows and movies.
- Live search functionality for movies and TV shows.
- Detailed view for individual movie and TV show items.
- Responsive design for various screen sizes.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm or yarn

### Installing

Clone the repository:

```bash
git clone https://github.com/yourusername/movie-explorer.git
```

Navigate to the project directory:

```bash
cd movie-explorer
```

Install dependencies:

```bash
npm install
```

Create a .env file in the root directory and add your API key, which you can obtain from TheMovieDB API:

```bash
API_KEY=your_api_key
AUTH=Baerer your_auth_key
HOST=https://api.themoviedb.org
RESULT=application/json


```

### Running the Application

Start the development server:

```bash
npm start
```

The application will open in your default browser at http://localhost:3000.

## Usage

### Home Screen

![Home Screen Placeholder](https://via.placeholder.com/800x450)

When the app loads, the TV Shows tab is selected by default, displaying the top 10 TV shows.

### Search Functionality

![Search Functionality Placeholder](https://via.placeholder.com/800x450)

The search bar reacts to user input and performs a search when 3 or more characters are entered.

### Detailed View

![Detailed View Placeholder](https://via.placeholder.com/800x450)

Clicking on a movie or TV show card opens the detailed view with more information and a trailer if available.

## Built With

- [React](https://reactjs.org/) - The web framework used.

- [Axios](https://www.npmjs.com/package/axios) - For making API requests.

- [React Router](https://reactrouter.com/) - For navigation within the application.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

- [Jasenko Božinović]

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- TheMovieDB for providing the API.

- Figma Mocks for UX/UI design.

## Additional Notes

- The app is designed with a mobile-first approach.

- The search functionality includes debounce to minimize API calls.

## Support

For any additional questions or support, please contact
