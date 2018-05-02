# ajax

HTTP transport tools The following functions are to work with asynchronous tasks. They are used for executing code asynchronously.

## ajax:

Make asynchronous calls to a specific URL and pass it some data.

#### ajax( url : [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) , options : [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) , data : [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) , method : [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) ) : [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)

#### arguments

<table class="uk-table uk-table-striped"><thead><tr><th>name</th><th>type</th><th>description</th></tr></thead><tbody><tr><td><span>url</span></td><td><span template="types"><span><a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></span></span></td><td><span>The URL to call</span></td></tr><tr><td><span>options</span></td><td><span template="types"><span><a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object">Object</a></span></span></td><td><span>Additional options passed to the ajax call</span></td></tr></tbody></table>

#### options

<table class="uk-table uk-table-striped"><thead><tr><th>name</th><th>type</th><th>description</th></tr></thead><tbody><tr><td><span>data</span></td><td><span template="types"><span><a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object">Object</a></span></span></td><td><span>Additional data passed to the request</span></td></tr><tr><td><span>method</span></td><td><span template="types"><span><a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></span></span></td><td><span>Method to call the URL, e.g. `GET`, `POST`, `PUT`, `DELETE`</span></td></tr></tbody></table>

#### returns:

[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)

A promise that resolves with the given payload on success and rejects on failure

* * *

## getImage:

Load an image asynchronously.

#### getImage( src : [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) ) : [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) .([Image](https://developer.mozilla.org/docs/Web/API/Image) , [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) )

#### arguments

<table class="uk-table uk-table-striped"><thead><tr><th>name</th><th>type</th><th>description</th></tr></thead><tbody><tr><td><span>src</span></td><td><span template="types"><span><a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String">String</a></span></span></td><td><span>url to an image</span></td></tr></tbody></table>

#### returns:

[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) .([Image](https://developer.mozilla.org/docs/Web/API/Image) , [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) )

A promise resolving with an Image object

* * *

## code:

~~~javascript
/**
 * @file
 * HTTP transport tools
 * The following functions are to work with asynchronous tasks. They are used for executing code asynchronously.
 */
// import {on} from './event';
// import {Promise} from './promise';
// import {assign, noop} from './lang';

/**
 * Make asynchronous calls to a specific URL and pass it some data.
 *
 * @example
 *
### Usage

```javascript
util.ajax('/api/users', { responseType: 'json' })
.then(function(xhr) {
    console.log(xhr.response);
});
```

### Result

```json
{parsed: 'json-object', with: 'some', example: 'data'}
```
 *
 * @category web
 * @param {String} url - The URL to call
 * @param {Object} [options] - Additional options passed to the ajax call
 * @param {Object} options.data - Additional data passed to the request
 * @param {String} options.method - Method to call the URL, e.g. `GET`, `POST`, `PUT`, `DELETE`
 *
 * @returns {Promise} A promise that resolves with the given payload on success and rejects on failure
 */
export function ajax(url, options) {
    return new Promise((resolve, reject) => {

        const env = assign({
            data: null,
            method: 'GET',
            headers: {},
            xhr: new XMLHttpRequest(),
            beforeSend: noop,
            responseType: ''
        }, options);

        env.beforeSend(env);

        const {xhr} = env;

        for (const prop in env) {
            if (prop in xhr) {
                try {

                    xhr[prop] = env[prop];

                } catch (e) {}
            }
        }

        xhr.open(env.method.toUpperCase(), url);

        for (const header in env.headers) {
            xhr.setRequestHeader(header, env.headers[header]);
        }

        on(xhr, 'load', () => {

            if (xhr.status === 0 || xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                resolve(xhr);
            } else {
                reject(assign(Error(xhr.statusText), {
                    xhr,
                    status: xhr.status
                }));
            }

        });

        on(xhr, 'error', () => reject(assign(Error('Network Error'), {xhr})));
        on(xhr, 'timeout', () => reject(assign(Error('Network Timeout'), {xhr})));

        xhr.send(env.data);
    });
}
/**
 * Load an image asynchronously.
 * @example
### Usage

```javascript
util.getImage('/path/to/image.jpeg')
.then(function(img) {
    console.log(img);
});
```

### Result

```html
<img src="/path/to/image.jpeg">
```
 * @param {String} src - url to an image
 * @returns {Promise.<Image, Error>} A promise resolving with an Image object
 */
export function getImage(src) {

    return new Promise((resolve, reject) => {
        const img = new Image();

        img.onerror = reject;
        img.onload = () => resolve(img);

        img.src = src;
    });

}

~~~

* * *

_package: [uikit-utils](packages-uikit-utils.md)_ _source: [test](https://github.com/dasdeck/doctools/tree/master/examples/./packages/uikit-utils/src/ajax.js)_