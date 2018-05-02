const globals = [
    'window',
    'Element',
    'Node',
    'NodeList',
    'HTMLCollection',
    'navigator',
    'document'
];

const store = {};

/**
 * uikit tools
 */
const shims = {

    /**
     * shims all neceserry globals in order for UIkit to bootsrap
     */
    install() {
        globals.forEach(name => {
            store[name] = global[name];
        });

        window = {...global, addEventListener: () => {}};

        Element = () => {};
        Element.prototype = {};

        Node = () => {};
        Node.prototype = {};

        NodeList = () => {};
        NodeList.prototype = {};

        HTMLCollection = () => {};
        HTMLCollection.prototype = {};

        navigator = () => {};


        document = {
            documentElement: {
                doScroll() {}
            },
            createElement: () => ({classList: {add() {}, toggle() {}, contains() {}}})
        };


    },


    /**
     * resets the global varaibles to their initial state
     */
    clear() {
        globals.forEach(name => {
            global[name] = store[name];
        });
    }
};

if (typeof window === 'undefined') {
    shims.install();
    module.exports = window.UIkit = global.UIkit = require('../../../assets/uikit/dist/js/uikit.js');
    require('../../../assets/uikit/dist/js/uikit-icons.js')

    shims.clear();
} else {
    module.exports = window.UIkit = require('../../../assets/uikit/dist/js/uikit.js');
    require('../../../assets/uikit/dist/js/uikit-icons.js');


}