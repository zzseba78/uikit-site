const fs = require('fs');

const html = fs.readFileSync('./dist/index.html', 'utf8');

const cleaned = html.replace(/uk="(.*?)"/g, (all, args) => {
    return `uk-${args}`;
});

const clearDom = require('jsdom-global')();

const UIkit = require('uikit');
require('uikit/dist/js/uikit-icons.min.js');

window.document.write(cleaned);

UIkit.update();
UIkit.util.fastdom.flush();

const res = window.document.documentElement.outerHTML;

fs.writeFileSync('./dist/index_.html', res);