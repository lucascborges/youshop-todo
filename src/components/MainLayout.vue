<template lang="pug">
  v-app#inspire
    div
      v-app-bar( color="#00315a" dense dark )
        template(v-slot:extension='')
          v-tooltip(left v-if="showFab")
            template( v-slot:activator="{ on, attrs }")
              v-btn( fab='' color="#6ee222" bottom='' right='' absolute='' v-bind="attrs" v-on="on" @click="addDrawer = true")
                v-icon mdi-plus
            span Adicionar tarefa
        v-app-bar-nav-icon(@click="drawer = !drawer")
        v-img(class="mx-2"
          :src="logo"
          max-height="35"
          max-width="35"
          contain)
        v-toolbar-title  YouShop | ToDo List
    v-main(style="background: #ECEFF1;")
      router-view
      action-drawler(v-model="addDrawer")
      navigation-drawler(:drawer="drawer" @changeDrawer="v => drawer = v")

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
