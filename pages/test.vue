<template>
  <div>

<!-- <no-ssr> -->

        <navbar/>

<!-- </no-ssr> -->

        cleint === server
        <span uk-icon="download"></span>
        <button class="uk-button uk-button-default" type="button" uk-toggle="target: #offcanvas">Open</button>

        <img style="color: #fff" width="168" height="155" uk-svg src="../images/uikit-logo-large.svg"></img>

        <div class="uk-offcanvas-content">


            <div id="offcanvas" uk-offcanvas="mode: push; overlay: true">
                <div class="uk-offcanvas-bar">
                    <div class="uk-panel">


                        <ul class="uk-nav uk-nav-default tm-nav">
                            <li class="uk-nav-header">General</li>
                            <li><a href="/">Home</a></li>
                        </ul>

                        <!-- <ul class="uk-nav uk-nav-default tm-nav uk-margin-top" v-for="(pages, category, index) in navigation">
                            <li class="uk-nav-header">{{category}}</li>
                            <li v-for="(p, label) in pages" exact><a :href="'./docs/'+p">{{label}}</a></li>
                        </ul> -->
                    </div>
                </div>
            </div>

        </div>
      </div>
</template>


<script>
export default {
    mounted() {
        debugger;
    }
}
</script>

