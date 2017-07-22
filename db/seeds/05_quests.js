exports.seed = function(knex) {
  return knex('quests').truncate()
    .then(() => {
      return knex('quests').insert([
        {
            type: "Main",
            name: "Test Story - 1",
            description: "This is the desc for project 1",
            xp_amount: 10000,
            project_name: "Main Initiative 1",
            owner_id: 1,
            pivotal_project_id: 2076033,
            story_id: 148637593

        },
        {
            type: "Main",
            name: "Test Story - 2",
            description: "DESC-2",
            xp_amount: 20000,
            project_name: "Main Initiative 1",
            owner_id: 2,
            pivotal_project_id: 2076033,
            story_id: 148637619

        },
        {
            type: "Main",
            name: "Make tons of money",
            description: "cut costs and make more money",
            xp_amount: 30000,
            project_name: "Synergy",
            owner_id: 1,
            pivotal_project_id: 2076039,
            story_id: 148637691

        }
      ]);
    })
};
