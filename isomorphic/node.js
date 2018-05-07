require('jsdom-global')();

const UIkit = require('uikit');
const Icons = require('uikit/dist/js/uikit-icons');
UIkit.use(Icons);

module.exports = UIkit;