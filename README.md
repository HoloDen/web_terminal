# Web Terminal

## Intro

The stack consists of: 
- Backend: Express server communicating with the terminal
- Front-end: Build version of [React JS](https://reactjs.org/) served by Express Server.

The Express server uses [node-cmd](https://www.npmjs.com/package/node-cmd) to allow for commandline or terminal interface and run cli or bash style commands.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

Clone the repository on your local machine

```
git clone https://github.com/tdshivendran/web_terminal.git
```
### Running Server Version

1. Install necessary dependencies for the app

```
npm install
```

2. Build the front end

```
npm run build
```

3. Run the Express server

```
node server.js
```

The app is served at [http://localhost:3005/](http://localhost:3005).

### Running Electron Version

1. Install necessary dependencies for the app

```
npm install
```

2. Build the front end

```
npm run build
```

3. Run the Electron app
```
npm run electron
```

The app is also served at [http://localhost:3005/](http://localhost:3005).

## Authors

Created by [Shivendran](https://github.com/tdshivendran).
