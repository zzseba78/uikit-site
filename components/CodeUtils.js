import UIkitRunner from '../lib/UIkitRunner';
import copyToCB from 'copy-text-to-clipboard';

function deIndent(code) {
    const lines = code.split('\n').filter(line => line.trim());
    const ws = lines[0].search(/\S/);
    return lines.map(line => line.substr(ws)).join('\n');
}

export default {

    methods: {
        click(e) {

            const target = UIkit.util.closest(e.target, 'a');

            if (UIkit.util.hasClass(target, 'edit')) {

                const el = UIkit.util.closest(target, '.uikit-runner');
                const code = UIkit.util.$('.code', el).innerHTML;

                UIkitRunner.edit(deIndent(code));

            } else if (UIkit.util.hasClass(target, 'copy')) {

                const el = UIkit.util.closest(target, '.uikit-runner');
                const code = UIkit.util.$('.code', el).innerHTML;
                copyToCB(deIndent(code));

            }
        }

    }

};