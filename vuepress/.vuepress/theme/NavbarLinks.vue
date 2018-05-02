<template>
    <ul>
        <router-link v-for="entry in $site.themeConfig.nav" :to="entry.link" tag="li"><a>{{entry.text}}</a></router-link>
    </ul>
</template>