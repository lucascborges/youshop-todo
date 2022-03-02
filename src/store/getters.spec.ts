import store from "./index";
import faker from "@faker-js/faker";
import TaskEntity from "../entities/Task";
import Task from "../entities/Task";
import moment from "moment";

test("Sumarize tasks", () => {
  const today = new Date();
  const tasks = [];
  for (let i = 0; i < 25; i++) {
    const newTask = TaskEntity.create(
      faker.company.bs(),
      faker.lorem.paragraph(),
      today
    );
    tasks.push(newTask);
  }
  store.commit("SET_TASK_LIST", tasks);
  let count = 0;
  const newFinalizeDate = new Date("2022-07-21 00:00:00");
  store.getters.getAll.forEach((e: Task) => {
    if (count < 5) {
      e.realFinalisationDate = newFinalizeDate;
      count++;
    }
  });
  const sumarized = store.getters.sumarize;
  const finalizedTask = sumarized.find((e: any) => {
    const objectDate = moment(e.day).format("YYYYMMDD");
    const newDate = moment(newFinalizeDate).format("YYYYMMDD");
    if (objectDate === newDate) {
      return e;
    }
  });

  const todayTask = sumarized.find((e: any) => {
    const objectDate = moment(e.day).format("YYYYMMDD");
    const newDate = moment(today).format("YYYYMMDD");
    if (objectDate === newDate) {
      return e;
    }
  });
  expect(
    finalizedTask.totalFinalized === 5 && todayTask.totalCreated === 25
  ).toBe(true);
});
