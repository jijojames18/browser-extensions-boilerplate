# Browser Extension Boilerplate

### Description

A Boilerplate project that can be used to bootstrap browser extensions.  
The project uses Webpack to build an extension and places the final build in the `dist` folder. The project supports service worker, content scripts, and popup required for making browser extensions. Once the build is done, the extensions can be loaded directly into the browser using the `dist` folder as the source. Webpack is configured to work in development mode and will not minify/uglify the JavaScript code. All manifest entries related to extension should be kept inside `src/manfiest.json` except `name`, `author`, `description`, and `version`, which will be copied from `package.json` during the build stage. During development, `npm run dev` will start a watcher process which will automatically change build the extension when any file in the `src` folder is changed.  


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

*Steps to perform for creating a new extension*  
1. Update the package.json fields such as name, description, version, and author.
2. Remove the Boilerplate description in README.md.
3. Run `npm install` or `npm ci`.

------------------------------------------------------------------------------------  

# Extension Name

### Description

Short description of the extension.

### Config

Copy config.sample.js as config.js.

| Field | Type | Description | Default |
| ----- | ---- | ----------- | ------- |

### Available Scripts

In the project directory, you can run:

#### `npm run build`

Builds the project into the `build` folder.

#### `npm run dev`

Watches for changes to the `src` folder and builds the project when changes happen.

### Documentation

- [Getting started](https://developer.chrome.com/docs/extensions/mv3/getstarted/)
- [Extensions Architecture](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/)
