const uikitConf = require('/Users/jms/uikit/doctools.config.js');
const util = require('yootheme-doctools/src/util');
const ModuleMapper = require('yootheme-doctools/src/plugins/ModuleMapper.js');
const RuntimeAnalyzer = require('yootheme-doctools/src/plugins/RuntimeAnalyzer.js');
const path = require('path');
const _ = require('lodash');

module.exports = {

    ...uikitConf,

    include: [ '/Users/jms/uikit/src/js/@(core|mixin|components)/*', '/Users/jms/uikit/docs/**/*.md'],

    menu: {
        ...require('./intro.json'),
        components : {
            path: 'components',
            items: package => _.filter(package.getResources(), res => {
                return util.match([
                    'src/js/core/*.js',
                    'src/js/components/*.js',
                    'src/js/mixins/*.js',
                    'docs/components/*.md'
                ], res.path, {data:res, matchBase: '/Users/jms/uikit'}) && !res.isAsset;
            })

        }
        // utils: {
        //     match: ['src/js/util/*.js']
        // }
    },

    dev: true,

    output: {
        split: false,
        // path: __dirname + '/docs'
        path: __dirname + '/docs.json'
    },

    // getResourceName: desc => {
    //     const name = desc.path.split('/');
    //     name.pop();

    //     return name.pop() + '-' + desc.name;
    // }
};
