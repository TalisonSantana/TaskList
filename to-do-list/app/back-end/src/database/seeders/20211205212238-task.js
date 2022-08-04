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
        in_progress: false,
        description: 'Estudar fundamentos básicos de Node',
      },
      {
        name: 'React',
        in_progress: true,
        description: 'Estudar fundamentos básicos de React',
      },
      {
        name: 'React Native',
        in_progress: false,
        description: 'Estudar fundamentos básicos de React Native',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('tasks', null, {});
  },
};
