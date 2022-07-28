import { DataTypes, Model } from 'sequelize';
import db from '.';

class Task extends Model {
  public id!: number;
  public taskName!: string;
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
    taskName: {
      type: DataTypes.STRING,
      field: 'task_name',
    },
    inProgress: {
      type: DataTypes.BOOLEAN,
      field: 'in_progress',
      defaultValue: true,
    },
    description: {
      type: DataTypes.STRING,
      field: 'description',
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'task',
    timestamps: false,
  },
)

export default Task;