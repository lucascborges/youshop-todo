import Task from "./Task";

const { faker } = require("@faker-js/faker");

describe("Task Test", () => {
  test("Test instance validation", () => {
    expect(() => {
      Task.create("N", "Descricao", new Date());
    }).toThrow();
  });
  test("Test create instance", () => {
    const title = faker.company.bs();
    const description = faker.lorem.paragraph();
    const estimateFinalizationDate = faker.date.soon(90);
    const task = Task.create(title, description, estimateFinalizationDate);
    expect(task.title).toBe(title);
  });
  test("Test set real finalize task", () => {
    const title = faker.company.bs();
    const description = faker.lorem.paragraph();
    const estimateFinalizationDate = faker.date.soon(10);
    const task = Task.create(title, description, estimateFinalizationDate);
    expect(() => {
      task.realFinalisationDate = faker.date.recent(10);
    }).toThrow();
  });
  test("Test set estimate finalize task", () => {
    const title = faker.company.bs();
    const description = faker.lorem.paragraph();
    const estimateFinalizationDate = faker.date.soon(10);
    const task = Task.create(title, description, estimateFinalizationDate);
    expect(() => {
      task.estimateFinalisationDate = faker.date.recent(10);
    }).toThrow();
  });
});
