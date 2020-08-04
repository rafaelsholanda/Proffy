# nextlevelweek02

Application developed at Next Level Week 02 proposed by the [Rocketseat](https://rocketseat.com.br/). This event took place from August 3 to August 7, 2020.

## Contents

1. [Setting Up The Development Environment](#Setting-Up-The-Development-Environment)
1. [First Day: ReactJS and Web Structure](#First-Day:-ReactJS-and-Web-Structure)
    1. [Application Description](#Application-Description)
    1. [Web Interface](#Web-Interface)

## Setting Up The Development Environment

To start the development of the project, it is necessary to install [NodeJs](https://nodejs.org/), [Yarn](https://yarnpkg.com/) and [Expo](https://expo.io/). The following table lists all the technologies used on this application:
 
 Technology | Short Description
 -----------|------------------
 [NodeJs](https://nodejs.org/) + [NPM](https://www.npmjs.com/) | Asynchronous event-driven JavaScript runtime with the package manager "NPM".
 [Yarn](https://yarnpkg.com/) | Package Manager.
 [Expo](https://expo.io/) | Framework and platform for universal React applications.
 [ReactJS](https://reactjs.org/) | A JavaScript library for building user interfaces.
 [React Native]() | 
 [TypeScript]() |

## First Day: ReactJS and Web Structure

### Application Description

The application's name is **Proffy**. It is a study platform that will connect teachers who teach private lessons and students who want to find specific subjects to study, improve school grades or prepare for a specific exam.

### Web Interface

To start developing the application's web interface, you need to create a template application using the React with TypeScript by running the following command in the main project folder:
```zsh
    yarn create react-app web --template typescript
```
This will create a hole structure for a React App inside a **web** folder. To initiate the template app run:
```zsh
    yarn start
```
The next step is to clean the application. You must delete the list below:

 - web/README.md
 - web/src/App.css
 - web/src/index.css
 - web/src/App.test.tsx
 - web/src/logo.svg
 - web/src/serviceWorker.ts
 - web/src/setupTests.ts
 - web/public/favicon.ico
 - web/public/logo192.png
 - web/public/logo512.png
 - web/public/manifest.json
 - web/public/robots.txt

After that, the template app will break, so it is necessary to remove all the references to the deleted files within **App.tsx** and **index.tsx**. The contents of this files should look something like the following:

 - App.tsx
 ```JavaScript
    import React from 'react';

    function App() {
      return (
        <div className="App">
          <h1>Hello World!</h1>
        </div>
      );
    }

    export default App;
 ```
 - index.tsx
 ```JavaScript
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';

    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
 ```
If everything is correct, when you run `yarn start`, a browser window will open with the text "Hello World".
Finally, it is necessary to clean the **index.html** file from the public folder to make it as below:

 - index.html
 ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
    
        <title>Proffy</title>
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
      </body>
    </html>
 ```

 