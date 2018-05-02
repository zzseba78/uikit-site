# animation

## transition:

Transition a CSS value. \*\*Note\*\* Before starting a transition, a value for the CSS property to be transitioned has to be present!

#### transition( element : [NodeLike](src-uikit-types-js.md) , props : [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) , duration : [Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) , timing : [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) ) : [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)

#### arguments

<table class="uk-table uk-table-striped"><thead><tr><th>name</th><th>type</th><th>default</th><th>description</th></tr></thead><tbody><tr><td><span>element</span></td><td><span template="types"><span><a href="src-uikit-types-js.html">NodeLike</a></span></span></td><td><span></span></td><td><span>The element</span></td></tr><tr><td><span>props</span></td><td><span template="types"><span><a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object">Object</a></span></span></td><td><span></span></td><td><span>The CSS properties to be changed</span></td></tr><tr><td><span>duration</span></td><td><span template="types"><span><a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number">Number</a></span></span></td><td><span>400</span></td><td><span>The transition's duration (in milliseconds)</span></td></tr><tr><td><span>timing</span></td><td><span template="types"><span><a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></span></span></td><td><span>'linear'</span></td><td><span>Timing functions, e.g. `linear`, `ease`, `ease-in`, `ease-out`, `ease-in-out`</span></td></tr></tbody></table>

#### returns:

[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)

A promise that resolves when the transition finishes

* * *

## Transition:

The Transition object makes four handy functions accessible.

## Transition.start:

