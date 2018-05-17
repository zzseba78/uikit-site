import Page from '~/modules/doctools/page.vue';
import HeadlineProvider from './HeadlineProvider';
import CodeUtils from './CodeUtils';

export default {
    extends: Page,
    mixins: [HeadlineProvider, CodeUtils]
}