const uikitConf = require('/Users/jms/uikit/doctools.config.js');

const ModuleMapper = require('yootheme-doctools/src/plugins/ModuleMapper.js');
const RuntimeAnalyzer = require('yootheme-doctools/src/plugins/RuntimeAnalyzer.js');
const path = require('path');

module.exports = {

    ...uikitConf,
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

    dev: true,

    output: __dirname + '/docs.json',

    getResourceName: desc => {
        const name = desc.path.split('/');
        name.pop();

        return 'documentation/' + name.pop() + '-' + desc.name;
    }
};
