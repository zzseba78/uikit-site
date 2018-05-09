const uikitConf = require('/Users/jms/uikit/doctools.config.js');
const util = require('yootheme-doctools/src/util');
const ModuleMapper = require('yootheme-doctools/src/plugins/ModuleMapper.js');
const RuntimeAnalyzer = require('yootheme-doctools/src/plugins/RuntimeAnalyzer.js');
const path = require('path');

module.exports = {

    ...uikitConf,

    include: [ '/Users/jms/uikit/src/js/@(core|mixin|components)/*'],

     /**
     * extra mapping plugins
     */
    plugins: [
        'RuntimeAnalyzer',
        new ModuleMapper({
            getReadme(desc) {
                return path.join(desc.config.base, 'docs', 'components', desc.name.toLowerCase() + '.md');
            }
        }),
        'UIkitComponentMapper',
        'ComponentLinker',
    ],

    menu: [
        {
            label: 'components',
            match:
                util.match.and([
                    'src/js/core/*.js',
                    'src/js/components/*.js',
                    'src/js/mixins/*.js'
                ], (file, desc) => desc.readme)
        },
        {
            label: 'utils',
            match: ['src/js/util/*.js']
        }
    ],

    dev: true,

    output: {
        split: true,
        path: __dirname + '/docs'
    },

    getResourceName: desc => {
        const name = desc.path.split('/');
        name.pop();

        return desc.name; //name.pop() + '-' + desc.name;
    }
};
