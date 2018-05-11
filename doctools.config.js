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
        introduction: {
            label: 'Getting Started',
            items: {
                "Introduction": "introduction",
                "Installation": "installation",
                "Less": "less",
                "Sass": "sass",
                "JavaScript": "javascript",
                "Webpack": "webpack",
                "Custom icons": "custom-icons",
                "Avoiding conflicts": "avoiding-conflicts",
                "RTL support": "rtl",
                "Migration": "migration"
            }
        },
        components : {

            items: package => _.filter(package.getResources(), res => {
                return util.match(util.match.and([
                    'src/js/core/*.js',
                    'src/js/components/*.js',
                    'src/js/mixins/*.js',
                    'docs/components/*.md'
                ], (file, desc) => !desc.isAsset), res.path, res, false);
            })

        },
        utils: {
            match: ['src/js/util/*.js']
        }
    },

    dev: true,

    output: {
        split: true,
        path: __dirname + '/docs'
    },

    // getResourceName: desc => {
    //     const name = desc.path.split('/');
    //     name.pop();

    //     return name.pop() + '-' + desc.name;
    // }
};
