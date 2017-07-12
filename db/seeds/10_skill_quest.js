exports.seed = function(knex) {
  return knex('skill_quest').truncate()
    .then(() => {
      return knex('skill_quest').insert([
        {
            skill_id: 1,
            quest_id: 1
        },
        {
            skill_id: 1,
            quest_id: 2
        },
        {
            skill_id: 2,
            quest_id: 2
        },
        {
            skill_id: 1,
            quest_id: 3
        }
      ]);
    })
};
