import {reduce} from 'lodash-es';
import highlight from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import less from 'highlight.js/lib/languages/less';
import bash from 'highlight.js/lib/languages/bash';
import scss from 'highlight.js/lib/languages/scss';

import marked from './markdown';

highlight.registerLanguage('javascript', javascript);
highlight.registerLanguage('xml', xml);
highlight.registerLanguage('less', less);
highlight.registerLanguage('bash', bash);
highlight.registerLanguage('scss', scss);

export default {

    path: '/documentation',

    component: __dirname + '/components/DocPage.vue',

    routeMap(app, data) {

        return reduce(app.resources, (map, res) => {

            if (res.path.includes('/intro/')) {
                map[res.name] = res.resource;//res.resource;
            } else if(res.type === 'UIkitComponent' || (!res.isAsset && res.path.includes('/components/') )) {
                map['component/' + res.name] = res.resource;//res.resource;
            }
            return map;
        }, {});

    },

    highlight(code, lang, frame) {

        // console.log('lang', lang);

        if (!lang) {
            console.warn('you should define needed languages for highlighting');
        }

        const html = lang ? highlight.highlight(lang, code).value : highlight.highlightAuto(code).value;
        return frame ? `<pre><code class="language-${lang}">${html}</code></pre>` : html;

    },

    markdown(markdown) {

        if (markdown.indexOf('{%isodate%}') != -1) {
            markdown = markdown.replace(/{%isodate%}/g, (new Date(Date.now() + 864e5 * 7)).toISOString().replace(/\.(\d+)Z/, '+00:00'));
        }

        const text = marked(markdown, {
            highlight: (code, lang) => {
                return this.highlight(code, lang || 'html');
            }
        });
        return text;

    },

    postProcess(app, html, desc) {

        html = html.replace(/src="\.\//g, `src="${app.config.base}/`);
        html = html.replace(/src="\.\.\/docs/g,`src="${app.config.base}/docs"` );
        html = html.replace(/src="\.\.\/assets\/uikit/g,`src="${app.config.base}"` );
        html = html.replace(/src="\.\.\/images\//g,`src="/images/` );

        return html;

    }

}