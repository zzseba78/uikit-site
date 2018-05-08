import '../isomorphic';
import Vue from 'vue';
import _ from 'lodash';
import Code from 'vue-highlight-component';
import ExampleRunner from 'yootheme-doctools/ui/app/ExampleRunner.vue';
import UIkitRunner from '!babel-loader!yootheme-doctools/src/runnner/UIkitRunner';
import config from '../.vuepress/config';
import Navbar from '../components/Navbar.vue';
import DocumentationSidebar from '../components/DocumentationSidebar.vue';
import Markdown from 'yootheme-doctools/ui/app/utils/Markdown.vue';
import highlight from 'highlight.js';

const base = Markdown.baseRenderer;
const renderer = Markdown.extendRenderer;

export function sluggify(text) {
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
// renderer.code = (code, lang, escaped) => lang === 'example' ? example(code) : '<div class="uk-margin-medium">' + base.code(code, lang, escaped) + '</div>';
renderer.code = (code, lang, escaped) => {
    const res = '<div class="uk-margin-medium"><pre><code>' + highlight.highlight(lang, code).value + '</code></pre></div>';
    return res;
};
renderer.hr = () => `<hr class="uk-margin-large">`;
renderer.table = (header, body) => `<div class="uk-overflow-auto"><table class="uk-table uk-table-divider"><thead>${header}</thead><tbody>${body}</tbody></table></div>`;
renderer.heading = (text, level) => `<h${level} id="${sluggify(text)}" class="uk-h${level > 1 ? level + 1 : level} tm-heading-fragment"><a href="#${sluggify(text)}">${text}</a></h${level}>`;

ExampleRunner.components = {
    Code
};

ExampleRunner.runners['uikit'] = new UIkitRunner;

Vue.component('Navbar', Navbar);
Vue.component('Code', Code);
Vue.component('DocumentationSidebar', DocumentationSidebar);

Vue.mixin({
    computed: {
        _() {
            return _;
        },
        $config() {
            return config;
        }
    },

    mounted() {

        this.$nextTick(el => {

            const uks = UIkit.util.$$('[uk]', this.$el);

            uks.forEach(el => {

                const name = UIkit.util.attr(el,'uk');
                UIkit.util.attr(el, `uk-${name}`, '');
                const func = UIkit.util.camelize(name);
                UIkit[func](el);

            });
        });

    }
});

export default (context, inject) => {
};