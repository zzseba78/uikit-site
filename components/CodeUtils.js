import UIkitRunner from 'yootheme-doctools/src/runnner/UIkitRunner';
import copyToCB from 'copy-text-to-clipboard';

export default {

    methods: {
        click(e) {
            if (UIkit.util.hasClass(e.target.parentNode, 'edit')) {
                debugger;
            } else if (UIkit.util.hasClass(e.target.parentNode, 'copy')) {
                debugger;
            } else {
                debugger;
            }
        },

        edit: UIkitRunner.edit,
        copyToCB(text) {
            copyToCB(text);
        }

    }

}