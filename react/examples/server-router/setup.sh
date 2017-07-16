npm init -y
npm install -s react react-dom babel-polyfill webpack webpack-dev-server html-webpack-plugin path  # install webpack, dev server and path
touch webpack.config.js # create webpack config

npm install --save-dev babel-loader babel-core babel-preset-es2015 babel-preset-react # setup babel

touch .babelrc  # create babel config

mkdir client
mkdir client/js
touch client/js/index.js
touch client/index.html

mkdir client/js/components
touch client/js/components/App.jsx

bash populate-config.sh
