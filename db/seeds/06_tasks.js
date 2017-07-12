exports.seed = function(knex) {
  return knex('tasks').truncate()
    .then(() => {
      return knex('tasks').insert([
        {
            quest_id: 1,
            description: "complete task 1",
            pivotal_task_id: 57132007,
            position: 1
        },
        {
            quest_id: 1,
            description: "complete task 2",
            pivotal_task_id: 57132009,
            position: 2
        },
        {
            quest_id: 2,
            description: "one 1 task for this",
            pivotal_task_id: 57132013,
            position: 1
        },
        {
            quest_id: 3,
            description: "build restful api",
            pivotal_task_id: 57132021,
            position: 1
        },
        {
            quest_id: 3,
            description: "sell access to api",
            pivotal_task_id: 57132023,
            position: 2
        },
        {
            quest_id: 3,
            description: "create new revenue stream",
            pivotal_task_id: 57132025,
            position: 3
        }
      ]);
    })
};
