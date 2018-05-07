


<template>


    <div class="uk-section-primary tm-section-texture uk-preserve-color">
        <Navbar class="uk-navbar-container tm-navbar-container uk-light uk-sticky uk-navbar-transparent" show-on-up="true" animation="uk-animation-slide-top" cls-inactive="uk-navbar-transparent" top="400"/>
        <div class="uk-section" uk-height-viewport="expand: true">
            <div class="uk-container uk-container-small">

                <div class="uk-card uk-card-default uk-card-body">

                    <h1 class="uk-margin-medium uk-text-center">Changelog</h1>

                    <div v-html="changelog"></div>

                </div>

            </div>
        </div>
    </div>

</template>

<script>


    function getChangelog() {

        return import('!raw-loader!uikit/CHANGELOG.md').then(text => {
            return import('marked').then(marked => {

                console.warn('render changelog');
                var renderer = new marked.Renderer(), section;

                renderer.list = text => `<ul class="uk-list">${text}</ul>`;

                renderer.listitem = function (text) {

                    var label = '';

                    switch (section) {

                        case 'Added':
                            label = 'uk-label-success';
                            break;

                        case 'Removed':
                        case 'Deprecated':
                            label = 'uk-label-warning';
                            break;

                        case 'Fixed':
                        case 'Security':
                            label = 'uk-label-danger';
                    }

                    return `<li class="uk-flex uk-flex-top">
                                <span class="uk-label ${label} uk-margin-right uk-text-center uk-width-small tm-label-changelog uk-flex-none">${section}</span>
                                <div>${text}</div>
                            </li>`;
                };

                renderer.heading = (text, level) => {


                    text = text.replace(/(\(.*?\))/, '<span class="uk-text-muted">$1</span>');

                    if (level === 2) {
                        return '<h' + level + ' class="uk-h3">' + text + '</h' + level + '>';
                    }

                    if (level === 3) {
                        section = text;
                    }

                    return '';
                };

                return {changelog: marked(text, {renderer})};
            })
        });

    }

    export default {

        asyncData() {

            return getChangelog();
        }
    }

</script>
