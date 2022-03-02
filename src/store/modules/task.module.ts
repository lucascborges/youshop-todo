import Task from "src/entities/Task";
import moment from "moment";

export interface ITaskModule {
  tasks: Task[];
}

const state: ITaskModule = {
  tasks: [],
};
const mutations = {
  SET_TASK_LIST(state: ITaskModule, tasks: Task[]) {
    state.tasks = tasks;
  },
};
const getters = {
  getAll: (state: ITaskModule): Task[] => {
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
};
