# Learn ReactJS

React is a JavaScript library for building user interfaces.
https://facebook.github.io/react/

## Getting Started
- Create a new folder and run these bash commands to set-up the React environment:

  macOS

  ```bash
    npm init -y
    npm install -s webpack webpack-dev-server path  # install webpack, dev server and path
    touch webpack.config.js # create webpack config

    npm install --save-dev babel-loader babel-core babel-preset-es2015 babel-preset-react # setup babel

    touch .babelrc  # create babel config

    mkdir client
    mkdir client/js
    touch client/js/index.js
    touch client/index.html

    npm install -s html-webpack-plugin

    npm install -s react react-dom babel-polyfill

    mkdir client/js/components
    touch client/js/components/App.jsx

    bash populate-config.sh

  ```
