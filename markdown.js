const marked = require('marked');

const base = new marked.Renderer();//Markdown.baseRenderer;
const renderer = new marked.Renderer();

function sluggify(text) {
    return text.toLowerCase().trim().replace(/(&amp;| & )/g, '-and-').replace(/&(.+?);/g, '').replace(/[\s\W-]+/g, '-');
}

const example = code => {

    let id = uniqueid(4);

    return `<div class="uk-position-relative uk-margin-medium">

                <ul uk-tab>
                    <li><a href="#">Preview</a></li>
                    <li><a href="#">Markup</a></li>
                </ul>

                <ul class="uk-switcher uk-margin">
                    <li>${code}</li>
                    <li><pre><code id="${id}" class="lang-html">${code}</code></pre></li>
                </ul>

                <div class="uk-position-top-right uk-margin-small-top">
                    <ul class="uk-iconnav">
                        <li><a class="js-copy" uk-tooltip="Copy to Clipboard" rel="#${id}"><img class="uk-icon" src="../images/icon-clipboard.svg" uk-svg></a></li>
                        <li><a class="js-codepen" uk-tooltip="Edit on Codepen" rel="#${id}"><img class="uk-icon" src="../images/icon-flask.svg" uk-svg></a></li>
                    </ul>
                </div>
            </div>`;
};

const modal = (href, text) => {
    const slug = 'modal-' + sluggify(text);
    return `<a href="#${slug}" uk-toggle><p class="uk-margin-large-bottom"><img src="${href}" alt="${text}"></p></a>
            <div id="${slug}" class="uk-modal-full" uk-modal>
            <div class="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle uk-height-viewport">
            <button class="uk-modal-close-full" type="button" uk-close></button>
            <img src="${href}" alt="${text}">+
            </div></div>`;
};

renderer.strong = text => text === 'Note' ? `<span class="uk-label">${text}</span>` : `<strong>${text}</strong>`;
renderer.list = text => `<ul class="uk-list uk-list-bullet">${text}</ul>`;
renderer.image = (href, title, text) => href.match(/modal$/) ? modal(href, text) : base.image(href, title, text);
renderer.link = (href, title, text) => href.match(/\.md/) ? base.link(href.replace(/.md(.*)/, '$1'), title, text) : base.link(href, title, text);
renderer.code = (code, lang, escaped) => lang === 'example' ? example(code) : '<div class="uk-margin-medium">' + base.code(code, lang, escaped) + '</div>';
// renderer.code = (code, lang, escaped) => {
//     const res = '<div class="uk-margin-medium"><pre><code>' + highlight.highlight(lang, code).value + '</code></pre></div>';
//     return res;
// };
renderer.hr = () => `<hr class="uk-margin-large">`;
renderer.table = (header, body) => `<div class="uk-overflow-auto"><table class="uk-table uk-table-divider"><thead>${header}</thead><tbody>${body}</tbody></table></div>`;
renderer.heading = (text, level) => `<h${level} id="${sluggify(text)}" class="uk-h${level > 1 ? level + 1 : level} tm-heading-fragment"><a href="#${sluggify(text)}">${text}</a></h${level}>`;


module.exports = text => marked(text, {renderer});