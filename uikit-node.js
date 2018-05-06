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

        global.window = {...global, addEventListener: () => {}};

        global.Element = () => {};
        global.Element.prototype = {};

        global.Node = () => {};
        global.Node.prototype = {};

        global.NodeList = () => {};
        global.NodeList.prototype = {};

        global.HTMLCollection = () => {};
        global.HTMLCollection.prototype = {};

        global.navigator = () => {};


        global.document = {
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
    global.UIkit = require('uikit');
    global.window = global.window || {};
    global.window.UIkit = global.UIkit;
    require('uikit/dist/js/uikit-icons.js')

    shims.clear();
} else {
    const UIkit = require('uikit');
    if (UIkit) {
        window.UIkit = UIkit;
    }
    require('uikit/dist/js/uikit-icons.js');

}