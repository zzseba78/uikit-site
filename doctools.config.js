const uikitConf = require('uikit/doctools.config.js');


module.exports = {

    ...uikitConf,

    include: [ 'src/js/@(core|mixin|components)/*', 'docs/**/*.md', 'package.json', 'README.md'],


    dev: true,

    output: false


};
