<template>
    <div v-html="html"></div>
</template>

<script>

    import http from 'iso-http';

    export default {
        asyncData(context) {
            const url = `http://localhost:3050/${context.params[0]}`;
            return new Promise(resolve => http.request({url}, res => resolve({html: res.text})));
        }
    }

</script>