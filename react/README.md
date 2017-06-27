# Learn ReactJS

React is a JavaScript library for building user interfaces.
https://facebook.github.io/react/

## Getting Started
- Create a new folder and run these bash commands to set-up the React environment:

  macOS

  ```bash
    brew install yarn # install yarn package manager
    yarn init -y
    yarn add webpack webpack-dev-server path  # install webpack, dev server and path
    touch webpack.config.js # create webpack config

    yarn add babel-loader babel-core babel-preset-es2015 babel-preset-react --dev # setup babel

    touch .babelrc  # create babel config

    mkdir client
    touch client/index.js
    touch client/index.html

    yarn add html-webpack-plugin

    yarn add react react-dom

    mkdir client/components
    touch client/components/App.jsx

    bash populate-config.sh
  ```
