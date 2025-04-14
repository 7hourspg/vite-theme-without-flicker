# Vite Theme Without Flickering

This project demonstrates a simple implementation of a theme switcher in a React application using Vite, ensuring that the theme is applied without flickering.

## How It Works

- The theme is stored in the `localStorage` of the browser.
- If the theme is not found in the `localStorage`, the system theme is used.
- The implementation uses a `script` tag so when the page is loaded, the theme is applied without flickering. So there the script tag is the most important which prevents the flickering.

## How to Use

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd vite-theme-without-flicker
   ```

2. Install the dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal).

5. Use the buttons in the application to toggle between light, dark, and system themes.

## Features

- **Theme Persistence**: The selected theme is saved in `localStorage`, so it persists across page reloads.
- **Responsive to System Preferences**: The application can automatically switch to the system's preferred theme.
- **Seamless Theme Switching**: The theme is applied without flickering, providing a smooth user experience.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool that provides a development server and optimizes the build process.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for styling.
