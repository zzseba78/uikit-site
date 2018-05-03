# accordion

## usage:

The Accordion component consists of a parent container with the `uk-accordion` attribute, and a title and content part for each accordion item.

<table><thead><tr><th style="text-align:left">Class</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>.uk-accordion-title</code></td><td style="text-align:left">Defines and styles the toggle for each accordion item. Use <code>&lt;a&gt;</code> elements.</td></tr><tr><td style="text-align:left"><code>.uk-accordion-content</code></td><td style="text-align:left">Defines the content part for each accordion item.</td></tr></tbody></table>

~~~html
<ul uk-accordion>
    <li>
        <a class="uk-accordion-title" href="#"></a>
        <div class="uk-accordion-content"></div>
    </li>
</ul>
~~~

<ExampleRunner id="runner-5bbeb037-0d65-3b3f-7d41-4adcfe3f4165" resource="src.uikit.accordion.js"/>

* * *

### No collapsing

By default, all accordion items can be collapsed. To prevent this behavior and always maintain one open item, add the `collapsible: false` option to the attribute.

~~~html
<ul uk-accordion="collapsible: false">...</ul>
~~~

<ExampleRunner id="runner-aa9ff908-6863-e47c-aab1-1990f880fb77" resource="src.uikit.accordion.js"/>

* * *

### Multiple open items

To display multiple content sections at the same time without one collapsing when the other one is opened, add the `multiple: true` option to the `uk-accordion` attribute.

~~~html
<ul uk-accordion="multiple: true">...</ul>
~~~

<ExampleRunner id="runner-4dff463f-f11f-d0ef-d39b-17edee8ab219" resource="src.uikit.accordion.js"/>

* * *

### Set open items

To specify which items should be opened initially, add the `.uk-open` class to the item. You can also use this to open multiple items. Just make sure to add the option `multiple: true` to the `uk-accordion` attribute.

**Note** Alternatively, you can open a single item by adding the `active: <index>` option to the `uk-accordion` attribute, e.g. `active: 1` to show the second element (the index is zero-based). Note that this will overwrite the `uk-open` class.

~~~html
<ul uk-accordion>
    <li></li>
    <li class="uk-open"></li>
    <li></li>
</ul>
~~~

<ExampleRunner id="runner-46616828-3fdd-b12f-5398-cbbed404ed0a" resource="src.uikit.accordion.js"/>

an accordion component

* * *

## props:

<table class="uk-table uk-table-striped"><thead><tr><th>name</th><th>description</th></tr></thead><tbody><tr style="opacity: 1;"><td><span>active</span></td><td><span>Index of the element to open initially.</span></td></tr><tr style="opacity: 1;"><td><span>collapsible</span></td><td><span>Allow all items to be closed.</span></td></tr><tr style="opacity: 1;"><td><span>content</span></td><td><span>The content selector, which selects the accordion content elements.</span></td></tr><tr style="opacity: 1;"><td><span>multiple</span></td><td><span>Allow multiple open items.</span></td></tr><tr style="opacity: 1;"><td><span>targets</span></td><td><span>CSS selector of the element(s) to toggle.</span></td></tr><tr style="opacity: 1;"><td><span>toggle</span></td><td><span>The toggle selector, which toggles accordion items.</span></td></tr><tr style="opacity: 1;"><td><span>transition</span></td><td><span>The transition to use when revealing items. Use keyword for easing functions.</span></td></tr></tbody></table>

## methods:

### toggle:

the toglle method to open or close accordions programatically

#### toggle( item : [NodeLike](src-uikit-types-js.md) , animate : * )

#### arguments

<table class="uk-table uk-table-striped"><thead><tr><th>name</th><th>type</th></tr></thead><tbody><tr><td><span>item</span></td><td><span template="types"><span><a href="src-uikit-types-js.html">NodeLike</a></span></span></td></tr><tr><td><span>animate</span></td><td><span template="types"><span><span>*</span></span></span></td></tr></tbody></table>

