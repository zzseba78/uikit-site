<template>
    <div v-html="html"></div>
</template>

<script>

    export default {
        asyncData(context) {
            const url = `http://localhost:3050/${context.params[0]}`;
            return UIkit.util.ajax(url).then(res => {
                return {html: res.responseText};
            })
        }
    }

</script>