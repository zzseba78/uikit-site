import {reduce, upperFirst} from 'lodash-es';
import highlight from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import less from 'highlight.js/lib/languages/less';
import bash from 'highlight.js/lib/languages/bash';
import scss from 'highlight.js/lib/languages/scss';
import css from 'highlight.js/lib/languages/css';

import marked from './markdown';

highlight.registerLanguage('javascript', javascript);
highlight.registerLanguage('xml', xml);
highlight.registerLanguage('less', less);
highlight.registerLanguage('bash', bash);
highlight.registerLanguage('scss', scss);
highlight.registerLanguage('css', css);

export default {

    path: '/Documentation',

    component: __dirname + '/components/Page.vue',

    onWrite(app, data) {
        const components = {};
        const sorted = Object.values(data.resources)
        .filter(res => (res.type === 'UIkitComponent' && res.assets.readme) || (!res.isAsset && res.fileInPackage.includes('/components/')))
        .sort((a, b) => a.name.localeCompare(b.name));

        sorted.forEach(res => components[res.name] = upperFirst(res.name.replace(/-[a-z]/g, res => ` ${res.substr(1).toUpperCase()}`)));

        app.writeExport('_components.json', components);
    },

    routeMap(app, data) {

        return reduce(data.resources, (map, res) => {

            if (res.fileInPackage.includes('/intro/')) {
                map[res.name] = res.resource;//res.resource;
            } else if (res.type === 'UIkitComponent' || (!res.isAsset && res.fileInPackage.includes('/components/'))) {
                map['component/' + res.name] = res.resource;//res.resource;
            }
            return map;
        }, {});

    },

    highlight(code, lang, frame) {

        if (!lang) {
            console.warn('you should define needed languages for highlighting');
        }

        const html = lang ? highlight.highlight(lang, code).value : highlight.highlightAuto(code).value;

        return `${frame ? `<pre><code class="language-${lang}">${html}</code></pre>` : html}`;

    },

    markdownPreprocess(markdown) {
        if (markdown.indexOf('{%isodate%}') >= 0) {
            const d = new Date(Date.now() + 864e5 * 7);
            const time = d.toISOString().replace(/\.(\d+)Z/, '+00:00');
            markdown = markdown.replace(/{%isodate%}/g, time);
        }

        return markdown;
    },

    markdown(markdown) {

        markdown = markdown.replace(/\]\(javascript\.md/g, '](../javascript.md');

        const text = marked(markdown, {
            highlight: (code, lang) => {
                return this.highlight(code, lang || 'html');
            }
        });
        return text;

    },

    postProcess(app, html, desc) {

        html = html.replace(/src="\.\//g, `src="${app.config.base}/`);
        html = html.replace(/src="\.\.\/docs/g, `src="${app.config.base}/docs"` );
        html = html.replace(/src="\.\.\/assets\/uikit/g, `src="${app.config.base}"` );
        html = html.replace(/src="\.\.\/images\//g, `src="/images/` );

        return html;

    }

}