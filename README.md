# Webpack separate configs.

Taking a DRY approach, using separate webpack configurations for dev/prod environments, merging into a common configuration.

* webpack.common.js
* webpack.dev
* webpack.prod.js

## Usage

Clone locally and install dependencies:

`npm -i`

Run scripts contained in **package.json** via NPM:

* for a development build using [webpack-dev-server](https://github.com/webpack/webpack-dev-server) for live-reloads: `npm run start` 
* for a production build to the generated **dist/** directory: `npm run build`

**Note:** both builds currently employ minification of built CSS/JS/HTML - the development build has inline sourcemapping available.