* * *

## computed:

### items

Items that are inside this accordion

## code:

~~~javascript
// import {Class, Togglable} from '../mixin/index';
// import {$, $$, attr, filter, getIndex, hasClass, includes, index, toggleClass, unwrap, wrapAll} from '../util/index';
import Togglable from './togglable';
const Class = Togglable;

/**
 *
 * @file
 * @type {UIkitComponent}
 */

 /**
  * test
  */
export function test() {

}

 /**
  * an accordion component
  */
export default {

    mixins: [Class, Togglable],

    props: {
        /**
         * CSS selector of the element(s) to toggle.
         */
        targets: String,
        /**
         * Index of the element to open initially.
         */
        active: null,
        /**
         * Allow all items to be closed.
         */
        collapsible: Boolean,
        /**
         * Allow multiple open items.
         */
        multiple: Boolean,
        /**
         * The toggle selector, which toggles accordion items.
         */
        toggle: String,
        /**
         * The content selector, which selects the accordion content elements.
         */
        content: String,
        /**
         * The transition to use when revealing items. Use keyword for easing functions.
         */
        transition: String
    },

    defaults: {
        targets: '> *',
        active: false,
        animation: [true],
        collapsible: true,
        multiple: false,
        clsOpen: 'uk-open',
        toggle: '> .uk-accordion-title',
        content: '> .uk-accordion-content',
        transition: 'ease'
    },

    computed: {

        /**
         * Items that are inside this accordion
         * @private
         * @param {Object.target} param0
         * @param {NodeLike} $el
         * @returns {NodeLike[]} Returns all nodes insinde this accordion
         */
        items({targets}, $el) {
            return $$(targets, $el);
        }

    },

    events: [

        {

            name: 'click',

            delegate() {
                return `${this.targets} ${this.$props.toggle}`;
            },

            handler(e) {
                e.preventDefault();
                this.toggle(index($$(`${this.targets} ${this.$props.toggle}`, this.$el), e.current));
            }

        }

    ],

    connected() {

        if (this.active === false) {
            return;
        }

        const active = this.items[Number(this.active)];
        if (active && !hasClass(active, this.clsOpen)) {
            this.toggle(active, false);
        }
    },

    update() {

        this.items.forEach(el => this._toggleImmediate($(this.content, el), hasClass(el, this.clsOpen)));

        const active = !this.collapsible && !hasClass(this.items, this.clsOpen) && this.items[0];
        if (active) {
            this.toggle(active, false);
        }
    },

    methods: {

        /**
         * the toglle method to open or close accordions programatically
         * @param {NodeLike} item
         * @param {*} animate
         */
        toggle(item, animate) {

            const index = getIndex(item, this.items);
            const active = filter(this.items, `.${this.clsOpen}`);

            item = this.items[index];

            item && [item]
                .concat(!this.multiple && !includes(active, item) && active || [])
                .forEach(el => {

                    const isItem = el === item;
                    const state = isItem && !hasClass(el, this.clsOpen);

                    if (!state && isItem && !this.collapsible && active.length < 2) {
                        return;
                    }

                    toggleClass(el, this.clsOpen, state);

                    const content = el._wrapper ? el._wrapper.firstElementChild : $(this.content, el);

                    if (!el._wrapper) {
                        el._wrapper = wrapAll(content, '<div>');
                        attr(el._wrapper, 'hidden', state ? '' : null);
                    }

                    this._toggleImmediate(content, true);
                    this.toggleElement(el._wrapper, state, animate).then(() => {
                        if (hasClass(el, this.clsOpen) === state) {

                            if (!state) {
                                this._toggleImmediate(content, false);
                            }

                            el._wrapper = null;
                            unwrap(content);
                        }
                    });

                });
        }

    }
};
~~~

* * *

_package: [examples](examples.md)_ _source: [test](https://github.com/dasdeck/doctools/tree/master/examples/./src/uikit/accordion.js)_