exports.seed = function(knex) {
  return knex('user_achievement').truncate()
    .then(() => {
      return knex('user_achievement').insert([
        {
            user_id: 1,
            achievement_id: 1
        },
        {
            user_id: 1,
            achievement_id: 2
        },
        {
            user_id: 3,
            achievement_id: 1
        },
        {
            user_id: 4,
            achievement_id: 1
        },
        {
            user_id: 8,
            achievement_id: 1
        },
      ]);
    })
};
