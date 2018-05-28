import {UIkitRunner} from 'yootheme-doctools/exports.es.js'; //UIkit

export default class UIkitrunnerSite extends UIkitRunner {

    plain(code, markdown) {

        const res = `<div class="uikit-runner uk-position-relative uk-margin-medium">
                    <ul uk-tab>
                        <li><a href="#">Preview</a></li>
                        <li><a href="#">Markup</a></li>
                    </ul>

                    <ul class="uk-switcher uk-margin">
                        <li class="code">${code}</li>
                        <li>${markdown.renderCode(code, this.getLanguage(code), true)}</li>
                    </ul>

                    <div class="uk-position-top-right uk-margin-small-top">
                        <ul class="uk-iconnav">
                            <li><a class="copy" uk-tooltip="Copy to Clipboard" ><img class="uk-icon" src="/images/icon-clipboard.svg" uk-svg></a></li>
                            <li><a class="edit" uk-tooltip="Edit on Codepen" ><img class="uk-icon" src="/images/icon-flask.svg" uk-svg></a></li>
                        </ul>
                    </div>
                </div>`;
            return res;

    }

}
