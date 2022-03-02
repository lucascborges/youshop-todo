<template lang="pug">
  v-navigation-drawer(v-model='drawer' absolute='' bottom='false' right temporary='')
    template(v-slot="append" ) oi
    v-list(nav='' dense='')
      v-list-item-group(v-model='group' active-class='deep-purple--text text--accent-4')
        v-list-item
          v-list-item-title Foo
        v-list-item
          v-list-item-title Bar
        v-list-item
          v-list-item-title Fizz
        v-list-item
          v-list-item-title Buzz
</template>

<script lang="ts">
import Vue from "vue";

const ActionDrawler = Vue.extend({
  name: "ActionDrawler",
  data: function () {
    return {
      drawer: true,
    };
  },
});
export default ActionDrawler;
</script>

<style scoped></style>
