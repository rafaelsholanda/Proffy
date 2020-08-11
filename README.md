## #nextlevelweek02

<h1 align="center">
   <img alt="NextLevelWeek02" title="#NextLevelWeek02" src="./web/src/assets/images/banner.png"/>
</h1>

Application developed at Next Level Week 02 proposed by the [Rocketseat](https://rocketseat.com.br/). This event took place from August 3 to August 7, 2020.

## Contents

1. [Repository Objective](#Repository-Objective)
1. [Setting Up The Development Environment](#Setting-Up-The-Development-Environment)
1. [ReactJS and Web Structure](#ReactJS-and-Web-Structure)
   1. [Application Description](#Application-Description)
   1. [Web Interface](#Web-Interface)
      - [Template App](#Template-App)
      - [Global CSS](#Global-CSS)

## Repository Objective

The purpouse of this repository is to try to describe the step by step used to develop the application, in order to establish documentation for future projetcs using React.

## Setting Up The Development Environment

To start the development of the project, it is necessary to install [NodeJs](https://nodejs.org/), [Yarn](https://yarnpkg.com/) and [Expo](https://expo.io/). The following table lists all the technologies used on this application:
 
   | Technology | Short Description |
   |-----------:|:------------------|
   [NodeJs](https://nodejs.org/) + [NPM](https://www.npmjs.com/) | Asynchronous event-driven JavaScript runtime with the package manager "NPM".
   [Yarn](https://yarnpkg.com/) | Package Manager.
   [Expo](https://expo.io/) | Framework and platform for universal React applications.
   [ReactJS](https://reactjs.org/) | A JavaScript library for building user interfaces.
   [React Native](https://reactnative.dev/) | For create native apps for Android and IOS using React
   [TypeScript](https://www.typescriptlang.org/) | Typed superset for Javascript.

## ReactJS and Web Structure

### Application Description

The application's name is **Proffy**. It is a study platform that will connect teachers who teach private lessons and students who want to find specific subjects to study, improve school grades or prepare for a specific exam.

### Web Interface

#### Template App

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
#### Global CSS

The next step is to create the **assets** folder within the **src** folder. Inside the **assests** folder, you should place the **images** folder that was provided during the event. This folder contains the icons and svg images that will be used in the App.

Now you need to create the folder **styles** inside the folder **assests**. This folder will contain the file **global.css**. This file will be used to define some styles of the application that will be used on all pages. All colors were defined as variables as following:

   - global.css
   ```css
      :root {
         --color-background: #F0F0F7;
         --color-primary-lighter: #9871F5;
         --color-primary-light: #916BEA;
         --color-primary: #8257E5;
         --color-primary-dark: #774DD6;
         --color-primary-darker: #6842C2;
         --color-secundary: #04D361;
         --color-secundary-dark: #04BF58;
         --color-title-in-primary: #FFFFFF;
         --color-text-in-primary: #D4C2FF;
         --color-text-title: #32264D;
         --color-text-complement: #9C98A6;
         --color-text-base: #6A6180;
         --color-line-in-white: #E6E6F0;
         --color-input-background: #F8F8FC;
         --color-button-text: #FFFFFF;
         --color-box-base: #FFFFFF;
         --color-box-footer: #FAFAFC;
      
         font-size: 60%;
      }
   ```
Then, it will be defined that the padding and margin are zero for all elements. 

```css
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
```
In addition, a height equal to "100vh" will be defined for **html**, **body** and the **root** div to make the page always occupy 100% of the screen. Then the body background will be set to the `--color-background` variable.

```css
   html, body, #root {
      height: 100vh;
   }

   body {
      background: var(--color-background);
   }
```
Anothers styles configurantions was added to the **global.css** as below:

   - Google Fonts: Archivo, Poppins
```css
   #root {
      display: flex;
      align-items: center;
      justify-content: center;
   }

   body,
   input,
   button,
   textarea {
      font: 500 1.6rem Poppins;
   }

   .container {
      width: 90vw;
      max-width: 700px;
   }

   @media (min-width: 700px) {
      :root {
         font-size: 62.5%;
      }
   }
```

To apply the CSS styles to the application it is necessary to import the **global.css** in the **App.tsx**.

   - App.tsx
   ```JavaScript
      import './assets/styles/global.css';
   ```
   - index.html
   ```html
      <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;700&family=Poppins&display=swap" rel="stylesheet">
   ```

   ## Server

   "target": "es2017"

   # Extra

   https://www.notion.so/Vers-o-2-0-Proffy-eefca1b981694cd0a895613bc6235970