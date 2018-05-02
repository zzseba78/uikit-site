# Modal

I can write as much as I want here because this block is called "readme"

<ExampleRunner id="runner-f525dcf4-9543-7150-87b5-c4abda133880" resource="src.vue.Modal.vue"/>

more text

Reusable modal component using UIkit.modal and VUE.

* * *

## slots:

#### default

The slot for the content if slotted method is used

* * *

## props:

<table class="uk-table uk-table-striped"><thead><tr><th>name</th><th>description</th></tr></thead><tbody><tr style="opacity: 1;"><td><span>container</span></td><td><span>Adds the uk-modal-Container class</span></td></tr><tr style="opacity: 1;"><td><span>content</span></td><td><span>A component descriptor to construct a child element from</span></td></tr><tr style="opacity: 1;"><td><span>props</span></td><td><span>When using the modal with a content component, you can pass the child's component properties here</span></td></tr><tr><td colspan="2">↳<code>&lt;Modal :props="{type:'checkbox'}" :content="InputConpnent"/&gt;</code></td></tr><tr style="opacity: 1;"><td><span>test</span></td><td><span>a test property</span></td></tr><tr style="opacity: 1;"><td><span>width</span></td><td><span>Optional uk-width-($with) class for the modal to use.</span></td></tr></tbody></table>

## methods:

### getContent:

#### getContent( ) : VueComponentInstance

#### returns:

VueComponentInstance

Returns the current content component

* * *

### contentOnce:

Registers a listener on the content component

#### contentOnce( event : [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) , handler : [Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/function) )

#### arguments

<table class="uk-table uk-table-striped"><thead><tr><th>name</th><th>type</th><th>description</th></tr></thead><tbody><tr><td><span>event</span></td><td><span template="types"><span><a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></span></span></td><td><span>The event name</span></td></tr><tr><td><span>handler</span></td><td><span template="types"><span><a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/function">Function</a></span></span></td><td><span>the function to be called on the event</span></td></tr></tbody></table>

* * *

### open:

open the modal

#### open( options : [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) , events : [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) ) : [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) .(this )

#### arguments

<table class="uk-table uk-table-striped"><thead><tr><th>name</th><th>type</th></tr></thead><tbody><tr><td><span>options</span></td><td><span template="types"><span><a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object">Object</a></span></span></td></tr></tbody></table>

#### options

<table class="uk-table uk-table-striped"><thead><tr><th>name</th><th>type</th><th>description</th></tr></thead><tbody><tr><td><span>events</span></td><td><span template="types"><span><a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object">Object</a></span></span></td><td><span>Hash of listeners to be registered to the content component to be executed once</span></td></tr></tbody></table>

#### returns:

[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) .(this )

Returns a promise resolving with this modal when the content is ready

* * *

### close:

Closes the modal

#### close( ) : [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)

#### returns:

[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)

A promise that resolves when the modal is closed.

* * *

### onHidden:

#### onHidden( )

* * *

## computed:

### clsWidth

resolves the used width class

## emits:

### close

triggered when the modal has been closed

## code:

~~~javascript
import UIkit from 'uikit';

/**
 * Reusable modal component using UIkit.modal and VUE.
 * @example
 * <Modal><ChilComponent/></Modal>
 */
export default {

    props: {
        /**
         * When using the modal with a content component, you can pass the child's component properties here
         * @example
         * <Modal :props="{type:'checkbox'}" :content="InputConpnent"/>
         */
        props: {
            type: Object,
            required: true
        },

        /**
         * a test property
         */
        test: String,

        /**
         * A component descriptor to construct a child element from
         */
        content: Object,

        /**
         * Optional uk-width-($with) class for the modal to use.
         **/
        width: {
            type: String
        },

        /**
         * Adds the uk-modal-Container class
         */
        container: Boolean
    },

    data() {
        return {
            /**
             * A list of registered events
             * @type {String[]}
             */
            contentEvents: [],
            /**
             * Weather this Modal has been opened
             * @type {Boolean}
             */
            opened: false,

            /**
             * the width class resolver
             */

        };
    },

    computed: {

        /**
         * resolves the used width class
         * @returns {String} The class to be used in the modal
         */
        clsWidth() {
            return this.width ? `uk-width-${this.width}` : '';
        }
    },

    /** @private */
    beforeDestroy() {
        this.modal && this.modal.$destroy(true);
    },

    methods: {

        /**
         * @returns {VueComponentInstance} Returns the current content component
         */
        getContent() {
            return this.$slots.default[0].componentInstance || this.$refs.content;
        },

        /**
         * Registers a listener on the content component
         * @param {String} event - The event name
         * @param {Function} handler - the function to be called on the event
         */
        contentOnce(event, handler) {
            this.contentEvents.push(event);
            this.getContent().$once(event, (...args) => {
                handler(...args);
                this.close();
            });
        },

        /**
         * open the modal
         * @param {Object} [options]
         * @param {Object} options.events - Hash of listeners to be registered to the content component to be executed once
         * @returns {Promise.<this>} Returns a promise resolving with this modal when the content is ready
         */
        open({events}) {
            if (!this.modal) {
                this.modal = UIkit.modal(this.$refs.modal, {stack: true});
            }

            return this.modal.show().then(() => {

                if (events) {
                    Object.keys(events).forEach(event => {
                        const handler = events[event];
                        this.contentOnce(event, handler);
                    });
                }
                return this;
            });
        },

        /**
         * Closes the modal
         * @returns {Promise} A promise that resolves when the modal is closed.
         */
        close() {
            return this.modal.hide();
        },

        /**
         * @private
         */
        onHidden() {
            this.getContent().$off(this.contentEvents);

            /**
             * triggered when the modal has been closed
             * @event close
             */
            this.$emit('close');
            this.opened = false;
        }

    }

};
~~~

## template:

~~~html
<div v-show="false">
    <div ref="modal" :class="{'uk-modal-Container': container}" @beforeshow.self="opened = true" @hidden.self="onHidden">
        <div :class="['uk-modal-dialog', clsWidth]">
            <div v-if="opened">
                <component ref="content" v-bind="props " :is="content"/>
                <!-- @slot default The slot for the
                content if slotted method is used -->
                <slot></slot>
            </div>
        </div>
    </div>
</div>
~~~

* * *

_package: [examples](examples.md)_ _source: [test](https://github.com/dasdeck/doctools/tree/master/examples/./src/vue/Modal.vue)_