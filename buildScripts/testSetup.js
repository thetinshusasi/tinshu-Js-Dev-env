/// this file isn't transpilled so we need to use ES5 and commonJS

/// Register  babel to transpile before our tests run
require('babel-register')();

/// Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function () {

};
