<template lang="pug">
  v-container
    v-row(no-gutters='')
      v-col(cols='12' sm='2')
        h4 Lista de Tarefas
      v-col(cols='12' sm='10')

    v-row
      v-col(v-for='task in taskList' :key='task.uuid' cols='3')
        task-card(:task="task")
</template>

<script lang="ts">
import Vue from "vue";
import TaskCard from "@/components/TaskCard.vue";
import ActionDrawler from "@/components/ActionDrawler.vue";
import NavigationDrawler from "@/components/NavigationDrawler.vue";

export default Vue.extend({
  components: {
    TaskCard,
    ActionDrawler,
    NavigationDrawler,
  },
  data: () => ({
    drawer: false,
    addDrawer: false,
    logo: require("@/assets/icon.png"),
    showFav: true,
  }),
  computed: {
    showFab(): Boolean {
      return !this.addDrawer;
    },
    taskList() {
      return this.$store.getters.getAll;
    },
  },
});
</script>
