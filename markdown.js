import marked from 'marked';
// const highlight = require('highlight.js');

const base = new marked.Renderer();//Markdown.baseRenderer;
const renderer = new marked.Renderer();

function sluggify(text) {
    return text.toLowerCase().trim().replace(/(&amp;| & )/g, '-and-').replace(/&(.+?);/g, '').replace(/[\s\W-]+/g, '-');
}

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
renderer.hr = () => `<hr class="uk-margin-large">`;
renderer.table = (header, body) => `<div class="uk-overflow-auto"><table class="uk-table uk-table-divider"><thead>${header}</thead><tbody>${body}</tbody></table></div>`;
renderer.heading = (text, level) => `<h${level} id="${sluggify(text)}" class="uk-h${level > 1 ? level + 1 : level} tm-heading-fragment"><a href="#${sluggify(text)}">${text}</a></h${level}>`;


export default (text, options = {}) => marked(text, {renderer, ...options});