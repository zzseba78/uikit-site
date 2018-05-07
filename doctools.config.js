const uikitConf = require('uikit/doctools.config.js');
const ModuleMapper = require('yootheme-doctools/src/plugins/ModuleMapper.js');
const RuntimeAnalyzer = require('yootheme-doctools/src/plugins/RuntimeAnalyzer.js');
const path = require('path');

module.exports = {

    ...uikitConf,
     /**
     * extra mapping plugins
     */
    plugins: [
        new RuntimeAnalyzer({
            output: __dirname + '/runtime'
        }),
        new ModuleMapper({
            getReadme(desc) {
                return path.join(__dirname, 'docs', 'components', desc.name.toLowerCase() + '.md');
            }
        }),
        'UIkitComponentMapper',
        'ComponentLinker',
    ],

    output: __dirname + '/docs.json',

    getResourceName: desc => desc.fileInPackage.substr(2)
};
