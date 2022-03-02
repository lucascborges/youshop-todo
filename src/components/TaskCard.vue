<template lang="pug">
  v-card.mx-auto
    v-card-title.white--text(:class="statusClass")
      v-icon(large='' left='' color='white' )
        | mdi-clipboard-list
      span.text-h6.font-weight-light {{task.title}}
    v-card-text.text-6.font-weight-bold.black--text--text.mt-5
      | "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
    v-card-actions
      v-list-item.grow
        v-row(align='center' justify='end')
          v-btn(small color="#6ee222" )
            v-icon.mr-1(x-small)
              | mdi-check-bold
            span.subheading Finalizar
          v-btn.pl-6.ml-6(small color="#7c9eb8" )
            v-icon.mr-1(x-small)
              | mdi-delete
            span.subheading Excluir
</template>

<script lang="ts">
import Vue from "vue";

const TaskCard = Vue.extend({
  name: "TaskCard",
  computed: {
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
  props: {
    task: Object,
  },
});
export default TaskCard;
</script>

<style scoped></style>
