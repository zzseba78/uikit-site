<template>

    <div class="uk-section-primary tm-section-texture">

        <Navbar class="uk-navbar-transparent"></Navbar>

        <div class="uk-section uk-section-small uk-text-center" uk-height-viewport>
            <div class="uk-width-1-1">
                <div class="uk-container">

                    <h1 class="uk-margin-medium uk-text-center">{{error.statusCode}}</h1>

                    <p class="uk-text-large">{{error.message}}</p>

                </div>
            </div>
        </div>

    </div>

</template>

<script>


export default {
    props: ['error'],

    created() {
        debugger;
    }
}

</script>