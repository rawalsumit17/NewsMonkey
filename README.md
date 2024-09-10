# NewsMonkey

**NewsMonkey** is a React-based news application that fetches and displays news articles from the News API. This app provides a user-friendly interface to view the latest headlines and news from various categories and countries.

## Features

- Fetch and display top headlines from various countries and categories.
- Infinite scrolling to load more news articles as you scroll.
- Responsive design that adapts to different screen sizes.
- Loading spinner to indicate data fetching.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **News API**: A service that provides news data from various sources.
- **React Infinite Scroll Component**: For infinite scrolling functionality.
- **PropTypes**: For type-checking the component props.

## Installation

To get started with the NewsMonkey app, follow these steps:

1. **Clone the Repository**

   ```sh
   git clone https://github.com/yourusername/newsmonkey.git
   cd newsmonkey
   Install Dependencies
   ```

Make sure you have Node.js and npm (or yarn) installed. Then, install the project dependencies:

sh
Copy code
npm install
Set Up API Key

You will need an API key from the News API. Sign up at News API to get your API key. Create a .env file in the root directory of the project and add your API key:

Create file: .env.local
Copy code: REACT_APP_NEWS_API = "d9f4b5acb8be40f885b369a35c0b7e51"

And Start the Development Server

Run the following command to start the development server:

sh
Copy code
npm start
The app will be available at http://localhost:3000 by default.

Usage
Open the app in your browser.
Use the dropdown to select different categories and countries.
Scroll down to load more news articles automatically.
Components
News: The main component that fetches and displays news articles.
NewsItem: A component that represents a single news article.

Acknowledgments
News API: For providing the news data.
React: For the powerful library for building UIs.
Contact
For any questions or feedback, please contact:

Author: Sumit Rawal
Email: rawalsumit69@gmail.com
GitHub: rawalsumit17
