<template lang="pug">
  v-navigation-drawer(v-model='show' absolute='' temporary='')
    v-list(nav='' dense='')
      v-list-item-group(active-class='deep-purple--text text--accent-4')
        v-list-item(@click="$router.push('/')")
          v-list-item-icon
            v-icon mdi-monitor-dashboard
          v-list-item-title Dashboard
        v-list-item(@click="$router.push('/task-list')")
          v-list-item-icon
            v-icon mdi-account
          v-list-item-title Lista de tarefas
</template>

<script lang="ts">
import Vue from "vue";

const NavigationDrawler = Vue.extend({
  name: "NavigationDrawler",
  data: () => ({
    group: null,
  }),
  props: {
    drawer: Boolean,
  },
  computed: {
    show: {
      // getter
      get: function () {
        return this.drawer;
      },
      set: function (val: Boolean) {
        return val;
      },
    },
  },
  watch: {
    show(val: Boolean) {
      this.$emit("changeDrawer", val);
    },
  },
});
export default NavigationDrawler;
</script>

<style scoped></style>
