module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('tasks', [
      {
        name: 'SQL',
        in_progress: true,
        description: 'Estudar fundamentos básicos de SQL',
      },
      {
        name: 'Node',
        in_progress: true,
        description: 'Estudar fundamentos básicos de Node',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('tasks', null, {});
  },
};
