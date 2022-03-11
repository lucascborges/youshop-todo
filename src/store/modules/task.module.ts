import moment from "moment";
import TaskEntity from "@/entities/Task.entity";

export interface ITaskModule {
  tasks: TaskEntity[];
}

const state: ITaskModule = {
  tasks: [],
};
const mutations = {
  SET_TASK_LIST(state: ITaskModule, tasks: TaskEntity[]) {
    state.tasks = tasks;
  },
  ADD_TASK(state: ITaskModule, tasks: TaskEntity[]) {
    state.tasks = tasks;
  },
};

const actions = {
  addTask({ commit, state }: any, task: TaskEntity) {
    const taskList = state.tasks;
    taskList.push(task);
    commit("ADD_TASK", taskList);
  },

  removeTask({ commit, state }: any, uuid: String) {
    const index = state.tasks.findIndex((e: any) => e.uuid === uuid);

    if (index > -1) {
      let tasks = JSON.parse(JSON.stringify(state.tasks));
      tasks = tasks.splice(index - 1, 1);
      commit("SET_TASK_LIST", tasks);
    } else {
      throw new Error("Tarefa não encontrada");
    }
  },
};

const getters = {
  getAll: (state: ITaskModule): TaskEntity[] => {
    return state.tasks;
  },
  sumarize: (state: ITaskModule): any[] => {
    const resultList: any[] = [];
    state.tasks.forEach((e) => {
      const createdDate = moment(e.createdAt).format("YYYYMMDD");
      const finalizadeDate = moment(e.realFinalisationDate).format("YYYYMMDD");
      const foundCreatedDate = resultList.find(
        (element) => element.day === createdDate
      );
      if (foundCreatedDate) {
        foundCreatedDate.totalCreated++;
      } else {
        resultList.push({
          totalCreated: 1,
          totalFinalized: 0,
          day: createdDate,
        });
      }
      const foundFinalizedDate = resultList.find(
        (element) => element.day === finalizadeDate
      );
      if (foundFinalizedDate) {
        foundFinalizedDate.totalFinalized++;
      } else {
        if (e.realFinalisationDate) {
          resultList.push({
            totalCreated: 0,
            totalFinalized: 1,
            day: finalizadeDate,
          });
        }
      }
    });
    return resultList;
  },
};
export default {
  state,
  mutations,
  getters,
  actions,
};
