<p align="left">
<a href="https://www.npmjs.com/package/reactive-site-creator"><img src="https://img.shields.io/npm/v/@reactive-site-creator" alt="Stable Release" /></a>

<a href="./LICENSE"><img allt="Attribution-NonCommercial 4.0 International" src="https://licensebuttons.net/l/by-nc/4.0/80x15.png"/></a>

</p>

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
