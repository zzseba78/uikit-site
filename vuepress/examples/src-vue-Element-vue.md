# Element

An Element represents an Element in the layout-editor of the Builder. It implicitly extends \`Node\`.

* * *

## methods:

### findId:

Determines the uniquie Id for this component

#### findId( root : [Node](https://developer.mozilla.org/docs/Web/API/Node) , id : [Integer](src-uikit-types-js.md) ) : [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)

#### arguments

<table class="uk-table uk-table-striped"><thead><tr><th>name</th><th>type</th><th>default</th><th>description</th></tr></thead><tbody><tr><td><span>root</span></td><td><span template="types"><span><a href="https://developer.mozilla.org/docs/Web/API/Node">Node</a></span></span></td><td><span>this.builder.layout</span></td><td><span>The root node to start counting from</span></td></tr><tr><td><span>id</span></td><td><span template="types"><span><a href="src-uikit-types-js.html">Integer</a></span></span></td><td><span>1</span></td><td><span>The ID to start counting from</span></td></tr></tbody></table>

#### returns:

[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)

Returns the id of this component

* * *

## computed:

### nodeId

[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)

The uniquie continous ID if this component

## trigger:

### elementHover

triggered when an element in the layout editor is hovered

### elementLeave

triggered when the mouse leaves a layout editor element

### saveElement

triggered when the save save button is clicked

## code:

~~~javascript
import {some, upperFirst} from 'lodash';

/**
 * An Element represents an Element in the layout-editor of the Builder.
 * It implicitly extends `Node`.
 * @extends Node
 */
export default {

    computed: {
        /**
         * The uniquie continous ID if this component
         * @type {Number}
         */
        nodeId() {
            return this.findId().id;
        }
    },

    methods: {

        /**
         * Determines the uniquie Id for this component
         * @returns {Object} Returns the id of this component
         * @private
         * @param {Node} [root = this.builder.layout] - The root node to start counting from
         * @param {Integer} [id = 1] - The ID to start counting from
         */
        findId(root = this.builder.layout, id = 1) {
            let found = some(root.children, child => {

                if (this.node === child) {
                    return true;
                } else if (this.$registry.elements[child.type]) {
                    id++;
                }
                ({id, found} = this.findId(child, id));
                return found;
            });
            return {id, found};

        }

    }

};
~~~

## template:

~~~html
<div class="yo-builder-element uk-flex-1 uk-width-1-1 uk-flex uk-flex-center uk-flex-middle">

    <div class="uk-text-center">
        <img :alt="title" :src="icon" class="uk-svg" width="20" height="20" uk-svg>
        <span class="uk-margin-small-left uk-text-middle">

            <template v-if="exists">{{ title }}</template>
            <i v-else>{{ title }}</i>
        </span>
    </div>
    <!-- @trigger elementHover triggered when an element in the layout editor is hovered-->
    <!-- @param {Number} nodeId - the id of the node that has been hovered -->

    <!-- @trigger elementLeave triggered when the mouse leaves a layout editor element -->
    <!-- @param {Number} nodeId - the id of the node that has been hovered -->
    <a v-if="exists" class="uk-position-cover" @mouseover="$trigger('elementHover', nodeId)" @mouseout="$trigger('elementLeave', nodeId)" @click.prevent="builder.edit(node)"></a>

    <div class="yo-builder-nav-element uk-builder-element-hover">
        <ul class="uk-grid uk-grid-collapse">
            <li><a :title="$trans('Copy')" class="yo-builder-icon-copy" uk-tooltip="delay: 1000" @click.prevent="builder.clone(node)"></a></li>
            <!-- @trigger saveElement triggered when the save save button is clicked -->
            <!-- @param {Node} node - the node to be saved -->
            <li><a :title="$trans('Save in library')" class="yo-builder-icon-save" uk-tooltip="delay: 1000" @click.prevent="$trigger('saveElement', node)"></a></li>
            <li><a :title="$trans('Delete')" class="yo-builder-icon-delete" uk-tooltip="delay: 1000" @click.prevent="builder.remove(node)"></a></li>
        </ul>
    </div>

    <a :title="$trans('Add Element')" class="uk-icon-button yo-builder-button-element yo-builder-icon-add uk-builder-element-hover" uk-tooltip="delay: 1000; pos: right" @click.prevent="$parent.chooseAndAddEntity(index + 1)"></a>

</div>
~~~

* * *

_package: [examples](examples.md)_ _source: [test](https://github.com/dasdeck/doctools/tree/master/examples/./src/vue/Element.vue)_