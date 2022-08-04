import { DataTypes, Model } from "sequelize";
import db from ".";

class Task extends Model {
  public id!: number;
  public name!: string;
  public inProgress!: boolean;
  public description!: string;
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      field: "name",
    },
    inProgress: {
      type: DataTypes.BOOLEAN,
      field: "in_progress",
      defaultValue: true,
    },
    description: {
      type: DataTypes.STRING,
      field: "description",
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: "task",
    timestamps: false,
  }
);

export default Task;
