exports.seed = function(knex) {
  return knex('achievements').truncate()
    .then(() => {
      return knex('achievements').insert([
        {
            name: "Coffee Master",
            description: "Brought the team coffee",
            date_completed: '2017-07-06 09:00:00'
        },
        {
            name: "Lunch Guru",
            description: "Bought lunch for a fellow teammate",
            date_completed: '2017-06-25 09:00:00'
        }
      ]);
    })
};
