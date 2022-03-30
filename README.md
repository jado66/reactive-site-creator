
[![NPM Package](https://img.shields.io/npm/v/reactive-site-creator.svg?style=flat-square)](https://www.npmjs.com/package/reactive-site-creator)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
# Reactive-Site-Creator

- **List Items Describing The Package:** description.

## Try Before Downloading

A live demo is available for testing: https://jado66.github.io/reactive-site-creator-live/

## Installation and Usage

Installation is easy. First we'll create a react app and then install the reactive-site-creator package.

### Create a React App

First you will to create a react app. To do this make sure you have [node.js](https://nodejs.dev/) installed. Then open a terminal and copy and paste the following one line at a time:

```sh
npx create-react-app my-new-website
```

### Install Reactive-Site-Creator

To install this package change your directory to the react application's directory

```
cd my-new-website
```

Now run

```sh
npm install reactive-site-creator
```

### Import and Use the Website Component

Open up your favorite code editor to your new website's directory. Open up **App.js** In the **/src** directory and replace the code the with following:

```js
import Website from "reactive-site-creator/dist/components/Website";

function App() {
  return <Website siteName={"My New Website"} isAdmin={true} />;
}

export default App;
```

Run the website

```sh
npm start
```
