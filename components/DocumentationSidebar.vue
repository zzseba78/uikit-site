<template>
<div>
  <ul class="uk-nav uk-nav-default tm-nav" :class="{ 'uk-margin-top': index }" v-for="(group, index) in $config.sidebar">
        <li class="uk-nav-header">{{group.label}}</li>
        <router-link active-class="uk-active" tag="li" :to="`/documentation/${group.path && (group.path + '/') || ''}${item}`" :key="item" v-for="(label, item) in group.items" exact><a>{{label}}</a></router-link>
    </ul>
</div>
</template>

