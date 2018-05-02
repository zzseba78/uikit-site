# Container

## code:

~~~javascript
import Modal from './Modal.vue';

export default {

    components: {
        Modal
    },

    created() {
        
        /**
         * @event test
         * @kind Trigger
         * @param {String} a - parameter a
         * 
         **/
        this.$trigger('test', ['a', 'b']);
    }

}
~~~

## template:

~~~html
<Modal>super simple modal</Modal>
~~~

* * *

_package: [examples](examples.md)_ _source: [test](https://github.com/dasdeck/doctools/tree/master/examples/./src/vue/Container.vue)_