<template lang="pug">
  v-app#inspire
    div
      v-app-bar( color="#00315a" dense dark)
        v-app-bar-nav-icon
        v-toolbar-title YouShop | ToDo List
    v-main
      v-container
        v-row
          v-col(v-for='task in taskList' :key='task.uuid' cols='3')
            task-card(:task="task")
      action-drawler

</template>

<script lang="ts">
import Task from "@/entities/Task";
import Vue from "vue";
import TaskCard from "./components/TaskCard.vue";
import ActionDrawler from "@/components/ActionDrawler.vue";

export default Vue.extend({
  components: {
    TaskCard,
    ActionDrawler,
  },
  mounted() {
    let task = Task.create("Teste Titulo", "", new Date("2022-03-05"));
    task.realFinalisationDate = new Date("2022-04-02");
    let tasks: Task[] = [];
    tasks.push(task);
    this.$store.commit("SET_TASK_LIST", tasks);
  },
  computed: {
    taskList() {
      return this.$store.getters.getAll;
    },
  },
});
</script>
