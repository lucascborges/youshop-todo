<template lang="pug">
  v-navigation-drawer(v-model='drawer' absolute='' temporary='')
    v-list(nav='' dense='')
      v-list-item-group(v-model='group' active-class='deep-purple--text text--accent-4')
        v-list-item
          v-list-item-icon
            v-icon mdi-home
          v-list-item-title Home
        v-list-item
          v-list-item-icon
            v-icon mdi-account
          v-list-item-title Account
</template>

<script lang="ts">
import Vue from "vue";

const NavigationDrawler = Vue.extend({
  name: "NavigationDrawler",
  data: function () {
    return {
      drawer: true,
    };
  },
});
export default NavigationDrawler;
</script>

<style scoped></style>
