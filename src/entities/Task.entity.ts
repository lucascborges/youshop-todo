const { v4: uuidv4 } = require("uuid");

class TaskEntity {
  uuid: String;
  title: String;
  description: String;
  createdAt: Date | null;
  updatedAt: Date | null;
  estimateFinalisationDate: Date | null;
  realFinalisationDate: Date | null;
  priority: number;

  public constructor(
    title: string,
    description: string,
    estimateFinalisationDate: Date | null = null,
    priority: number
  ) {
    this.title = title;
    this.description = description;
    this.estimateFinalisationDate = estimateFinalisationDate;
    this.createdAt = new Date();
    this.realFinalisationDate = null;
    this.updatedAt = null;
    this.uuid = uuidv4();
    this.priority = priority;
  }
}

export default TaskEntity;
