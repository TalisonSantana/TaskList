"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Task extends sequelize_1.Model {
}
Task.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    taskName: {
        type: sequelize_1.DataTypes.STRING,
        field: 'task_name',
    },
    inProgress: {
        type: sequelize_1.DataTypes.BOOLEAN,
        field: 'in_progress',
        defaultValue: true,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        field: 'description',
    },
}, {
    underscored: true,
    sequelize: _1.default,
    modelName: 'task',
    timestamps: false,
});
exports.default = Task;
//# sourceMappingURL=Task.js.map