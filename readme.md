[![Build Status](https://travis-ci.org/erictherobot/hello-electron.svg?branch=master)](https://travis-ci.org/erictherobot/hello-electron)

# Hello Electron
Hello Electron is a simple hello world example of Electron.

![Image](https://dl.dropboxusercontent.com/s/huxc71ajiw8ij4s/Screenshot%202016-10-13%2009.54.17.png?dl=0?raw=true)

#Technology
- Electron
- React
- Less
- Yarn - https://code.facebook.com/posts/1840075619545360/yarn-a-new-package-manager-for-javascript/
- electron-compile

# Branches

- Tone = Electron + React + Tone.js
- Charts = Electron + React + D3.js / Highcharts
- UI = Electron + React + PhotonKit
- GraphQL = Electron + React + GraphQL
- Tesseract = Electron + React + Tesseract.js

# Install

```
$ git clone https://github.com/erictherobot/hello-electron.git
$ cd hello-electron
$ yarn start
```

## Start Dev App

```
$ yarn start
```

### Other Commands / Utilities

Clean the `.cache` folder

```
$ yarn clean-cache
```

Clean the `/dist` folder

```
$ yarn clean-source
```

Compile locally

```
$ yarn compile
```

Compile + Package for distribution - All Platforms (macOS, Linux, and Windows) - WIP - may not work as expected.

```
$ yarn quick-package
```

Builds the app for macOS, Linux, and Windows, using [electron-packager](https://github.com/electron-userland/electron-packager).

## Follow on Twitter

[@erictherobot](https://twitter.com/erictherobot)

## License

MIT © [erictherobot](http://erictherobot.com)
