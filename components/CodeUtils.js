import UIkitRunner from '../lib/UIkitRunner';
import copyToCB from 'copy-text-to-clipboard';
import {$, closest, hasClass} from 'uikit-util';

function deIndent(code) {
    const lines = code.split('\n').filter(line => line.trim());
    const ws = lines[0].search(/\S/);
    return lines.map(line => line.substr(ws)).join('\n');
}

export default {

    methods: {
        click(e) {

            const target = closest(e.target, 'a');

            if (hasClass(target, 'edit')) {

                const el = closest(target, '.uikit-runner');
                const code = $('.code', el).innerHTML;

                UIkitRunner.edit(deIndent(code));

            } else if (hasClass(target, 'copy')) {

                const el = closest(target, '.uikit-runner');
                const code = $('.code', el).innerHTML;
                copyToCB(deIndent(code));

            }
        }

    }

}