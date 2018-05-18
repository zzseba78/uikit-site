const uikitConf = require('/Users/jms/uikit-doctools/doctools.config.js');

const UIkitRunner = require('yootheme-doctools/src/runnner/UIkitRunner.min.js').default;


module.exports = {

    ...uikitConf,

    include: [ 'src/js/@(core|mixin|components)/*', 'docs/**/*.md', 'package.json', 'README.md'],

    runners: {
        uikit: new UIkitRunner
    },

    dev: false,

    output: false


};
