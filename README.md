
# Artikel Finder

**Artikel Finder** is a web application that helps users find the correct German articles (der, die, das) for any given noun. The project is built using React and relies on the Yandex Dictionary API to fetch and display the gender and type of German words.

![Artikel-Finder-UcefDev](https://github.com/user-attachments/assets/c9f9be58-b087-4c71-8f61-a1f677b654a7)

**Website**: [https://artikel-finder.vercel.app/](https://artikel-finder.vercel.app/)

## Features

- **Real-time Article Search**: Simply type a German noun in the search bar, and the correct article (der, die, das) will be displayed instantly.
- **"Der, Die, Das" Game**: Test your knowledge of German articles with a fun and interactive game accessible through the "Game" button on the main navigation bar. The game uses the [DWDS API](https://www.dwds.de/api/wb/random) to fetch random German words.
- **Home, About, and Author Pages**: Navigate through the application using the "Home," "About," and "Author" buttons to explore more about the project and its creator.
- **Responsive Design**: The application is fully responsive and works seamlessly on both desktop and mobile devices.
- **Customizable**: Users can easily customize the application, including replacing the API key with their own.
- **Stylish Interface**: The application features a modern and clean interface with an all-white theme, making it easy and pleasant to use.

## How It Works

1. **User Input**: The user types a German noun into the search bar.
2. **API Request**: The application sends a request to the Yandex Dictionary API to retrieve the gender and type of the noun.
3. **Display Results**: The correct article (der, die, das) is displayed on the screen along with additional information about the noun.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [Vite](https://vitejs.dev/guide/) (for running the development server)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/ucefdev1/Artikel-finder.git
   cd Artikel-finder
   ```

2. **Install Dependencies**

   Run the following command to install all necessary dependencies:

   ```bash
   npm install
   ```

3. **Add Your Yandex API Key**

   You need to obtain an API key from Yandex to use their dictionary API. Follow these steps:

   - [Sign up for an API key](https://translate.yandex.com/developers) on the Yandex website.
   - Create a `.env` file in the root directory of your project and add the following line:

     ```plaintext
     VITE_YANDEX_API_KEY=YOUR_API_KEY
     ```

     Replace `YOUR_API_KEY` with the actual API key you received from Yandex.

4. **Run the Development Server**

   Start the development server using Vite:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

### Editing the Project

If you want to edit the project, follow these steps:

1. **Open the Project in Your Favorite Code Editor**

   You can use any code editor you prefer, but Visual Studio Code is recommended for its features and ease of use.

2. **Make Changes**

   Edit the React components, styles, or functionality as needed. For instance, if you want to change the UI, you can modify the `App.jsx` file or any of the components in the `src` directory.

3. **Update API Logic**

   If you wish to change how the API is called or processed, edit the logic in the component that handles API requests, typically found in the `src/components` folder.

4. **Test Your Changes**

   Run the development server to see your changes live. Make sure everything works as expected.

## Deployment

To deploy the application, you can build the project using Vite and then serve the static files:

```bash
npm run build
```

After the build is complete, the output will be in the `dist/` folder, which you can then deploy to any static hosting service, such as Netlify, Vercel, or GitHub Pages.

## Contributions

Contributions are welcome! Feel free to submit a pull request or open an issue if you have any suggestions or bug reports.

## Author

Created by Youssef Rifai. You can connect with me on [GitHub](https://github.com/ucefdev1).
