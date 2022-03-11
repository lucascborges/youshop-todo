<template lang="pug">
  v-card
    v-card-title.white--text(:class="statusClass")
      v-icon(large='' left='' color='white' )
        | mdi-clipboard-list
      span.text-h6.font-weight-light {{task.title}}
    v-card-text.task-card.text-6.font-weight-bold.black--text--text.mt-5
      | {{task.description | str_limit(165)}}
    v-row.ml-3.pa-2.text-right.align-center
      v-btn(x-small icon)
        v-icon(small) mdi-arrow-down-bold-circle
      v-chip(color='green' text-color='white' x-small)
        | Alta
      v-btn(x-small icon)
        v-icon(small) mdi-arrow-up-bold-circle

    v-card-actions
      v-list-item.grow
        v-row(align='center' justify='end')
          v-btn(small color="#6ee222" :disabled="!task.isClosed" )
            v-icon.mr-1(x-small)
              | mdi-check-bold
            span.subheading Finalizar
          v-btn.pl-6.ml-6(small color="#7c9eb8" @click="remove(task.uuid)" )
            v-icon.mr-1(x-small)
              | mdi-delete
            span.subheading Excluir

</template>

<script lang="ts">
import Vue from "vue";

const TaskCard = Vue.extend({
  name: "TaskCard",
  computed: {
    taskFinalized(): Boolean {
      return !!this.task.realFinalisationDate;
    },
    priorityHelper() {
      return {};
    },
    statusClass(): String {
      if (this.task.isClosed) {
        return "grey";
      }
      if (this.task.isExpired) {
        return "red";
      }
      if (this.task.isExpiring) {
        return "yellow";
      }

      return "green";
    },
  },
  methods: {
    remove(id: String) {
      this.$store.dispatch("removeTask", id);
    },
  },
  props: {
    task: Object,
  },
});
export default TaskCard;
</script>

<style scoped>
.task-card {
  min-height: 100px;
  height: 100px;
}
</style>
