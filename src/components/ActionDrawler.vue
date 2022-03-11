<template lang="pug">
  v-navigation-drawer(v-model="model" absolute='' :bottom='false' right temporary='')
    task-form.ma-7
</template>

<script lang="ts">
import Vue from "vue";
import TaskForm from "./TaskFom.vue";

const ActionDrawler = Vue.extend({
  name: "ActionDrawler",
  components: {
    TaskForm,
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    model: false,
  }),
  watch: {
    value(val) {
      this.model = val;
    },
    model(val) {
      this.$emit("input", val);
    },
  },
});
export default ActionDrawler;
</script>

<style scoped></style>
