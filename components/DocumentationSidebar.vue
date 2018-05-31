<template>
    <div>
        <ul v-for="(group, index) in $config.sidebar" :class="{ 'uk-margin-top': index }" class="uk-nav uk-nav-default tm-nav">
            <li class="uk-nav-header">{{ group.label }}</li>
            <router-link v-for="(label, item) in group.items" :to="`/documentation/${group.path && (group.path + '/') || ''}${item}`" :key="item" active-class="uk-active" tag="li" exact><a>{{ label }}</a></router-link>
        </ul>
    </div>
</template>

