import Vue from "vue";
import Vuex from "vuex";
import task from "./modules/task.module";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);
const vuexLocal = new VuexPersistence<any>({
  storage: window.localStorage,
});
export default new Vuex.Store({
  plugins: [vuexLocal.plugin],
  modules: {
    task,
  },
});
