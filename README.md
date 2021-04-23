# Extension

### Description

Boilerplate project that can be used to bootstrap browser extensions.  The project uses Webpack to build an extension and places the final build in the `dist` folder.  

### Folder structure
```
src
├── css
├── js
│   ├── content-script.js
│   ├── popup.js
|   ├── service-worker.js
|   └── common
|       ├── constants.js
|       ├── context.js
│       └── functions.js
├── config.sample.js
├── manifest.json
└── popup.html
```

### Config

Copy config.sample.js as config.js.

| Field | Type | Description | Default |
| ----- | ---- | ----------- | ------- |

### Available Scripts

In the project directory, you can run:

#### `npm run build`

Builds the project into the `build` folder.

### `npm run dev`

Watches for changes to `src` folder and builds the project when changes happen.

### Documentation

- [Getting started](https://developer.chrome.com/docs/extensions/mv3/getstarted/)
- [Extensions Architecture](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/)
