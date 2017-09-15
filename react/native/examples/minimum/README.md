# Minimum React Native
Example React Native that works on iOS and Android.

## Getting Started

**Mac OS X specific instructions**
Run in CLI:
```sh
# Install Node if you don't have it yet
brew install node
# Install filesystem change watcher
brew install watchman
```

For a CLI generator, install `react-native-cli` with:
```sh
npm install -g react-native-cli
```

To start a project from scratch:

1. Setup npm project
    ```sh
    # init npm project
    npm init -y

    # Install CLI json tool
    npm install -g json

    # Make npm private
    json -I -f package.json -e 'this.private=true'

    # npm install
    npm install react react-native
    # npm install dev dependencies
    npm install --save-dev babel-jest babel-preset-react-native jest react-test-renderer
    ```

1. Create and populate configs
    ```sh

    # Add config k/v to package.json
    json -I -f package.json -e 'this.jest={"preset":"react-native"}'

    # Create and populate `.babelrc`
    touch .babelrc
    json -I -f .babelrc -e 'this.presets=["react-native"]'

    # Create and populate `app.json`
    touch app.json
    json -I -f app.json -e 'this.name="MinimumApp"'
    json -I -f app.json -e 'this.displayName="MinimumApp"'

    ```


