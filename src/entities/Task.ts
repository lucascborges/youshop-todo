import moment from "moment";

const { v4: uuidv4 } = require("uuid");

class Task {
  private constructor(
    title: string,
    description: string,
    estimateFinalisationDate: Date | null = null
  ) {
    this._title = title;
    this._description = description;
    this._estimateFinalisationDate = estimateFinalisationDate;
    this._createdAt = new Date();
    this._realFinalisationDate = null;
    this._updatedAt = null;
    this._uuid = uuidv4();
  }

  private _uuid: string;

  get uuid(): string {
    return this._uuid;
  }

  private _title: string;

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  private _description: string;

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  private _createdAt: Date | null;

  get createdAt(): Date | null {
    return this._createdAt;
  }

  private _updatedAt: Date | null;

  get updatedAt(): Date | null {
    return this._updatedAt;
  }

  private _estimateFinalisationDate: Date | null;

  get estimateFinalisationDate(): Date | null {
    return this._estimateFinalisationDate;
  }

  set estimateFinalisationDate(value: Date | null) {
    if (this.createdAt && value && value < this.createdAt) {
      throw new Error(
        "A data de encerramento da tarefa não pode ser menor que a data de criação"
      );
    }
    this._estimateFinalisationDate = value;
  }

  private _realFinalisationDate: Date | null;

  get realFinalisationDate(): Date | null {
    return this._realFinalisationDate;
  }

  set realFinalisationDate(value: Date | null) {
    if (this.createdAt && value && value < this.createdAt) {
      throw new Error(
        "A data de encerramento da tarefa não pode ser menor que a data de criação"
      );
    }
    this._realFinalisationDate = value;
  }

  static create(
    title: string,
    description: string,
    estimateFinalizationDate: Date | null = null
  ) {
    if (!title || title.length < 3) {
      throw new Error("O campo titulo deve possuir 3 ou mais caracteres.");
    }
    return new Task(title, description, estimateFinalizationDate);
  }

  isExpired(): boolean {
    const today = moment(new Date()).format("YYYYMMDD");
    const estimateDate = moment(this._estimateFinalisationDate).format(
      "YYYYMMDD"
    );
    const finalizedDate = moment(this._realFinalisationDate).format("YYYYMMDD");
    if (finalizedDate) {
      return false;
    }
    if (today <= estimateDate) {
      return false;
    }
    return true;
  }

  isClosed(): boolean {
    if (this._realFinalisationDate) {
      return false;
    }
    return false;
  }

  isExpiring(): boolean {
    const today = moment(new Date()).format("YYYYMMDD");
    const estimateDate = moment(this._estimateFinalisationDate).format(
      "YYYYMMDD"
    );
    const finalizedDate = moment(this._realFinalisationDate).format("YYYYMMDD");
    if (finalizedDate) {
      return false;
    }
    if (today === estimateDate) {
      return false;
    }
    return true;
  }
}

export default Task;
