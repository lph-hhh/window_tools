# My Electron Vue App

This project is a template for building an Electron application using Vue 3 and TypeScript. It serves as a starting point for developing cross-platform desktop applications.

## Project Structure

```
my-electron-vue-app
├── src
│   ├── main
│   │   └── index.ts          # Entry point for the Electron main process
│   ├── renderer
│   │   ├── App.vue           # Root Vue component
│   │   ├── main.ts           # Entry point for the Vue application
│   │   └── components
│   │       └── HelloWorld.vue # Example Vue component
│   └── preload
│       └── index.ts          # Preload script for exposing APIs
├── public
│   └── index.html            # Main HTML file for the application
├── package.json               # npm configuration file
├── tsconfig.json              # TypeScript configuration file
├── vite.config.ts             # Vite configuration file
└── README.md                  # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd my-electron-vue-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm run dev
   ```

## Development

- The main process is located in `src/main/index.ts`.
- The renderer process is managed by Vue and can be found in `src/renderer/main.ts`.
- You can add new components in the `src/renderer/components` directory.

## Build

To build the application for production, run:
```
npm run build
```

## License

This project is licensed under the MIT License. See the LICENSE file for more details.