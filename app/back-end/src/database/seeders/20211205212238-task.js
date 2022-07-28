module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('tasks', [
      {
        task_name: 'SQL',
        in_progress: true,
        description: 'Estudar fundamentos básicos de SQL',
      },
      {
        task_name: 'Node',
        in_progress: true,
        description: 'Estudar fundamentos básicos de Node',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('tasks', null, {});
  },
};
