<p align="center"><img width="200" src="https://github.com/janisrozenfelds/Vue-Vuetifyjs-Firebase/blob/master/static/app_logo.svg" alt="App logo"></a></p>

# Vue + Vuetifyjs + Firebase project

> A Vue.js project

## The App
![Alt Text](https://thumbs.gfycat.com/VacantMealyHypacrosaurus-size_restricted.gif)
(simple app with Firabase Sigin, Signup page

## How to set up Firabase Configuration?
1. First create acount - [firebase.google.com](http://firebase.google.com)
2. Go to folder src/helpers/
``` bash
src
|
|-helpers
  |
  firebaseConfig.js
```

3. and edit file "firebaseConfig.js"
Edit this fields:
 API_KEY, AUTH_DOMAIN, DATA_BASE_URL,
 PROJECT_ID, STORAGE_BUCKET
with your firebase Configuration

``` bash
// firebase configurations
export const firebaseConfig = {
  apiKey: 'API_KEY',
  authDomain: 'AUTH_DOMAIN',
  databaseURL: 'DATA_BASE_URL',
  projectId: 'PROJECT_ID',
  storageBucket: 'STORAGE_BUCKET'
}
```


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
