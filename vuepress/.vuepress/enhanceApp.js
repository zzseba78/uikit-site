
import {ExampleRunner, UIkitRunner} from 'yootheme-doctools';
import examples from '../examples/examples.json';
import Code from '../../node_modules/vue-highlight-component';

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
  }) => {

    ExampleRunner.examples = examples;
    ExampleRunner.runners['uikit'] = new UIkitRunner;
    ExampleRunner.components = {
        ...ExampleRunner.components,
        Code
    }

    Vue.component('ExampleRunner',ExampleRunner);

  }