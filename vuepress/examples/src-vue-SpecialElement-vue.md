# SpecialElement

* * *

## computed:

### myPrivateMember

[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)

a fucking test memebers

## code:

~~~javascript
import Element from './Element.vue';

export default {
    extends: Element,
    computed: {

        /**
         * a fucking test memebers
         * @private
         * @type {String}
        */
        myPrivateMember() {
            return "test"
        }
    }
}
~~~

* * *

_package: [examples](examples.md)_ _source: [test](https://github.com/dasdeck/doctools/tree/master/examples/./src/vue/SpecialElement.vue)_