[alias for transition](#transition)

* * *

## Transition.stop:

#### Transition.stop( element : [Element](https://developer.mozilla.org/docs/Web/API/Element) )

#### arguments

<table class="uk-table uk-table-striped"><thead><tr><th>name</th><th>type</th><th>description</th></tr></thead><tbody><tr><td><span>element</span></td><td><span template="types"><span><a href="https://developer.mozilla.org/docs/Web/API/Element">Element</a></span></span></td><td><span>the alement to wait for a transiton to end on</span></td></tr></tbody></table>

* * *

* * *

## animate:

test

#### animate( element : * , animation : * , duration : * , origin : * , out : * )

#### arguments

<table class="uk-table uk-table-striped"><thead><tr><th>name</th><th>type</th><th>default</th></tr></thead><tbody><tr><td><span>element</span></td><td><span template="types"><span><span>*</span></span></span></td><td><span></span></td></tr><tr><td><span>animation</span></td><td><span template="types"><span><span>*</span></span></span></td><td><span></span></td></tr><tr><td><span>duration</span></td><td><span template="types"><span><span>*</span></span></span></td><td><span>200</span></td></tr><tr><td><span>origin</span></td><td><span template="types"><span><span>*</span></span></span></td><td><span></span></td></tr><tr><td><span>out</span></td><td><span template="types"><span><span>*</span></span></span></td><td><span></span></td></tr></tbody></table>

* * *

## code:

~~~javascript
// import {attr} from './attr';
// import {Promise} from './promise';
// import {once, trigger} from './event';
// import {css, propName} from './style';
// import {assign, startsWith, toNodes} from './lang';
// import {addClass, hasClass, removeClass, removeClasses} from './class';

/* @file
    The following functions are to animate elements. They are either used to transition some CSS properties or
    animate whole elements, using UIkit's CSS animations.
 *
 */

/**
 *
 * Transition a CSS value.
 * **Note** Before starting a transition, a value for the CSS property to be transitioned has to be present!
 *
 * @example

### Usage

```html
<div id="example" class="uk-card uk-card-primary uk-card-body">Primary Card</div>
```

```javascript
var element = util.$('#example');

// Transition a CSS property to a certain value
util.transition(element, { 'opacity': 0 })
  .then(console.log('Card was faded out!'));
```

#### Result

```log
Card was faded out!
```

 * @param {NodeLike} element - The element
 * @param {Object} props - The CSS properties to be changed
 * @param {Number} [duration = 400] - The transition's duration (in milliseconds)
 * @param {String} [timing = 'linear'] - Timing functions, e.g. `linear`, `ease`, `ease-in`, `ease-out`, `ease-in-out`
 * @returns {Promise} A promise that resolves when the transition finishes
 */
export function transition(element, props, duration = 400, timing = 'linear') {

    return Promise.all(toNodes(element).map(element =>
        new Promise((resolve, reject) => {

            for (const name in props) {
                const value = css(element, name);
                if (value === '') {
                    css(element, name, value);
                }
            }

            const timer = setTimeout(() => trigger(element, 'transitionend'), duration);

            once(element, 'transitionend transitioncanceled', ({type}) => {
                clearTimeout(timer);
                removeClass(element, 'uk-transition');
                css(element, {
                    'transition-property': '',
                    'transition-duration': '',
                    'transition-timing-function': ''
                });
                type === 'transitioncanceled' ? reject() : resolve();
            }, false, ({target}) => element === target);

            addClass(element, 'uk-transition');
            css(element, assign({
                'transition-property': Object.keys(props).map(propName).join(','),
                'transition-duration': `${duration}ms`,
                'transition-timing-function': timing
            }, props));

        })
    ));

}

/**
 * The Transition object makes four handy functions accessible.
 */
export const Transition = {

    /**
     * alias for transition
     * @kind function
     * @see transition
     */
    start: transition,

    /**
     *
     * @param {Element} element - the alement to wait for a transiton to end on
     */
    stop(element) {
        trigger(element, 'transitionend');
        return Promise.resolve();
    },

    cancel(element) {
        trigger(element, 'transitioncanceled');
    },

    inProgress(element) {
        return hasClass(element, 'uk-transition');
    }

};

const animationPrefix = 'uk-animation-';
const clsCancelAnimation = 'uk-cancel-animation';

/**
 * test
 * @param {*} element
 * @param {*} animation
 * @param {*} duration
 * @param {*} origin
 * @param {*} out
 */
export function animate(element, animation, duration = 200, origin, out) {

    return Promise.all(toNodes(element).map(element =>
        new Promise((resolve, reject) => {

            if (hasClass(element, clsCancelAnimation)) {
                requestAnimationFrame(() =>
                    Promise.resolve().then(() =>
                        animate(...arguments).then(resolve, reject)
                    )
                );
                return;
            }

            let cls = `${animation} ${animationPrefix}${out ? 'leave' : 'enter'}`;

            if (startsWith(animation, animationPrefix)) {

                if (origin) {
                    cls += ` uk-transform-origin-${origin}`;
                }

                if (out) {
                    cls += ` ${animationPrefix}reverse`;
                }

            }

            reset();

            once(element, 'animationend animationcancel', ({type}) => {

                let hasReset = false;

                if (type === 'animationcancel') {
                    reject();
                    reset();
                } else {
                    resolve();
                    Promise.resolve().then(() => {
                        hasReset = true;
                        reset();
                    });
                }

                requestAnimationFrame(() => {
                    if (!hasReset) {
                        addClass(element, clsCancelAnimation);

                        requestAnimationFrame(() => removeClass(element, clsCancelAnimation));
                    }
                });

            }, false, ({target}) => element === target);

            css(element, 'animationDuration', `${duration}ms`);
            addClass(element, cls);

            function reset() {
                css(element, 'animationDuration', '');
                removeClasses(element, `${animationPrefix}\\S*`);
            }

        })
    ));

}

const inProgress = new RegExp(`${animationPrefix}(enter|leave)`);
export const Animation = {

    in(element, animation, duration, origin) {
        return animate(element, animation, duration, origin, false);
    },

    out(element, animation, duration, origin) {
        return animate(element, animation, duration, origin, true);
    },

    inProgress(element) {
        return inProgress.test(attr(element, 'class'));
    },

    cancel(element) {
        trigger(element, 'animationcancel');
    }

};

~~~

* * *

_package: [examples](examples.md)_ _source: [test](https://github.com/dasdeck/doctools/tree/master/examples/./src/utils/animation.js)_