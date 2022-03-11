<template lang="pug">
  v-form
    v-row
      v-text-field(label="Titulo"
        v-model="newTask.title"
        outlined)
    v-row
      v-textarea(outlined=''
        name='input-7-4'
        label='Descrição'
        v-model="newTask.description")
    v-row
      v-select(:items='priorities' v-model="newTask.priority" label='Prioridade' outlined='' item-text="label" item-value="id")
    v-row
      v-dialog(ref='dialog' v-model='modal' :return-value.sync='date' persistent='' width='290px')
        template(v-slot:activator='{ on, attrs }')
          v-text-field(v-model='newTask.estimateFinalisationDate'  outlined='' label='Previsão de termino' prepend-icon='mdi-calendar' readonly='' v-bind='attrs' v-on='on')
        v-date-picker(v-model='newTask.estimateFinalisationDate' scrollable='')
          v-spacer
          v-btn(text='' color='primary' @click='modal = false')
            | Cancel
          v-btn(text='' color='primary' @click='$refs.dialog.save(date)')
            | OK
    v-row
      v-btn(@click="save") Salvar

</template>

<script lang="ts">
import Vue from "vue";
import Task from "@/entities/Task";
import TaskEntity from "@/entities/Task.entity";
import moment from "moment";

const TaskForm = Vue.extend({
  data: () => ({
    priorities: [
      { id: 3, label: "Baixa" },
      { id: 2, label: "Media" },
      { id: 1, label: "Alta" },
    ],
    newTask: {
      title: "",
      description: "",
      estimateFinalisationDate: null,
      priority: 3,
    },
  }),

  methods: {
    resetNewTask() {
      this.newTask = {
        title: "",
        description: "",
        estimateFinalisationDate: null,
        priority: 3,
      };
      if (this.$route.name !== "TaskList") {
        this.$router.push("task-list");
      }
    },
    save() {
      let taskInstance: TaskEntity = Task.create(
        this.newTask.title,
        this.newTask.description,
        moment(this.newTask.estimateFinalisationDate).toDate(),
        this.newTask.priority
      );
      this.$store.dispatch("addTask", taskInstance);
      this.resetNewTask();
    },
  },
});
export default TaskForm;
</script>
